import React from 'react';
import Logo from '../../assets/img/logo.jpg';
import Header from '../header/index';
import Navigation from '../navigation/index';

import * as style from './style';

const index = () => {
    const { ImgLogo, LogoDiv, DivHeader } = style;
    return (
        <div>
            <DivHeader>
                <LogoDiv>
                    <ImgLogo src={Logo} alt="logo" /> <span>Healthcare</span>
                </LogoDiv>
                <Header />
            </DivHeader>
            <Navigation />
        </div>
    );
};

export default index;
