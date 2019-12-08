const path = require("path")

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const corpuses = [
    {
      slug: "gilles-deleuze-and-felix-guattari",
      philosophers: "Gilles Deleuze & Félix Guattari",
      texts:
        "<em>Anti-Oidipus</em>, <em>Tisíc plošin</em> a&nbsp;<em>Co je filosofie?</em>",
      authors: "Veronika Hanáková, Tomáš Kovařík, Jan Vlček",
      examplePrefixes: [
        "Rhizome is",
        "What is the difference between artificial and human brain?",
      ],
    },
    {
      slug: "tomas-sedlacek",
      philosophers: "Tomáš Sedláček",
      texts:
        "<em>Ekonomie dobra a&nbsp;zla</em> a&nbsp;transkripce 3&nbsp;rozhovorů",
      authors: "Adam Cironis, Tomáš Eliáš, Lucie Krejzová",
      examplePrefixes: [],
      disabled: true,
    },
    {
      slug: "michel-foucault",
      philosophers: "Michel Foucault",
      texts:
        "<em>Dějiny sexuality I,&nbsp;II,&nbsp;III</em>, <em>Dějiny šílenství</em>, <em>Archeologie vědění</em> a&nbsp;<em>Zrození kliniky</em>",
      authors: "Anna Lamberova, Karolína Foitlová, Filip Štochl",
      examplePrefixes: [],
      disabled: true,
    },
    {
      slug: "peter-singer",
      philosophers: "Peter Singer",
      texts: "...",
      authors: "Lenka Pittnerová, Alfred Shubert, Anežka Studničková",
      examplePrefixes: [],
      disabled: true,
    },
  ]
  corpuses.forEach(corpus => {
    const node = {
      slug: corpus.slug,
      philosophers: corpus.philosophers,
      texts: corpus.texts,
      authors: corpus.authors,
      examplePrefixes: corpus.examplePrefixes,
      disabled: corpus.disabled,
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
            philosophers
            texts
            authors
            examplePrefixes
            disabled
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
