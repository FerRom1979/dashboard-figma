/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Logo from '../../assets/img/logo.jpg';
import Header from '../header/index';
import Navigation from '../navigation/index';
import * as style from './style';
import Dashboard from '../dashboard/index';

const index = () => {
    const { ImgLogo, LogoDiv, DivHeader, PLogo, NavDiv, DivWrapper } = style;

    return (
        <DivWrapper>
            <DivHeader>
                <LogoDiv>
                    <ImgLogo src={Logo} alt="logo" /> <PLogo>Healthcare</PLogo>{' '}
                </LogoDiv>
                <Header />
            </DivHeader>
            <NavDiv>
                <Navigation />
            </NavDiv>

            <Dashboard />
        </DivWrapper>
    );
};

export default index;
