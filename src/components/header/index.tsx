import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import * as style from './style';
import { slide as Menu } from 'react-burger-menu';
import Navigation from '../navigation/index';
import './styles.css';

const Header = () => {
    const { ResponsiveDiv, UserSpan, DivContainer, InputSearch, DivUser } = style;
    return (
        <DivContainer>
            <ResponsiveDiv display={'none'} displayTableVertical={'block'}>
                <Menu isOpen={false}>
                    <Navigation />
                </Menu>
            </ResponsiveDiv>

            <ResponsiveDiv displayTableVertical={'none'} marginLeftTable={70}>
                <InputSearch type="text" placeholder="&#128269;    Search" />
            </ResponsiveDiv>

            <DivUser>
                <UserSpan color={'#cacccf'}>
                    <FontAwesomeIcon icon={faBell} fontSize={21} />
                </UserSpan>
                <UserSpan fontSize={40} marginRightTable={0}>
                    <FontAwesomeIcon icon={faUser} />
                </UserSpan>
            </DivUser>
        </DivContainer>
    );
};

export default Header;
