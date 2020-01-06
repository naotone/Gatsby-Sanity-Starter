
import {format, formatDistanceToNow, differenceInDays} from 'date-fns'
import parseISO from 'date-fns/parseISO'
import ja from 'date-fns/locale/ja'

import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import { getNewsUrl} from '../lib/helpers'
import {colors} from '../lib/variables'

const Wrapper = styled.div`
  display: block;
  margin: 0 0 4rem 0;
`

const StyledLink = styled(props => <Link {...props} />)`
  color: ${colors.ligthBlack};
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
`

const DateCats = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
`

const DateTime = styled.span`
  display: block;
  color: ${colors.gray};
  margin: 0 0.8rem 0 0;
`

function NewsArchivePreview (props) {
  return (
    <Wrapper>
      <DateCats>
        {props.publishedAt && (
          <DateTime>
            {differenceInDays(parseISO(props.publishedAt), new Date()) > -1
              ? `${formatDistanceToNow(parseISO(props.publishedAt), {addSuffix: true, locale: ja})}`
              : format(parseISO(props.publishedAt), 'yyyy年MM月dd日(iii)', {locale: ja})}
          </DateTime>
        )}
      </DateCats>
      <StyledLink to={getNewsUrl(props.publishedAt, props.slug.current)}>
        {props.title}
      </StyledLink>
    </Wrapper>
  )
}

export default NewsArchivePreview
