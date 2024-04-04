import React from 'react';

import * as Styles from './style';

export const ContainerFluid = ({ className, children }) => {
    return <Styles.ContainerFluid className={className}>{children}</Styles.ContainerFluid>
}

export const Container = ({ children, className }) => {
    return <Styles.Container className={className}>{children}</Styles.Container>
}
