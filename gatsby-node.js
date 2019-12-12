const path = require("path")

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const corpuses = [
    {
      slug: "hannah-arendt",
      dataset: "arendt",
      philosophers: "Hannah Arendt",
      texts:
        "<em>Between Past and Future</em>, <em>On Revolution</em>, <em>Eichmann in Jerusalem</em>, <em>Men in Dark Times</em>, <em>On Violence</em> a <em>The Human Condition</em>",
      authors: "Jakub Jetmar, Jiří Logojda, Štěpán Šanda",
      intro: "",
      examplePrefixes: [],
    },
    {
      slug: "gilles-deleuze-and-felix-guattari",
      dataset: "deleuze_guattari",
      philosophers: "Gilles Deleuze & Félix Guattari",
      texts:
        "<em>Anti-Oidipus</em>, <em>Tisíc plošin</em> a&nbsp;<em>Co je filosofie?</em>",
      authors: "Veronika Hanáková, Tomáš Kovařík, Jan Vlček",
      intro: "",
      examplePrefixes: [
        "Rhizome is",
        "What is the difference between artificial and human brain?",
      ],
    },
    {
      slug: "michel-foucault",
      dataset: "foucault",
      philosophers: "Michel Foucault",
      texts:
        "<em>Dějiny sexuality I,&nbsp;II,&nbsp;III</em>, <em>Dějiny šílenství</em>, <em>Archeologie vědění</em> a&nbsp;<em>Zrození kliniky</em>",
      authors: "Anna Lamberová, Karolína Foitlová, Filip Štochl",
      intro:
        "Michel Foucault je reprezentantem francouzské intelektuální avantagardy 70. let 20. století. Ačkoliv samotný Foucault odmítal být označován za filozofa, bývá mnohými považován za představitele filozofie tzv. poststrukturalismu. Také byl profesorem na prestižní francouzské univerzitě Collège de France, historikem a teoretikem kultury. Foucaultovo starší dílo je produktem jeho snahy o porozumění společnosti skrze archeologii vědění. Ve svých knihách se zabývá především chápáním moci a pojmy jako sexualita, šílenství, epistémé nebo diskurz.",
      examplePrefixes: [
        "If I lived today, the most important thing I would say to young people would be",
        "Are you human or machine?",
      ],
    },
    {
      slug: "vaclav-havel",
      dataset: "havel",
      philosophers: "Václav Havel",
      texts:
        "<em>Moc bezmocných</em>, projevy z&nbsp;kongresu USA a&nbsp;Fóra 2000, rozhovory s&nbsp;K.&nbsp;Hvížďalou a&nbsp;vybrané eseje",
      authors: "Jakub Jetmar, Jiří Logojda, Štěpán Šanda",
      intro: "",
      examplePrefixes: [],
    },
    {
      slug: "tomas-sedlacek",
      dataset: "sedlacek",
      philosophers: "Tomáš Sedláček",
      texts:
        "<em>Ekonomie dobra a&nbsp;zla</em> a&nbsp;transkripce 3&nbsp;rozhovorů",
      authors: "Adam Cironis, Tomáš Eliaš, Lucie Krejzlová",
      intro:
        "Tomáš Sedláček je český významný ekonom a filozof, který v minulosti působil jako poradce prezidenta Václava Havla a ministra financí. Je autorem knihy Ekonomie dobra a zla, která byla přeložena do 21 jazyků. V současné době působí jako hlavní makroekonomický stratég ČSOB.",
      examplePrefixes: [
        "Do you think that happiness comes from wealth?",
        "What is a guaranteed path to success?",
      ],
    },
    {
      slug: "peter-singer",
      dataset: "singer",
      philosophers: "Peter Singer",
      texts:
        "<em>All animals are equal</em>, <em>Famine, affluence and morality</em>, <em>Animal liberation</em>, <em>Practical Ethics</em>, <em>Ethics and Intuitions</em> a&nbsp;<em>Speciesism and moral status</em>",
      authors: "Lenka Pittnerová, Alfréd Schubert, Anežka Studničková",
      intro: "",
      examplePrefixes: [],
    },
  ]
  corpuses.forEach(corpus => {
    const node = {
      slug: corpus.slug,
      dataset: corpus.dataset,
      philosophers: corpus.philosophers,
      texts: corpus.texts,
      authors: corpus.authors,
      intro: corpus.intro,
      examplePrefixes: corpus.examplePrefixes,
      id: createNodeId(`Corpus-${corpus.slug}`),
      internal: {
        type: "Corpus",
        contentDigest: createContentDigest(corpus),
      },
    }
    actions.createNode(node)
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allCorpus {
          nodes {
            slug
            dataset
            philosophers
            texts
            authors
            intro
            examplePrefixes
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const corpusTemplate = path.resolve(`src/templates/corpus.js`)
  result.data.allCorpus.nodes.forEach(corpus => {
    if (corpus.disabled) {
      return
    }

    createPage({
      path: "/" + corpus.slug,
      component: corpusTemplate,
      context: {
        corpus,
      },
    })
  })
}
