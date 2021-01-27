import styled from 'styled-components';
const table = '@media(max-width: 768px)';
const tableVertical = '@media(max-width: 600px)';
const movil = '@media(max-width: 380px)';

export const DivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${movil} {
        flex-direction: row;
        justify-content: flex-end;
    }
`;
export const ImgLogo = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #336cfb;
    ${tableVertical} {
        display: none;
    }
`;

export const PLogo = styled.p`
    font-family: Lato;
    font-weight: bold;
    padding: 10px;
    ${table} {
        padding: 10px;
    }
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
    ${table} {
        display: flex;
        align-items: center;
        margin-left: 32px;
    }
    ${table} {
        display: none;
    }
`;
export const NavDiv = styled.div`
    ${tableVertical} {
        display: none;
    }
`;
export const DivBurger = styled.div`
    display: none;
    ${tableVertical} {
        display: block;
    }
`;
export const DivHeader = styled.div`
    display: flex;
    width: 1110px;
    height: 88px;
    ${table} {
        width: auto;
    }
    ${tableVertical} {
        justify-content: space-around;
        justify-items: center;
    }
    ${movil} {
        width: 380px;
        width: 100%;
    }
`;
