import styled from 'styled-components';
const desktop = '@media(max-width: 1168px)';
const table = '@media(max-width: 768px)';
const tableVertical = '@media(max-width: 600px)';
const movil = '@media(max-width: 380px)';

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
export const DivResponsive = styled.div`
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
    ${table} {
        width: 768px;
        min-width: 768px;
        margin: auto;
        flex-wrap: wrap;
        height: 236px;
    }
    ${tableVertical} {
        width: 300px;
        min-width: 300px;
        flex-direction: row;
        align-items: center;
        height: 500px;
    }
`;
export const GraphicDiv = styled.div`
    display: none;
    ${table} {
        display: block;
        width: 100%;
    }
`;
export const GraphicDougDiv = styled.div`
    display: none;
    ${table} {
        display: block;
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
    ${table} {
        width: 768px;
        min-width: 768px;
        flex-direction: column;
        margin-top: 10px;
        align-content: center;
        align-items: center;
        margin-left: 0px;
        min-height: 600px;
    }
    ${tableVertical} {
        /* width: 600px;
        min-width: 600px; */
        display: none;
    }
    ${movil} {
        width: 360px;
        min-width: 360px;
        display: block;
    }
`;
