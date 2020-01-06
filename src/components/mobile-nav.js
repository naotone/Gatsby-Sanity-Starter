import React from 'react'
import {Link} from 'gatsby'

import styled from 'styled-components'
import {colors, fontfamily} from '../lib/variables'

const Wrapper = styled.nav`
  display: block;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  top: 0;
  left: 0;
  position: fixed;
  background: ${colors.black};
  z-index: 10;
  pointer-events: none;
  transition: all 0.2s linear;
  opacity: 0;
  padding: 8rem 1.6rem 8rem 2rem;
  &.active{
    opacity: 1;
    pointer-events: auto;
  }
`

const Inner = styled.div`
  display: block;
  overflow-y: auto;
`

const List = styled.ul`
  display: block;
  font-family: ${fontfamily.handwriting};
  font-size: 3.6rem;
  font-weight: 400;
  margin: 4rem 0 0 0;
`

const Item = styled.li`
  margin: 0 0 2.0rem 0;
`

const StyledLink = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
`

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 1.8rem 0;
`

const Social = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4rem 0 0;
`

const Icon = styled.img`
  display: block;
  width: 32px;
`

const MobileNav = ({onHideNav, onShowNav, showNav}) => (
  <Wrapper className={(showNav && 'active')}>
    <Inner>
      <List>
        <Item><StyledLink to='/news/'>News</StyledLink></Item>
      </List>
      <Socials>
        <Social href='https://www.instagram.com/naotone/'><Icon src='/instagram.svg' alt='Instagram' /></Social>
      </Socials>
    </Inner>
  </Wrapper>
)

export default MobileNav
