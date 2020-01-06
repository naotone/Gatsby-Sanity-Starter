import React from 'react'
import styled from 'styled-components'
import {colors, fontfamily} from '../lib/variables'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 2.4rem 4rem 2.4rem;
  /* overflow-y: visible;
  overflow-x: hidden; */
  @media (min-width: 1024px) {
    margin: 4rem 2.4rem 4rem 2.4rem;
  }
`

const Title = styled.h2`
  font-family: ${fontfamily.handwriting};
  color: ${props => props.color === 'white' ? colors.white : colors.black};
  font-size: 5.6rem;
  font-weight: 400;
  z-index: 1;
  /* @media (min-width: 1024px) {
    font-size: 2.8rem;
  } */
`
const Heading = props => {
  const {title, color} = props
  return (
    <Wrapper>
      {title && <Title color={color}>{title}</Title> }
    </Wrapper>
  )
}
export default Heading
