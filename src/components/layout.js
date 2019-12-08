import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css, createGlobalStyle } from "styled-components"

import "../styles/normalize.css"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <header
        css={css`
          margin: 24px auto 0;
          max-width: 560px;
          padding: 0 20px;
        `}
      >
        <h1>
          <Link
            to="/"
            css={css`
              color: black;
              text-decoration: none;

              &:hover {
                color: #e4121d;
              }
            `}
          >
            Digitální filosof
          </Link>
        </h1>

        <p>
          Z anglických textů vybraných filosofů jsme složili korpusy, které jsme
          použili pro natrénování neuronové sítě specializované na pochopení
          a generování textu. Zkusili jsme tak stvořit virtuální osobnosti,
          „digitální filosofy,“ jejichž generované texty jsme analyzovali. Na
          tomto webu natrénované sítě zpřístupňujeme, abyste si mohli generování
          vyzkoušet sami.
        </p>
        <p>
          Jde o projekt z předmětu{" "}
          <a href="https://is.cuni.cz/studium/predmety/index.php?do=predmet&kod=ANM50584">
            Současná filozofie
          </a>{" "}
          v rámci{" "}
          <a href="http://novamedia.ff.cuni.cz/">
            Studií nových médií na FF UK
          </a>{" "}
          z podzimu 2019.
        </p>
      </header>
      {children}
      <footer
        css={css`
          margin: 70px auto 0;
          max-width: 560px;
          padding: 0 20px;
        `}
      >
        <p>
          Využíváme{" "}
          <a href="https://openai.com/blog/better-language-models/">
            jazykový model GPT-2 vydaný společností OpenAI
          </a>
          , konkrétně verzi se 345 miliony parametrů.
        </p>
        <p>
          Generované texty lze použít za dodržení podmínek licence{" "}
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc/4.0/"
          >
            Creative Commons Attribution-NonCommercial 4.0
          </a>
          .
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc/4.0/"
          >
            <img
              alt="Creative Commons License"
              src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
            />
          </a>
        </p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const GlobalStyle = createGlobalStyle`
	html {
		font-family: Merriweather, serif;

		/* Fix size to 16px as we don't have all the sizes in relative units */
		font-size: 16px;

		text-rendering: optimizeLegibility;
	}

	a {
		color: #E4121D;
		text-decoration: underline;

		&:hover {
			color: black;
		}
	}

	p {
		line-height: 1.6;
		margin: 16px 0;
	}

	h1 {
		font-size: 30px;
		font-weight: 900;
		text-align: center;
	}

	h2 {
		font-size: 22px;
		font-weight: 900;
		text-align: center;
	}

	h3 {
		font-size: 18px;
		font-weight: 700;
	}

	h4 {
		font-size: 16px;
		font-weight: 700;
	}
`
