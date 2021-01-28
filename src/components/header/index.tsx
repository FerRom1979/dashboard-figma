import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import * as style from './style';
import { slide as Menu } from 'react-burger-menu';
import Navigation from '../navigation/index';
import './styles.css';

const Header = () => {
    const { ResponsiveDiv, IconWrapper, DivContainer, InputSearch, DivUser } = style;

    return (
        <DivContainer>
            <ResponsiveDiv display={'none'} displayVerticalTablet={'block'}>
                <Menu isOpen={false}>
                    <Navigation />
                </Menu>
            </ResponsiveDiv>

            <ResponsiveDiv displayVerticalTablet={'none'} marginLeftTablet={70}>
                <InputSearch type="text" placeholder="&#128269;    Search" />
            </ResponsiveDiv>

            <DivUser>
                <IconWrapper color={'#cacccf'}>
                    <FontAwesomeIcon icon={faBell} fontSize={21} />
                </IconWrapper>
                <IconWrapper fontSize={40} marginRightTablet={0}>
                    <FontAwesomeIcon icon={faUser} />
                </IconWrapper>
            </DivUser>
        </DivContainer>
    );
};

export default Header;
