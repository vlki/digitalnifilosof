import React, { useState } from "react"
import { Link } from "gatsby"
import { css } from "styled-components"
import promiseRetry from "promise-retry"

import Layout from "../components/Layout"
import TitleAndMetaTags from "../components/TitleAndMetaTags"

const CorpusTemplate = ({ pageContext: { corpus, lang = "cs" } }) => (
  <Layout
    noIntro
    lang={lang}
    langLink={lang === "cs" ? "/en/" + corpus.slug : "/" + corpus.slug}
  >
    <TitleAndMetaTags title={corpus.philosophers} lang={lang} />
    <main
      css={css`
        margin: 34px auto 0;
        max-width: 560px;
        padding: 0 20px;
      `}
    >
      <div
        css={css`
          text-align: center;
          margin-bottom: 10px;
        `}
      >
        <Link
          to={lang === "cs" ? "/" : "/en/"}
          css={css`
            font-size: 14px;
            color: black;
            &:hover {
              color: #e4121d;
            }
          `}
        >
          {lang === "cs" && <>← Zpět na výběr korpusu</>}
          {lang === "en" && <>← Back to list of corpuses</>}
        </Link>
      </div>
      <h2>{corpus.philosophers}</h2>
      {corpus.intro && lang === "cs" && (
        <p dangerouslySetInnerHTML={{ __html: corpus.intro }} />
      )}
      <p>
        {lang === "cs" && (
          <>
            Texty v korpusu:{" "}
            <span dangerouslySetInnerHTML={{ __html: corpus.textsCs }} />
          </>
        )}
        {lang === "en" && (
          <>
            Texts in corpus:{" "}
            <span dangerouslySetInnerHTML={{ __html: corpus.textsEn }} />
          </>
        )}
      </p>
      <p>
        {lang === "cs" && <>Zpracovali:</>}
        {lang === "en" && <>Created by:</>} {corpus.authors}
      </p>
      <Form corpus={corpus} lang={lang} />
    </main>
  </Layout>
)

export default CorpusTemplate

const Form = ({ corpus, lang }) => {
  const [prefix, setPrefix] = useState(
    corpus.examplePrefixes.length > 0 ? corpus.examplePrefixes[0] : ""
  )
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedTexts, setGeneratedTexts] = useState([])

  const onSubmit = e => {
    setIsGenerating(true)

    const sendingPrefix = prefix
    promiseRetry(
      (retry, retryNumber) => {
        console.log("attempt number", retryNumber)
        return fetchGeneratedText(corpus.dataset, sendingPrefix).catch(retry)
      },
      { retries: 5, minTimeout: 0, maxTimeout: 0 }
    )
      .then(text => {
        setGeneratedTexts([
          {
            timestamp: Date.now(),
            prefix: sendingPrefix,
            text: text,
          },
          ...generatedTexts,
        ])
        setIsGenerating(false)
      })
      .catch(() => {
        window.alert(
          lang === "cs"
            ? "Generování se nepodařilo, omlouváme se, zkuste jej prosím za moment znovu."
            : "Sorry, generating failed, try it again in a moment please."
        )
        setIsGenerating(false)
      })

    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit}>
      <div
        css={css`
          margin: 40px 0 0 0;
        `}
      >
        <label
          htmlFor="prefix"
          css={css`
            font-weight: 700;
          `}
        >
          {lang === "cs" && (
            <>Text, na který má generování navázat (anglicky)</>
          )}
          {lang === "en" && <>Text the generating should follow</>}
        </label>
        <textarea
          id="prefix"
          disabled={isGenerating}
          value={prefix}
          onChange={e => setPrefix(e.currentTarget.value)}
          css={css`
            width: 100%;
            border: 1px solid black;
            padding: 7px;
            margin: 7px 0 0 0;
            &:disabled {
              opacity: 0.5;
              border-color: #868686;
            }
          `}
        />
        {corpus.examplePrefixes.length > 0 && (
          <span
            css={css`
              font-size: 14px;
            `}
          >
            {lang === "cs" && <>Například:</>}
            {lang === "en" && <>For example:</>}{" "}
            {corpus.examplePrefixes.map((prefix, index) => (
              <React.Fragment key={index}>
                {index > 0 && index !== corpus.examplePrefixes.length - 1 && (
                  <>, </>
                )}
                {index !== 0 && index === corpus.examplePrefixes.length - 1 && (
                  <>
                    {lang === "cs" && <> nebo </>}
                    {lang === "en" && <> or </>}
                  </>
                )}
                <span
                  onClick={() => setPrefix(prefix)}
                  css={css`
                    text-decoration: underline;
                    cursor: pointer;
                    &:hover,
                    &:focus {
                      color: #e4121d;
                    }
                  `}
                >
                  {prefix}
                </span>
              </React.Fragment>
            ))}
          </span>
        )}
      </div>
      <button
        disabled={isGenerating}
        type="submit"
        css={css`
          display: block;
          margin: 25px 0 0 0;
          background-color: #e4121d;
          color: white;
          padding: 7px 15px;
          &:hover,
          &:active {
            background-color: black;
          }
          &:disabled {
            opacity: 0.5;
            background-color: #e4121d;
            cursor: default;
          }
        `}
      >
        {lang === "cs" && <>{isGenerating ? "Generuji…" : "Generovat"}</>}
        {lang === "en" && <>{isGenerating ? "Generating…" : "Generate"}</>}
      </button>
      <span
        css={css`
          font-size: 14px;
          margin-top: 5px;
          display: ${isGenerating ? "block" : "none"};
        `}
      >
        {lang === "cs" && (
          <>S generováním mějte prosím trpělivost, trvá obvykle 30 sekund.</>
        )}
        {lang === "en" && (
          <>
            Please be patient with the generating, it usually takes 30 seconds.
          </>
        )}
      </span>

      {generatedTexts.length > 0 && (
        <div
          css={css`
            margin: 40px 0 0 0;
          `}
        >
          {lang === "cs" && <h3>Vygenerované texty</h3>}
          {lang === "en" && <h3>Generated texts</h3>}
          {generatedTexts.map((generatedText, index) => (
            <div
              key={generatedText.timestamp}
              css={css`
                background-color: #ebebeb;
                padding: 15px 20px;
                margin: 15px 0;
              `}
            >
              <p
                css={css`
                  margin: 0;
                `}
              >
                {renderTextWithHighlightedPrefix(
                  generatedText.text,
                  generatedText.prefix
                )}
              </p>
            </div>
          ))}
        </div>
      )}
    </form>
  )
}

const renderTextWithHighlightedPrefix = (text, prefix) => {
  if (!text.startsWith(prefix)) {
    return text
  }

  return (
    <>
      <strong>{prefix}</strong>
      <span
        dangerouslySetInnerHTML={{
          __html: convertNewlinesToBr(text.substr(prefix.length)),
        }}
      />
    </>
  )
}

const convertNewlinesToBr = text => text.replace(/(?:\r\n|\r|\n)/g, "<br />")

const fetchGeneratedText = (dataset, prefix) => {
  const encodedPrefix = encodeURIComponent(prefix)

  return fetch(
    `https://digitalnifilosofgpt2.vlki.cz/?dataset=${dataset}&length=100&prefix=${encodedPrefix}`
  ).then(response => {
    if (!response.error) {
      return response.json().then(payload => {
        return payload.text
      })
    } else {
      return Promise.reject()
    }
  })
}
