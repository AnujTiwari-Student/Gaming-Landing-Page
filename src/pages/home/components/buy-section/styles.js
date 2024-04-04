import styled from 'styled-components';

import Section from '../../../../components/section';
import { Container } from '../../../../components/container';

import { device } from '../../../../styles/theme/devices';

import bannerHero from '../../../../assets/images/banner-hero.png';

export const BuySection = styled(Section)`
  background-image: url('${bannerHero}');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 2;

  @media ${device.tablet} {
    //background-position-x: -400px;
  }
`

export const BuyContainer = styled(Container)`
  display: flex;
  position: relative;
  align-items: center;
  
  
  // display: flex;
  // justify-content: center;
  // //left: 80px;
  // //padding: 10px 0;
  // align-items: center;
  // gap: 80px;
  // position: relative;
  //
  // @media ${device.laptopL} {
  //   gap: 0;
  // }
  //
  // @media ${device.laptop} {
  //   flex-direction: column;
  //   margin-top: 250px;
  //   padding-bottom: 30px;
  // }
  //
  // @media ${device.mobileL} {
  //   margin-top: 200px;
  // }
`

export const BuyMascot = styled.img`
  margin-top: 60px;
  margin-left: -100px;

  @media ${device.laptopM} {
    width: 700px;
  }

  @media ${device.laptopS} {
    margin-left: -50px;
    width: 600px;
  }

  @media ${device.laptop} {
    width: 400px;
    position: absolute;
    top: -200px;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
  }

  @media ${device.mobileL} {
    width: 380px;
  }

  @media ${device.mobileM} {
    width: 300px;
  }

  @media ${device.mobileS} {
    width: 280px;
  }
`

export const BuyInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 0;

  @media ${device.laptop} {
    margin-top: 100px;
    padding: 0 10px;
  }

  @media ${device.tablet} {
    text-align: center;
  }

  @media ${device.mobileM} {
    margin-top: 200px;
  }

  @media ${device.mobileS} {
    margin-top: 180px;
  }

  h2 {
    color: ${(props) => props.theme.palette.primary.main};
    font-size: 96px;
    font-weight: 700;
    line-height: 78px;

    @media ${device.laptopL} {
      font-size: 76px;
    }

    @media ${device.laptopS} {
      font-size: 68px;
    }

    @media ${device.laptop} {
      font-size: 48px;
      line-height: 50px;
    }

    @media ${device.mobileS} {
      font-size: 36px;
      line-height: 40px;
    }
  }

  h3 {
    color: ${(props) => props.theme.palette.primary.contrastText};
    font-size: 48px;
    font-weight: 700;

    @media ${device.laptopL} {
      font-size: 36px;
    }

    @media ${device.laptopS} {
      font-size: 28px;
    }

    @media ${device.laptop} {
      font-size: 24px;
    }
  }

  span {
    color: ${(props) => props.theme.palette.primary.main};
    font-size: 24px;
    font-weight: 500;
    margin-top: 35px;
    max-width: 570px;

    @media ${device.laptopL} {
      font-size: 20px;
    }

    @media ${device.laptopS} {
      font-size: 18px;
    }

    @media ${device.laptop} {
      font-size: 16px;
    }

    @media ${device.mobileS} {
      font-size: 14px;
    }
  }
`

export const BuyButtons = styled.div`
  //display: flex;
  //gap: 20px;

  // @media ${device.tablet} {
  //   flex-direction: column;
  //   align-items: center;
  //   margin: 30px 0;
  //
  //   button {
  //     margin: 0 !important;
  //     width: 250px;
  //
  //     @media ${device.mobileS} {
  //       width: 220px;
  //     }
  //   }
  // }
`
