import styled from 'styled-components';
import * as mediaQueris from '../mediaQueris';

const { desktop, tablet } = mediaQueris;

export const Container = styled.div`
    min-width: 1110px;
    min-height: 374px;
    width: 1110px;
    height: 374px;
    margin-left: 36px;
    background: #ffffff;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
    ${desktop} {
        min-width: 1060px;
        margin-left: 50px;
        width: 1060px;
    }
    ${tablet} {
        display: none;
    }
`;
export const Wrapper = styled.div`
    height: 374px;
`;
