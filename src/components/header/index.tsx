import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import * as style from './style';

const Header = () => {
    const { DivContainer, InputSearch, InputDiv, SpanBell, FaceIcon, DivUser } = style;
    return (
        <DivContainer>
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
