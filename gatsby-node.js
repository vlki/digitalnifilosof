const path = require("path")

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const corpuses = [
    {
      slug: "hannah-arendt",
      dataset: "arendt",
      philosophers: "Hannah Arendt",
      textsCs:
        "<em>Between Past and Future</em>, <em>On Revolution</em>, <em>Eichmann in Jerusalem</em>, <em>Men in Dark Times</em>, <em>On Violence</em> a <em>The Human Condition</em>",
      textsEn:
        "<em>Between Past and Future</em>, <em>On Revolution</em>, <em>Eichmann in Jerusalem</em>, <em>Men in Dark Times</em>, <em>On Violence</em> and <em>The Human Condition</em>",
      authors: "Jakub Jetmar, Jiří Logojda, Štěpán Šanda",
      intro:
        "Hannah Arendt, německo-židovská emigrantka, je možná nejznámější teoretičkou totalitarismu. Jakkoliv se ve své pozdější práci posouvá od pojmu radikální zlo k banalitě zla, její <em>Původ totalitarismu</em>, který vyšel jako bezprostřední reakce na hrůzy druhé světové války, je kanonickým dílem pro teorii totalitarismu. Mimo to se ve svém díle zabývá i masovou společností a kulturou nebo rolí a zodpovědností jednotlivce ve společnosti.",
      notebookLink:
        "https://colab.research.google.com/drive/1tqL-1ijHYJXhvxHL3dkIJfYF5grOaz-R#sandboxMode=true",
    },
    {
      slug: "gilles-deleuze-and-felix-guattari",
      dataset: "deleuze_guattari",
      philosophers: "Gilles Deleuze & Félix Guattari",
      textsCs:
        "<em>Anti-Oidipus</em>, <em>Tisíc plošin</em> a&nbsp;<em>Co je filosofie?</em>",
      textsEn:
        "<em>Anti-Oedipus</em>, <em>A Thousand Plateaus</em> and <em>What Is Philosophy?</em>",
      authors: "Veronika Hanáková, Tomáš Kovařík, Jan Vlček",
      intro:
        "Gilles Deleuze (1925–1995) byl významný francouzký teoretik věnující se filozofii, literatuře, filmu a umění, kterého řadíme do poststrukturalismu. Napsal mnoho děl, ale tři napsané spolu s Félixem Guattarim (1930–1992) jsou ty nejpopulárnější. V prvním z nich, <em>Anti-Oidipus</em>, nahlíží na společnost perspektivou stroje — člověk jako stroj poskládaný ze strojů tvořící další větší stroje, všechny stroje pak hnané chtíčem a produkcí. V díle <em>Tisíc plošin</em> popisují kromě jiného vědění jako stále se měnící síť bez začátku a konce, kterou přirovnávají k rhizomu, oddenku, kořenovité struktuře, ze které vidíme jen záblesky a nikdy ne strukturu celou. V posledním <em>Co je filosofie?</em> je pak hlavním tématem definování role filosofie jako tvoření pojmů, stojící vedle vědy a umění.",
      notebookLink:
        "https://colab.research.google.com/drive/1eocMzt8U3tqEfCloaiwm3Na3DeSojZoS#sandboxMode=true",
    },
    {
      slug: "michel-foucault",
      dataset: "foucault",
      philosophers: "Michel Foucault",
      textsCs:
        "<em>Dějiny sexuality I,&nbsp;II,&nbsp;III</em> a&nbsp;<em>Myšlení vnějšku</em>",
      textsEn:
        "<em>The History of Sexuality I,&nbsp;II,&nbsp;III</em> and <em>Said and written</em>",
      authors: "Anna Lamberová, Karolína Foitlová, Filip Štochl",
      intro:
        "Michel Foucault je reprezentantem francouzské intelektuální avantagardy 70. let 20. století. Ačkoliv samotný Foucault odmítal být označován za filozofa, bývá mnohými považován za představitele filozofie tzv. poststrukturalismu. Také byl profesorem na prestižní francouzské univerzitě Collège de France, historikem a teoretikem kultury. Foucaultovo starší dílo je produktem jeho snahy o porozumění společnosti skrze archeologii vědění. Ve svých knihách se zabývá především chápáním moci a pojmy jako sexualita, šílenství, epistémé nebo diskurz.",
      notebookLink:
        "https://colab.research.google.com/drive/1qVHVpNG6-P8kPoh48minq_e9J3WEm5LL#sandboxMode=true",
    },
    {
      slug: "vaclav-havel",
      dataset: "havel",
      philosophers: "Václav Havel",
      textsCs:
        "<em>Moc bezmocných</em>, projevy z&nbsp;kongresu USA a&nbsp;Fóra 2000, rozhovory s&nbsp;K.&nbsp;Hvížďalou a&nbsp;vybrané eseje",
      textsEn:
        "<em>The Power of the Powerless</em>, speeches from US congress and Forum 2000, dialogues with K.&nbsp;Hvížďala and several essays",
      authors: "Jakub Jetmar, Jiří Logojda, Štěpán Šanda",
      intro:
        "Mimo politika-prezidenta také disident, esejista a dramatik. V 70. letech píše slavný esej <em>Moc bezmocných</em>, v němž definuje post-totalitní systém a přemýšlí nad rolí a zodpovědností jedince v systému. V tomto období je také kritikem masové kultury i toho, že tradiční západní demokracie „nabízely způsob, jak zásadně čelit ‚samopohybu‘ technické civilizace i&nbsp;industriální a&nbsp;konzumní společnosti.“",
      notebookLink:
        "https://colab.research.google.com/drive/1YeH6DCMeLI4-qhBkg98NRuPRJlqDFarF#sandboxMode=true",
    },
    {
      slug: "tomas-sedlacek",
      dataset: "sedlacek",
      philosophers: "Tomáš Sedláček",
      textsCs:
        "<em>Ekonomie dobra a&nbsp;zla</em> a&nbsp;transkripce 3&nbsp;rozhovorů",
      textsEn:
        "<em>Economics of Good and Evil</em> and transcripts of 3&nbsp;speeches",
      authors: "Adam Cironis, Tomáš Eliaš, Lucie Krejzlová",
      intro:
        "Tomáš Sedláček je český významný ekonom a&nbsp;filozof, který v&nbsp;minulosti působil jako poradce prezidenta Václava Havla a&nbsp;ministra financí. Je autorem knihy <em>Ekonomie dobra a&nbsp;zla</em>, která byla přeložena do 21&nbsp;jazyků. V&nbsp;současné době působí jako hlavní makroekonomický stratég ČSOB.",
      notebookLink:
        "https://colab.research.google.com/drive/1gEC-5nzaPZKxDx4KDWU3v8nQG6Bz2MV5#sandboxMode=true",
    },
    {
      slug: "peter-singer",
      dataset: "singer",
      philosophers: "Peter Singer",
      textsCs:
        "<em>All animals are equal</em>, <em>Famine, affluence and morality</em>, <em>Animal liberation</em>, <em>Practical Ethics</em>, <em>Ethics and Intuitions</em> a&nbsp;<em>Speciesism and moral status</em>",
      textsEn:
        "<em>All animals are equal</em>, <em>Famine, affluence and morality</em>, <em>Animal liberation</em>, <em>Practical Ethics</em>, <em>Ethics and Intuitions</em> and <em>Speciesism and moral status</em>",
      authors: "Lenka Pittnerová, Alfréd Schubert, Anežka Studničková",
      intro: "",
      notebookLink:
        "https://colab.research.google.com/drive/1oS2IZouaRdAIiuw9pcTmXF-eeovp6FMX#sandboxMode=true",
    },
  ]
  corpuses.forEach(corpus => {
    const node = {
      slug: corpus.slug,
      dataset: corpus.dataset,
      philosophers: corpus.philosophers,
      textsCs: corpus.textsCs,
      textsEn: corpus.textsEn,
      authors: corpus.authors,
      intro: corpus.intro,
      notebookLink: corpus.notebookLink,
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

  createPage({
    path: "/en/",
    component: path.resolve(`src/pages/index.js`),
    context: {
      lang: "en",
    },
  })

  const result = await graphql(
    `
      {
        allCorpus {
          nodes {
            slug
            dataset
            philosophers
            textsCs
            textsEn
            authors
            intro
            notebookLink
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

    createPage({
      path: "/en/" + corpus.slug,
      component: corpusTemplate,
      context: {
        corpus,
        lang: "en",
      },
    })
  })
}
