import React from "react"
import { css } from "styled-components"
import { Link } from "gatsby"

import SiteLayout from "../components/SiteLayout"
import TitleAndMetaTags from "../components/TitleAndMetaTags"

const NotFoundPage = () => (
  <SiteLayout noHeaderAndFooter lang="cs">
    <TitleAndMetaTags lang="cs" />
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
  </SiteLayout>
)

export default NotFoundPage
