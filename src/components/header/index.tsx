import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import * as style from './style';
import { slide as Menu } from 'react-burger-menu';
import Navigation from '../navigation/index';
import './styles.css';

const Header = () => {
    const { DivContainer, InputSearch, InputDiv, SpanBell, FaceIcon, DivUser, DivBurger } = style;
    return (
        <DivContainer>
            <DivBurger>
                <Menu width={'200px'} isOpen={false}>
                    <Navigation />
                </Menu>
            </DivBurger>

            <InputDiv>
                <InputSearch type="text" placeholder="&#128269;    Search" />
            </InputDiv>

            <DivUser>
                <SpanBell>
                    <FontAwesomeIcon icon={faBell} />
                </SpanBell>
                <FaceIcon>
                    <FontAwesomeIcon icon={faUser} />
                </FaceIcon>
            </DivUser>
        </DivContainer>
    );
};

export default Header;
