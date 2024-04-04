import React from 'react';

import * as Styles from './styles';

import epic from '../../assets/images/plataform-epic.png';
import psn from '../../assets/images/plataform-psn.png';
import nintendo from '../../assets/images/plataform-nintendo.png';
import xbox from '../../assets/images/plataform-xbox.png';

const Platforms = () => {
    return (
        <Styles.PlatformsContainer>
            <img src={epic} alt='Epic Games' />
            <img src={psn} alt='Playstation' />
            <img src={nintendo} alt='Nintendo Switch' />
            <img src={xbox} alt='Xbox' />
        </Styles.PlatformsContainer>
    );
}

export default Platforms;
