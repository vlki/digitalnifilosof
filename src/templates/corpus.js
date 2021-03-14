import React from "react"
import { Link } from "gatsby"
import { css } from "styled-components"

import Layout from "../components/Layout.js"
import TitleAndMetaTags from "../components/TitleAndMetaTags.js"

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

      <div>
        <a
          href={corpus.notebookLink}
          target="_blank"
          css={css`
            display: inline-block;
            margin: 25px 0 0 0;
            background-color: #e4121d;
            color: white;
            padding: 7px 15px;
            text-decoration: none;

            &:hover,
            &:active {
              background-color: black;
              color: white;
            }
          `}
        >
          {lang === "cs" && <>Otevřít Google Colab notebook s korpusem</>}
          {lang === "en" && <>Open Google Colab notebook with corpus</>}
        </a>
      </div>
      <div
        css={css`
          font-size: 14px;
          margin-top: 5px;
        `}
      >
        {lang === "cs" && (
          <>V notebooku najdete všechny potřebné instrukce pro generování.</>
        )}
        {lang === "en" && (
          <>
            Notebook is right now in Czech only, sorry. You will find all the
            necessary instructions for generating texts there.
          </>
        )}
      </div>
    </main>
  </Layout>
)

export default CorpusTemplate
