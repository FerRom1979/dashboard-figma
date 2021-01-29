import React from 'react';
import Logo from '../../assets/img/logo.jpg';
import Header from '../header/index';
import Navigation from '../navigation/index';
import * as style from './style';
import Dashboard from '../dashboard/index';

const index = () => {
    const { ImgLogo, LogoDiv, DivHeader, PLogo, NavDiv, Wrapper, Container, WrapperNav } = style;

    return (
        <Container>
            <WrapperNav>
                <Navigation />
            </WrapperNav>

            <Wrapper>
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
            </Wrapper>
        </Container>
    );
};

export default index;
