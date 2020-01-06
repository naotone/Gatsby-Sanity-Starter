import {format, formatDistanceToNow, differenceInDays} from 'date-fns'
import parseISO from 'date-fns/parseISO'

import ja from 'date-fns/locale/ja'

import React from 'react'
import styled from 'styled-components'
import Heading from './heading'
import PortableText from './portableText'

import {colors, fontfamily} from '../lib/variables'
import Button from './button'

const Wrapper = styled.article`
  display: block;
  padding: 4rem 0;
`

const Header = styled.div`
  max-width: 740px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 2.0rem;
  font-weight: 700;
  font-family: ${fontfamily.jaRounded};
  display: block;
  margin: 0.8rem 2.4rem 3.6rem 2.4rem;
  border-bottom: 1px solid ${colors.gray};
  padding-bottom: 2.4rem;
`

const Aside = styled.aside`
  display: block;
`

const Text = styled.div`
  margin: 0 2.4rem 4rem 2.4rem;
`

const DateCats = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  margin: 0 2.4rem;
`

const DateTime = styled.span`
  display: block;
  color: ${colors.lightNavy};
  margin: 0 0.8rem 0 0;
`

function NewsSingle (props) {
  const {_rawBody, title, publishedAt} = props
  return (
    <Wrapper>
      <Heading title='News' />

      <Header>
        <Aside>
          <DateCats>
            {publishedAt && (
              <DateTime>
                {differenceInDays(parseISO(props.publishedAt), new Date()) > -1
                  ? `${formatDistanceToNow(parseISO(props.publishedAt), {addSuffix: true, locale: ja})}`
                  : format(parseISO(props.publishedAt), 'yyyy年MM月dd日(iii)', {locale: ja})}
              </DateTime>
            )}
          </DateCats>
        </Aside>
        <Title>
          {title}
        </Title>
      </Header>

      {_rawBody && (
        <Text>
          <PortableText blocks={_rawBody} />
        </Text>
      ) }

      <Button link='/news/' label='ニュース一覧へ' />
    </Wrapper>
  )
}

export default NewsSingle
