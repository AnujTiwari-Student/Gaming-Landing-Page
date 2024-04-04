import styled from 'styled-components';

import Section from '../../../../components/section';
import { Container } from '../../../../components/container';
import Divider from '../../../../components/divider';

import { device } from '../../../../styles/theme/devices';

// import background from '../../../../assets/images/background-header2.png';
import background from '../../../../assets/images/banner.jpg';

export const BannerSection = styled(Section)`
  background-image: url('${background}');
  background-repeat: no-repeat;
  height: 850px;
  position: relative;
  z-index: 2;

  @media ${device.laptopS} {
    background-position-y: -75px;
    height: 775px;
  }

  @media ${device.laptop} {
    height: 900px;
  }

  @media ${device.tablet} {
    background-position: -120px 0;
    height: 950px;
  }

  nav {
    margin-bottom: 20px;
  }
`

export const BannerContainer = styled(Container)`
  display: flex;

  @media ${device.laptop} {
    flex-direction: column;
  }
`

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 65px 0;
  max-width: 645px;

  @media ${device.laptopS} {
    padding: 35px 0;
    max-width: 490px;
  }

  @media ${device.laptop} {
    align-self: center;
  }
`

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.palette.primary.main};

  @media ${device.laptop} {
    align-items: center;
  }

  h1 {
    font-size: 64px;

    @media ${device.laptopS} {
      font-size: 48px;
    }

    @media ${device.laptop} {
      font-size: 36px;
      text-align: center;
    }
  }

  h2 {
    color: ${(props) => props.theme.palette.primary.contrastText};
    font-size: 28px;

    @media ${device.laptopS} {
      font-size: 20px;
    }
  }

  p {
    max-width: 550px;

    @media ${device.laptop} {
      display: none;
    }
  }

  .transparent {
    color: ${(props) => props.theme.palette.primary.main};
    opacity: 0.7;

    @media ${device.laptop} {
      font-size: 14px;
    }

    @media ${device.mobileS} {
      font-size: 12px;
    }
  }
`

export const BannerPlayers = styled.div`
  display: flex;
  align-items: center;
  
  > img + img {
    margin-left: -10px;
  }

  span {
    font-size: 15px;
    margin: 0 10px;
  }
`

export const BannerMascotContainer = styled.div`
  position: relative;
  flex-grow: 1;
  z-index: 2;

  img {
    position: absolute;
    top: 100px;
    right: -300px;
    width: 1400px;

    @media ${device.laptopL} {
      //right: -35px;
    }

    @media ${device.laptopM} {
      top: 250px;
      right: -150px;
      width: 1000px;
    }

    @media ${device.laptopS} {
      top: 230px;
      right: -150px;
      width: 850px;
    }

    @media ${device.laptop} {  
      top: 0;
      left: -100px; 
      margin-left: auto; 
      margin-right: auto; 
      width: 800px;
    }
  }
`

export const BannerDivider = styled(Divider)`
  margin: 30px 0;
`

export const BannerPlataforms = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 30px;
    margin-top: 20px;

    img {
      height: 28px;
    }
  }
`

export const BannerFlexButtons = styled.div`
  display: flex;
  gap: 20px;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    margin: 30px 0;

    button {
      margin: 0 !important;
      width: 250px;

      @media ${device.mobileS} {
        width: 220px;
      }
    }
  }
`
