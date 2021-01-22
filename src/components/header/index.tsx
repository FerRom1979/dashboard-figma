import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import * as style from './style';

const Header = () => {
    const { DivContainer, InputSearch, InputDiv, SpanBell, FaceIcon } = style;
    return (
        <DivContainer>
            <InputDiv>
                <InputSearch type="text" placeholder="&#128269;    Search" />
            </InputDiv>

            <div>
                <SpanBell>
                    <FontAwesomeIcon icon={faBell} />
                </SpanBell>
                <FaceIcon>
                    <FontAwesomeIcon icon={faUser} />
                </FaceIcon>
            </div>
        </DivContainer>
    );
};

export default Header;
