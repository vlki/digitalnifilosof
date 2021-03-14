import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css, createGlobalStyle } from "styled-components"

import "../styles/normalize.css"

const SiteLayout = ({ children, lang, langLink, noHeaderAndFooter, noIntro }) => {
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
              to={lang === "cs" ? "/" : "/en/"}
              css={css`
                color: black;
                text-decoration: none;

                &:hover {
                  color: #e4121d;
                }
              `}
            >
              {lang === "cs" && <>Digitální filosof</>}
              {lang === "en" && <>Digital philosopher</>}
            </Link>
          </h1>

          <div
            css={css`
              text-align: center;
              font-size: 14px;
              margin-bottom: 10px;
            `}
          >
            <a
              href={langLink}
              css={css`
                color: #999;
              `}
            >
              {lang === "cs" && <>English</>}
              {lang === "en" && <>Česky</>}
            </a>
          </div>

          {!noIntro && (
            <>
              {lang === "cs" && (
                <>
                  <p>
                    Z&nbsp;anglických textů vybraných filosofů jsme složili
                    korpusy, které jsme použili pro natrénování neuronové sítě
                    specializované na pochopení a&nbsp;generování textu. Zkusili
                    jsme tak stvořit virtuální osobnosti, „digitální filosofy,“
                    jejichž generované texty jsme analyzovali. Na tomto webu
                    natrénované sítě zpřístupňujeme, abyste si mohli generování
                    vyzkoušet sami.
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
                    během podzimu 2019 Mgr.&nbsp;Ditou Malečkovou, Ph.D. (ÚISK
                    FF UK) a&nbsp;Janem Tylem (Alpha Industries s.r.o.).
                  </p>
                </>
              )}
              {lang === "en" && (
                <>
                  <p>
                    We composed corpuses from texts of several philosophers and
                    used them to train a&nbsp;neural network specialized in
                    understanding language and generating new texts. This way we
                    tried to create virtual characters of "digital
                    philosophers," whose generated texts we analyzed. Using this
                    website we give you access to the trained nets so you can
                    try generating yourself.
                  </p>
                  <p>
                    Website was created in course{" "}
                    <a href="https://is.cuni.cz/studium/predmety/index.php?do=predmet&kod=ANM50584">
                      Contemporary Philosophy
                    </a>{" "}
                    taught as part of{" "}
                    <a href="http://novamedia.ff.cuni.cz/">
                      New media studies at Faculty of Arts at Charles University
                    </a>{" "}
                    during autumn 2019 by Mgr.&nbsp;Dita Malečková, Ph.D. (ÚISK
                    FF UK) and&nbsp;Jan Tyl (Alpha Industries s.r.o.).
                  </p>
                </>
              )}
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
          {lang === "cs" && (
            <p>
              Využíváme{" "}
              <a href="https://openai.com/blog/better-language-models/">
                jazykový model GPT-2 od organizace OpenAI
              </a>{" "}
              představený v&nbsp;únoru 2019, konkrétně verzi se 345 miliony
              parametrů. Model GPT-2 je tak schopný, že OpenAI vydávala verze
              postupně kvůli riziku zneužití pro generování dezinformací. Že je
              to riziko odůvodněné ukazuje například výzkum Sarah Kreps
              a&nbsp;Miles McCain z&nbsp;Cornell University{" "}
              <a href="https://www.foreignaffairs.com/articles/2019-08-02/not-your-fathers-bots">
                publikovaný ve <em>Foreign Affairs</em>
              </a>
              , který ukázal, že čtenáři vnímají texty generované pomocí GPT-2
              skoro stejně přesvědčivě jako opravdové články z&nbsp;New York
              Times.{" "}
              <a href="https://jalammar.github.io/illustrated-gpt2/">
                Přečtěte si, jak GPT-2 funguje
              </a>
              .
            </p>
          )}
          {lang === "en" && (
            <p>
              We are using{" "}
              <a href="https://openai.com/blog/better-language-models/">
                language model GPT-2 by OpenAI
              </a>{" "}
              introduced in February 2019, specifically the version with 345
              milion parameters. GPT-2 model is so capable that OpenAI decided
              to release versions gradually, because of the risk of it being
              misused for generating disinformation. That the risk is real is
              confirmed for example by research made by Sarah Kreps
              and&nbsp;Miles McCain from Cornell University{" "}
              <a href="https://www.foreignaffairs.com/articles/2019-08-02/not-your-fathers-bots">
                published in <em>Foreign Affairs</em>
              </a>
              , which showed that people find texts generated by GPT-2 almost as
              convincing as real articles from New York Times.{" "}
              <a href="https://jalammar.github.io/illustrated-gpt2/">
                Find out how GPT-2 works under the hood
              </a>
              .
            </p>
          )}
          {lang === "cs" && (
            <p>
              Dle výkladu autorského práva Janem Zibnerem a&nbsp;Matějem Myškou
              pro díla vytvořená umělou inteligencí{" "}
              <a href="https://www.iurium.cz/2019/04/11/umela-inteligence-vyzva-autorstvi/">
                publikovaného na portálu Iuirum
              </a>{" "}
              jsou autory generovaných textů zpracovatelé použitého korpusu.
              V&nbsp;případě, že vepíšete originální text, na který generování
              navazuje, pak stáváte se spoluautorem. Jako zpracovatelé korpusů
              svolujeme užít generované texty za dodržení podmínek licence{" "}
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
          )}
          {lang === "en" && (
            <p>
              Using the interpretation of Czech copyright law by Jan Zibner and
              Matěj Myška for works created by AI,{" "}
              <a href="https://www.iurium.cz/2019/04/11/umela-inteligence-vyzva-autorstvi/">
                published at portal Iurium (in Czech only)
              </a>
              , authors of the generated texts are the creators of the used
              corpus. In case you write in an original text, which should the
              generating follow, you are becoming a co-author. As creators of
              the corpuses we allow use of the generated texts under license{" "}
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
          )}
          {lang === "cs" && (
            <p>
              Asembláž webu pospojoval{" "}
              <a href="mailto:jan.vlcek@vlki.cz">Jan Vlček</a>, kód{" "}
              <a href="https://github.com/vlki/digitalnifilosof">
                dostupný na GitHubu
              </a>
              .
            </p>
          )}
          {lang === "en" && (
            <p>
              Assemblage of this website was linked by{" "}
              <a href="mailto:jan.vlcek@vlki.cz">Jan Vlček</a>, code is{" "}
              <a href="https://github.com/vlki/digitalnifilosof">
                available on GitHub
              </a>
              .
            </p>
          )}
        </footer>
      )}
    </>
  )
}

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
  noHeaderAndFooter: PropTypes.bool,
  noIntro: PropTypes.bool,
}

SiteLayout.defaultProps = {
  noHeaderAndFooter: false,
  noIntro: false,
}

export default SiteLayout

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
