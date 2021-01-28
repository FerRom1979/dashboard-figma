import styled from 'styled-components';
import * as mediaQueris from '../mediaQueris';

const { verticalTablet, tablet, mobile } = mediaQueris;

export const DivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${mobile} {
        flex-direction: row;
        justify-content: flex-end;
    }
`;
export const ImgLogo = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #336cfb;
    ${verticalTablet} {
        display: none;
    }
`;
export const PLogo = styled.p`
    font-weight: bold;
    padding: 10px;
`;
export const LogoDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 142px;
    height: 30px;
    margin-top: 24px;
    margin-left: 50px;
    color: #336cfb;
    margin-bottom: 0;
    padding-bottom: 0;
    ${tablet} {
        display: flex;
        align-items: center;
        margin-left: 32px;
    }
    ${tablet} {
        display: none;
    }
`;
export const NavDiv = styled.div`
    ${verticalTablet} {
        display: none;
    }
`;
export const DivBurger = styled.div`
    display: none;
    ${verticalTablet} {
        display: block;
    }
`;
export const DivHeader = styled.div`
    display: flex;
    width: 1110px;
    height: 88px;
    ${tablet} {
        width: auto;
    }
    ${verticalTablet} {
        justify-content: space-around;
        justify-items: center;
    }
    ${mobile} {
        width: 380px;
    }
`;
