import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import * as style from './style';
import { slide as Menu } from 'react-burger-menu';
import Navigation from '../navigation/index';
import './styles.css';

const Header = () => {
    const { Responsive, IconWrapper, Container, InputSearch, User } = style;

    return (
        <Container>
            <Responsive display={'none'} displayMobile={'block'}>
                <Menu isOpen={false}>
                    <Navigation />
                </Menu>
            </Responsive>

            <Responsive displayMobile={'none'} marginLeftTablet={50}>
                <InputSearch type="text" placeholder="    &#128269;    Search" />
            </Responsive>

            <User>
                <IconWrapper color={'#cacccf'} transform={'rotate(45deg)'}>
                    <FontAwesomeIcon icon={faBell} fontSize={21} />
                </IconWrapper>
                <IconWrapper fontSize={40} marginRightTablet={0}>
                    <FontAwesomeIcon icon={faUser} />
                </IconWrapper>
            </User>
        </Container>
    );
};

export default Header;
