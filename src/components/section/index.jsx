import React from 'react';

import * as Styles from './styles';

const Section = ({ className, children }) => {
    return (
        <Styles.SectionContainer className={className}>
            { children }
        </Styles.SectionContainer>
    );
}

export default Section;
