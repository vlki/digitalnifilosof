import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { css } from "styled-components"

import SiteLayout from "../components/SiteLayout"
import TitleAndMetaTags from "../components/TitleAndMetaTags"

const IndexPage = ({ pageContext: { lang = "cs" } }) => {
  const { allCorpus } = useStaticQuery(
    graphql`
      query {
        allCorpus {
          nodes {
            slug
            philosophers
            textsCs
            textsEn
            authors
          }
        }
      }
    `
  )

  return (
    <SiteLayout lang={lang} langLink={lang === "cs" ? "/en/" : "/"}>
      <TitleAndMetaTags lang={lang} />
      <main
        css={css`
          margin: 34px auto 0;
          max-width: 920px;
          padding: 0 20px;
        `}
      >
        {lang === "cs" && <h2>Vyberte korpus</h2>}
        {lang === "en" && <h2>Choose corpus</h2>}

        <div
          css={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            flex-wrap: wrap;
            margin: 10px -12px 0;
          `}
        >
          {allCorpus.nodes.map(corpus => (
            <Link
              key={corpus.slug}
              to={lang === "cs" ? "/" + corpus.slug : "/en/" + corpus.slug}
              css={css`
                display: block;
                flex: 1 0 280px;
                border: 1px solid #979797;
                margin: 12px;
                padding: 12px 15px;
                box-shadow: 5px 5px 0px 0px rgba(239, 239, 239, 1);
                cursor: pointer;
                text-decoration: none;
                color: black;

                &:hover {
                  border-color: #e4121d;
                  box-shadow: 5px 5px 0px 0px rgba(255, 205, 208, 1);
                }
              `}
            >
              <h4>{corpus.philosophers}</h4>
              <p
                css={css`
                  margin: 7px 0 0 0;
                `}
              >
                {lang === "cs" && (
                  <>
                    Texty:{" "}
                    <span
                      dangerouslySetInnerHTML={{ __html: corpus.textsCs }}
                    />
                  </>
                )}
                {lang === "en" && (
                  <>
                    Texts:{" "}
                    <span
                      dangerouslySetInnerHTML={{ __html: corpus.textsEn }}
                    />
                  </>
                )}
              </p>
              <p
                css={css`
                  margin: 7px 0 0 0;
                `}
              >
                {lang === "cs" && <>Zpracovali:</>}
                {lang === "en" && <>Created by:</>} {corpus.authors}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </SiteLayout>
  )
}

export default IndexPage
