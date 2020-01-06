import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {colors, fontfamily} from '../lib/variables'

const Wrapper = styled.header`
  width: 100%;
  height: 56px;
  background-image: url('/header-bg.svg');
  background-position: 0 bottom;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  /* &:after{
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    background-image: url('/header-bg-bottom.png');
    background-position: 0 bottom;
    background-size: cover;
    background-repeat: no-repeat;
    z-index:101;
    width: 100%;
    height: 18px;
  } */
  @media (min-width: 768px) {
      height: 80px;
  }
`

const Inner = styled.div`
  max-width: 1024px;
  height: 52px;
  margin: 0 auto;
  display: block;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    height: 80px;
  }
`

const Title = styled(props => <Link {...props} />)`
  display: block;
  margin: 0 0 0 1.6rem;
`

const Logo = styled.img`
  height: 50px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const NavIcon = styled.button`
  width: 48px;
  height: 48px;
  position: relative;
  cursor: pointer;
  background: none;
  border: none;
  &:before {
    transform: rotate(0deg);
    top: 19px;
    left: 12px;
    content: '';
    width: 24px;
    height: 1px;
    position: absolute;
    background: ${colors.white};
    transition: all 0.25s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    border-radius: 4px;
    }
  &.close:before {
    transform: rotate(135deg);
    top: 24px;
  }
  &:after{
    transform: rotate(0deg);
    bottom: 19px;
    left: 12px;
    content: '';
    width: 24px;
    height: 1px;
    position: absolute;
    background: ${colors.white};
    transition: all 0.25s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    border-radius: 4px;
  }
  &.close:after{
    transform: rotate(45deg);
    bottom: 23px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`

const List = styled.ul`
  display: none;
  @media (min-width: 1024px) {
    font-family: ${fontfamily.handwriting};
    align-items: space-between;π
    justify-content: center;
    display: flex;
  }

`

const Item = styled.li`
  margin: 0 0 0 3.8rem;
`

const StyledLink = styled(props => <Link {...props} />)`
  color: ${colors.white};
  font-size: 2.6rem;
  text-decoration: none;
`

const Header = ({onHideNav, onShowNav, showNav, path}) => (
  <>
    {/* <HeaderBanner /> */}
    <Wrapper>
      <Inner>
        <div>
          <Title to='/'>
            <Logo src='/logo-white.svg' />
          </Title>
        </div>
        <Row>
          <NavIcon onClick={showNav ? onHideNav : onShowNav} className={showNav && 'close'} />
        </Row>
        <List>
          <Item><StyledLink to='/news/'>News</StyledLink></Item>
        </List>
      </Inner>
    </Wrapper>
  </>
)

export default Header
