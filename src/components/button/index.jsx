import React from 'react';

import * as Styles from './styles';

export const Button = (props) => {
    return <Styles.Button {...props}>{props.children}</Styles.Button>;
}

export const ButtonsFlex = (props) => {
    return <Styles.Button {...props}>{props.children}</Styles.Button>;
}

export const ButtonReverse = (props) => {
    return <Styles.ButtonReverse {...props}>{props.children}</Styles.ButtonReverse>;
}
