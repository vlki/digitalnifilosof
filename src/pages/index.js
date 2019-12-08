import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { css } from "styled-components"
import "whatwg-fetch"

import Layout from "../components/Layout"
import TitleAndMetaTags from "../components/TitleAndMetaTags"

const IndexPage = () => {
  const { allCorpus } = useStaticQuery(
    graphql`
      query {
        allCorpus {
          nodes {
            slug
            philosophers
            texts
            authors
            disabled
          }
        }
      }
    `
  )

  return (
    <Layout>
      <TitleAndMetaTags />
      <main
        css={css`
          margin: 34px auto 0;
          max-width: 920px;
          padding: 0 20px;
        `}
      >
        <h2>Vyberte korpus</h2>

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
              to={corpus.disabled ? undefined : "/" + corpus.slug}
              disabled
              css={css`
                display: block;
                flex: 1 0 280px;
                border: 1px solid #979797;
                margin: 12px;
                padding: 12px 15px;
                box-shadow: 5px 5px 0px 0px rgba(239, 239, 239, 1);
                cursor: ${corpus.disabled ? "default" : "pointer"};
                text-decoration: none;
                color: black;
                opacity: ${corpus.disabled ? "0.5" : "1"};

                &:hover {
                  border-color: ${corpus.disabled ? "#979797" : "#e4121d"};
                  box-shadow: 5px 5px 0px 0px
                    ${corpus.disabled
                      ? "rgba(239, 239, 239, 1)"
                      : "rgba(255, 205, 208, 1)"};
                }
              `}
            >
              <h4>{corpus.philosophers}</h4>
              <p
                css={css`
                  margin: 7px 0 0 0;
                `}
              >
                Texty:{" "}
                <span dangerouslySetInnerHTML={{ __html: corpus.texts }} />
              </p>
              <p
                css={css`
                  margin: 7px 0 0 0;
                `}
              >
                Zpracovali: {corpus.authors}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
