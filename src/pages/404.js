import React from "react"
import { css } from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import TitleAndMetaTags from "../components/TitleAndMetaTags"

const NotFoundPage = () => (
  <Layout noHeaderAndFooter lang="cs">
    <TitleAndMetaTags />
    <main
      css={css`
        margin: 70px auto 70px;
        max-width: 560px;
        padding: 0 20px;
      `}
    >
      <h2>Stránka nenalezena</h2>
      <div
        css={css`
          text-align: center;
          margin-top: 20px;
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
          ← Zpět na úvod
        </Link>
      </div>
    </main>
  </Layout>
)

export default NotFoundPage
