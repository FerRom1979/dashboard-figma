import styled from 'styled-components';
import * as mediaQueris from '../mediaQueris';

const { desktop, verticalTablet, tablet, mobile } = mediaQueris;

export const Container = styled.div`
    min-width: 540px;
    min-height: 286px;
    width: 540px;
    height: 286px;
    margin-left: 36px;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
    border-radius: 8px;
    background: #ffffff;
    ${desktop} {
        min-width: 500px;
        margin-left: 0px;
        width: 500px;
    }
    ${tablet} {
        margin: auto;
        width: 740px;
        margin-bottom: 30px;
    }
    ${verticalTablet} {
        width: 500px;
        min-width: 500px;
    }
    ${mobile} {
        width: 360px;
        min-width: 360px;
        margin: 20px auto;
    }
`;
