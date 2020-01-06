import React from 'react'

import {Link} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import {fontfamily} from '../lib/variables'

const Wrapper = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 8rem 1.6rem 0 1.6rem;
  min-height: 50vh;
`

const Title = styled.h1`
  font-size: 3rem;
  font-family: ${fontfamily.ja};
`

const Text = styled.p`
  font-size: 1.6;
  font-family: ${fontfamily.ja};
  margin-bottom: 4rem;
`

const StyledLink = styled(props => <Link {...props} />)`
  font-size: 2rem;
  font-weight: 700;
  font-family: ${fontfamily.ja};
`

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <Wrapper>
      <Title>404: NOT FOUND</Title>
      <Text>このページは削除されたか、URLが間違っています。</Text>
      <StyledLink to='/'>トップページへ戻る</StyledLink>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
