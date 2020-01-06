import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'

import NewsArchive from '../components/news-archive-list'

export const query = graphql`

  query NewsArchiveTemplateQuery($skip: Int!, $limit: Int!) {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      heroImage{
        ...SanityImage
        alt
      }
      title
      description
      keywords
    }

    news: allSanityNews(
      limit: $limit
      skip: $skip
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ){
      edges {
        node {
          _type
          _id
          publishedAt
          title
          slug {
            current
          }
        }
      }
    }
  }
`

const NewsTemplate = props => {
  const {data, errors} = props

  const site = (data || {}).site
  const newsNodes = (data || {}).news
    ? mapEdgesToNodes(data.news)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []
  const {currentPage, numPages} = props.pageContext

  return (

    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {newsNodes && <NewsArchive nodes={newsNodes} currentPage={currentPage} numPages={numPages}
      />}

    </Layout>
  )
}

export default NewsTemplate
