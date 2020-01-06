import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import NewsArchivePreview from './news-archive-preview'
import Heading from './heading'
import {colors} from '../lib/variables'

const Wrapper = styled.section`
  display: block;
  padding: 4rem 0;
  @media (min-width: 1024px) {
    padding: 4rem 2.4rem 8rem 2.4rem;
  }

`

const Inner = styled.div`
  max-width: 580px;
  margin: 0 auto;
`

const List = styled.ul`
  display: block;
  position: relative;
  margin: 0 2.8rem;
`

const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  & > *{
    padding: 0.8rem;
    flex: 10% 1 0;
  }
  & > .number{
    flex: auto 0 1;
  }
`

const Pagenum = styled.span`
  display: block;
  font-size: 1.6rem;
  text-align: center;
  color: ${colors.ligthBlack};
  margin: 0 2.4rem;
`
const NextPrevWrap = styled.div`
  display: flex;
`

const StyledLink = styled(props => <Link {...props} />)`
  display: inline-block;
  color: ${colors.blue};
  margin: ${props => props.prev ? '0 0 0 auto' : '0 auto 0 0'};
`

function NewsArchiveList (props) {
  const isFirst = props.currentPage === 1
  const isLast = props.currentPage === props.numPages
  const prevPage =
  props.currentPage - 1 === 1
    ? '/news/archive/'
    : '/news/archive/' + (props.currentPage - 1).toString() + '/'
  const nextPage = '/news/archive/' + (props.currentPage + 1).toString() + '/'

  return (
    <Wrapper>
      <Heading title='News' />
      <Inner>
        <List>
          {props.nodes &&
          props.nodes.map(node => (
            <li key={node._id} >
              <NewsArchivePreview {...node} isInList />
            </li>
          ))}
        </List>
        <Pagination>
          <NextPrevWrap>
            {!isFirst && (
              <StyledLink to={prevPage} rel='prev' prev>
                <img src='/prev.svg' alt='prev'/>
              </StyledLink>
            )}
          </NextPrevWrap>
          <Pagenum className='number'>{props.currentPage} / {props.numPages}</Pagenum>
          <NextPrevWrap>
            {!isLast && (
              <StyledLink to={nextPage} rel='next' next>
                <img src='/next.svg' alt='next'/>
              </StyledLink>
            )}
          </NextPrevWrap>
        </Pagination>
      </Inner>
    </Wrapper>
  )
}

NewsArchiveList.defaultProps = {
  nodes: []
}

export default NewsArchiveList
