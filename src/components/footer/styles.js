import styled from 'styled-components';

import { Container } from '../container';

import { device } from '../../styles/theme/devices';

export const FooterSection = styled.footer`
  // background-color: ${(props) => props.theme.palette.secondary.main};
  background: black;
  width: 100%;
`

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  border-bottom: 5px solid ${(props) => props.theme.palette.tertiary.main};
  padding: 25px 0 50px;

  @media ${device.tablet} {
    padding: 25px 20px 50px;
  }

  @media ${device.mobileM} {
    font-size: 14px;
  }

  @media ${device.mobileS} {
    font-size: 12px;
  }
`

export const FooterHeader = styled.div`
  display: flex;
  //justify-content: center;
  gap: 50px;
  color: ${(props) => props.theme.palette.primary.main};

  .transparent {
   display: flex;
   align-items: center;
   opacity: 0.7;
   text-transform: uppercase;
  }
`

export const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.palette.primary.main};
  margin: 30px 0;
  padding: 0 5px;

  @media ${device.tablet} {
    gap: 20px;

    img {
      width: 90px;
      align-self: flex-end;

      @media ${device.mobileM} {
        width: 60px;
      }
    }
  }

  .nav-menu {
    display: flex;
    align-items: center;

    ul {
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: repeat(3, 1fr);
      column-gap: 75px;
      row-gap: 5px;
      list-style: none;

      @media ${device.tablet} {
        grid-template-rows: repeat(5, 1fr);
      }

      li a {
        color: ${(props) => props.theme.palette.primary.main};
      }
    }
  }
`

export const FooterCopyright = styled.div`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 15px;
  margin: 25px 0;
  
  @media ${device.tablet} {
    text-align: center;
  }

  @media ${device.mobileM} {
    font-size: 14px;
  }

  @media ${device.mobileS} {
    font-size: 12px;
  }
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 20px;

    @media ${device.tablet} {
      &:first-child {
        flex-direction: column;
      }
    }
    
    a {
      color: ${(props) => props.theme.palette.primary.main};
      font-size: 15px;
      font-weight: 600;

      @media ${device.mobileM} {
        font-size: 14px;
      }

      @media ${device.mobileS} {
        font-size: 12px;
      }
    }
  }
`
