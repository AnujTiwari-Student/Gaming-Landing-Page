import React from "react";

import * as Styles from './styles';
import logo from '../../assets/images/logo.png';
import logoFooter from '../../assets/images/dota_footer_logo.png';
import logoValue from '../../assets/images/valve_logo.png';

export const Logo = (props) => {
    return <Styles.Logo src={logo} alt='Logo' {...props} />;
}

export const LogoFooter = (props) => {
    return <Styles.LogoFooter src={logoValue} alt='logoValue' {...props} />;
}

export const LogoValue = (props) => {
    return <Styles.LogoFooter src={logoFooter} alt='logoFooter' {...props} />;
}
