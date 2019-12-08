import React, { useState } from "react"
import { Link } from "gatsby"
import { css } from "styled-components"
import "whatwg-fetch"

import Layout from "../components/Layout"
import Image from "../components/image"
import TitleAndMetaTags from "../components/TitleAndMetaTags"

const CorpusTemplate = ({ pageContext: { corpus } }) => (
  <Layout>
    <TitleAndMetaTags />
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
          to="/"
          css={css`
            font-size: 14px;
            color: black;
            &:hover {
              color: #e4121d;
            }
          `}
        >
          ← Zpět na výběr korpusu
        </Link>
      </div>
      <h2>Korpus: {corpus.philosophers}</h2>
      <p>
        Texty: <span dangerouslySetInnerHTML={{ __html: corpus.texts }} />
      </p>
      {/* <p>
        Gilles Deleuze bla bla. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam non ligula sed lectus imperdiet convallis.
        Vivamus pharetra diam eget ligula tristique congue.
      </p> */}
      <p>Zpracovali: {corpus.authors}</p>
      <Form corpus={corpus} />
    </main>
  </Layout>
)

export default CorpusTemplate

const Form = ({ corpus }) => {
  const [prefix, setPrefix] = useState(
    corpus.examplePrefixes.length > 0 ? corpus.examplePrefixes[0] : ""
  )
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedTexts, setGeneratedTexts] = useState([])

  const onSubmit = e => {
    setIsGenerating(true)

    const sendingPrefix = prefix
    fetch(
      "http://46.101.129.163/?length=100&prefix=" +
        encodeURIComponent(sendingPrefix)
    ).then(response => {
      console.log("fetch", { response })

      if (!response.error) {
        response.json().then(payload => {
          setGeneratedTexts([
            {
              timestamp: Date.now(),
              prefix: sendingPrefix,
              text: payload.text,
            },
            ...generatedTexts,
          ])
          setIsGenerating(false)
        })
      }
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
          for="prefix"
          css={css`
            font-weight: 700;
          `}
        >
          Text, na který má generování navázat (anglicky)
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
        <span
          css={css`
            font-size: 14px;
          `}
        >
          Například:{" "}
          {corpus.examplePrefixes.map((prefix, index) => (
            <>
              {index > 0 && index !== corpus.examplePrefixes.length - 1 && (
                <>, </>
              )}
              {index === corpus.examplePrefixes.length - 1 && <>, nebo </>}
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
            </>
          ))}
        </span>
      </div>
      <button
        disabled={isGenerating}
        type="submit"
        css={css`
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
        {isGenerating ? "Generuji…" : "Generovat"}
      </button>

      {generatedTexts.length > 0 && (
        <div
          css={css`
            margin: 40px 0 0 0;
          `}
        >
          <h3>Vygenerované texty</h3>
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
