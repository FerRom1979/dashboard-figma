import styled from 'styled-components';
const desktop = '@media(max-width: 1168px)';

export const DivContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-self: stretch;
    background-color: #f6f8fb;
    ${desktop} {
        flex-direction: column;
    }
`;
export const DivContainerMain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: stretch;
    background-color: #f6f8fb;
`;
export const DivNav = styled.div`
    ${desktop} {
        display: none;
    }
`;
export const DivHeader = styled.div`
    ${desktop} {
        display: none;
    }
`;
export const DivCard = styled.div`
    width: 1184px;
    min-width: 1184px;
    min-height: 88px;
    height: 88px;
    display: flex;
    justify-content: space-around;
    margin-top: 8px;
    margin-bottom: 30px;
    ${desktop} {
        width: 900px;
        min-width: 1100px;
        margin-left: 30px;
    }
`;
export const DivSecondaryChart = styled.div`
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
`;
