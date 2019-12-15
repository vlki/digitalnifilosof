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
      intro:
        "Hannah Arendt, německo-židovská emigrantka, je možná nejznámější teoretičkou totalitarismu. Jakkoliv se ve své pozdější práci posouvá od pojmu radikální zlo k banalitě zla, její <em>Původ totalitarismu</em>, který vyšel jako bezprostřední reakce na hrůzy druhé světové války, je kanonickým dílem pro teorii totalitarismu. Mimo to se ve svém díle zabývá i masovou společností a kulturou nebo rolí a zodpovědností jednotlivce ve společnosti.",
      examplePrefixes: [],
    },
    {
      slug: "gilles-deleuze-and-felix-guattari",
      dataset: "deleuze_guattari",
      philosophers: "Gilles Deleuze & Félix Guattari",
      texts:
        "<em>Anti-Oidipus</em>, <em>Tisíc plošin</em> a&nbsp;<em>Co je filosofie?</em>",
      authors: "Veronika Hanáková, Tomáš Kovařík, Jan Vlček",
      intro:
        "Gilles Deleuze (1925–1995) byl významný francouzký teoretik věnující se filozofii, literatuře, filmu a umění, kterého řadíme do poststrukturalismu. Napsal mnoho děl, ale tři napsané spolu s Félixem Guattarim (1930–1992) jsou ty nejpopulárnější. V prvním z nich, <em>Anti-Oidipus</em>, nahlíží na společnost perspektivou stroje — člověk jako stroj poskládaný ze strojů tvořící další větší stroje, všechny stroje pak hnané chtíčem a produkcí. V díle <em>Tisíc plošin</em> popisují kromě jiného vědění jako stále se měnící síť bez začátku a konce, kterou přirovnávají k rhizomu, oddenku, kořenovité struktuře, ze které vidíme jen záblesky a nikdy ne strukturu celou. V posledním <em>Co je filosofie?</em> je pak hlavním tématem definování role filosofie jako tvoření pojmů, stojící vedle vědy a umění. (Pozn.: Shrnutí děl jsou VELMI zjednodušená pro alespoň základní přehled.)",
      examplePrefixes: [
        "What is the motivation of an artificial intelligence?",
        "For artificial brain to be a philosopher, it has to",
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
      intro:
        "Mimo politika-prezidenta také disident, esejista a dramatik. V 70. letech píše slavný esej <em>Moc bezmocných</em>, v němž definuje post-totalitní systém a přemýšlí nad rolí a zodpovědností jedince v systému. V tomto období je také kritikem masové kultury i toho, že tradiční západní demokracie „nabízely způsob, jak zásadně čelit ‚samopohybu‘ technické civilizace i&nbsp;industriální a&nbsp;konzumní společnosti.“",
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
        "Tomáš Sedláček je český významný ekonom a&nbsp;filozof, který v&nbsp;minulosti působil jako poradce prezidenta Václava Havla a&nbsp;ministra financí. Je autorem knihy <em>Ekonomie dobra a&nbsp;zla</em>, která byla přeložena do 21&nbsp;jazyků. V&nbsp;současné době působí jako hlavní makroekonomický stratég ČSOB.",
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
