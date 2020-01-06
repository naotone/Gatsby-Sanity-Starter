const parseISO = require('date-fns/parseISO')
const {format, isFuture} = require('date-fns')

async function createNewsArchive (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
  {
    news: allSanityNews (
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ){
      edges{
      node {
        slug {
          current
        }
        id
      }
    }
  }
  }
`)

  if (result.errors) throw result.errors

  const postsPerPage = 10
  const newsLength = result.data.news.edges.length
  reporter.info(`Total News: ${newsLength}`)

  const numPages = Math.ceil(newsLength / postsPerPage)

  const path = '/news/'

  reporter.info(`Creating News Archives: ${path}`)
  createPage({
    path,
    component: require.resolve('./src/templates/news-archive.js'),
    context: {
      limit: postsPerPage,
      skip: 0,
      numPages,
      currentPage: 1
    }
  })

  Array.from({length: numPages}).forEach((_, i) => {
    const path = i === 0 ? `/news/archive/` : `/news/archive/${i + 1}/`

    reporter.info(`Creating News Archives: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/news-archive.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    })
  })
}

async function createNewsPages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityNews(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)
  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityNews || {}).edges || []

  postEdges
    .filter(edge => !isFuture(parseISO(edge.node.publishedAt)))
    .forEach((edge, index) => {
      const {id, slug = {}, publishedAt} = edge.node
      const dateSegment = format(parseISO(publishedAt), 'yyyy/MM')
      const path = `/news/${dateSegment}/${slug.current}/`

      reporter.info(`Creating news page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/news.js'),
        context: {id}
      })
    })
}

exports.createPages = async ({graphql, actions, reporter}) => {
  await createNewsArchive(graphql, actions, reporter)
  await createNewsPages(graphql, actions, reporter)
}
