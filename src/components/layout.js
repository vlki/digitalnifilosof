import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css, createGlobalStyle } from "styled-components"

import "../styles/normalize.css"

const Layout = ({ children, noHeaderAndFooter, noIntro }) => {
  return (
    <>
      <GlobalStyle />
      {!noHeaderAndFooter && (
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

          {!noIntro && (
            <>
              <p>
                Z&nbsp;anglických textů vybraných filosofů jsme složili korpusy,
                které jsme použili pro natrénování neuronové sítě specializované
                na pochopení a&nbsp;generování textu. Zkusili jsme tak stvořit
                virtuální osobnosti, „digitální filosofy,“ jejichž generované
                texty jsme analyzovali. Na tomto webu natrénované sítě
                zpřístupňujeme, abyste si mohli generování vyzkoušet sami.
              </p>
              <p>
                Web vznikl v&nbsp;rámci předmětu{" "}
                <a href="https://is.cuni.cz/studium/predmety/index.php?do=predmet&kod=ANM50584">
                  Současná filozofie
                </a>{" "}
                vyučovaného na{" "}
                <a href="http://novamedia.ff.cuni.cz/">
                  Studiích nových médií na FF UK
                </a>{" "}
                během podzimu 2019 Ditou Malečkovou (ÚISK FF UK) a&nbsp;Janem
                Tylem (Alpha Industries).
              </p>
            </>
          )}
        </header>
      )}
      {children}
      {!noHeaderAndFooter && (
        <footer
          css={css`
            margin: 70px auto 70px;
            max-width: 560px;
            padding: 0 20px;
          `}
        >
          <p>
            Využíváme{" "}
            <a href="https://openai.com/blog/better-language-models/">
              jazykový model GPT-2 vydaný společností OpenAI
            </a>
            , konkrétně verzi se 345 miliony parametrů.{" "}
            <a href="https://jalammar.github.io/illustrated-gpt2/">
              Přečtěte si, jak funguje
            </a>
            .
          </p>
          {/* <p>
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
          </p> */}
          <p>
            Nejsme si jistí, jak české autorské právo řeší dílo vytvořené umělou
            inteligencí. Prozatimně lze použít generované texty za dodržení
            podmínek licence{" "}
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
          <p>
            Asembláž webu za pomoci knihoven{" "}
            <a href="https://github.com/minimaxir/gpt-2-simple">gpt-2-simple</a>{" "}
            a{" "}
            <a href="https://github.com/minimaxir/gpt-2-cloud-run">
              gpt-2-cloud-run
            </a>{" "}
            pospojoval <a href="mailto:jan.vlcek@vlki.cz">Jan Vlček</a>.
          </p>
        </footer>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noHeaderAndFooter: PropTypes.bool,
  noIntro: PropTypes.bool,
}

Layout.defaultProps = {
  noHeaderAndFooter: false,
  noIntro: false,
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
