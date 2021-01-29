import styled from 'styled-components';
import * as mediaQueris from '../mediaQueris';

const { desktop, verticalTablet, tablet, mobile } = mediaQueris;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-self: stretch;
    background-color: #f6f8fb;
    ${desktop} {
        flex-direction: column;
    }
    ${mobile} {
        background-color: #ffffff;
    }
`;
export const WrapperCard = styled.div`
    width: 1110px;
    min-width: 1110px;
    min-height: 88px;
    margin-left: 36px;
    height: 88px;
    display: flex;
    justify-content: space-between;
    margin-top: 34px;
    margin-bottom: 30px;
    ${desktop} {
        width: 1060px;
        min-width: 1060px;
        margin-left: 50px;
    }
    ${tablet} {
        width: 768px;
        min-width: 768px;
        margin-top: 30px;
        margin: 30px auto;
        flex-wrap: wrap;
        height: 236px;
        justify-content: space-around;
    }
    ${verticalTablet} {
        width: 300px;
        min-width: 300px;
        flex-direction: row;
        align-items: center;
        height: 500px;
    }
`;
export const WrapperSecondaryChart = styled.div`
    width: 1184px;
    min-width: 1184px;
    min-height: 286px;
    height: 286px;
    margin-top: 38px;
    display: flex;
    ${desktop} {
        width: 1060px;
        min-width: 1060px;
        margin-left: 50px;
        justify-content: space-between;
    }
    ${tablet} {
        width: 768px;
        min-width: 768px;
        flex-direction: column;
        margin-top: 10px;
        align-content: center;
        align-items: center;
        margin-left: 0px;
        min-height: 600px;
    }
    ${verticalTablet} {
        display: none;
    }
    ${mobile} {
        width: 360px;
        min-width: 360px;
        display: block;
    }
`;
export const Responsive = styled.div<{
    display?: string;
    displayDesktop?: string;
    displayTable?: string;
    width?: number;
}>`
    display: ${({ display }) => `${display}` || ''};
    ${desktop} {
        display: ${({ displayDesktop }) => `${displayDesktop}` || ''};
    }
    ${tablet} {
        display: ${({ displayTable }) => `${displayTable}` || ''};
        width: ${({ width }) => `${width}%` || ''};
    }
`;
