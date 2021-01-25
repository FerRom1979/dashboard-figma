import styled from 'styled-components';
const desktop = '@media(max-width: 1168px)';
const table = '@media(max-width: 768px)';
const tableVertical = '@media(max-width: 600px)';
const movil = '@media(max-width: 380px)';
export const DivContainer = styled.div`
    min-width: 540px;
    min-height: 286px;
    width: 540px;
    height: 286px;
    margin-left: 36px;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
    background: #ffffff;
    ${desktop} {
        min-width: 500px;
        margin-left: 0px;
        width: 500px;
    }
    ${table} {
        margin: auto;
        width: 740px;
        margin-bottom: 30px;
    }
    ${tableVertical} {
        width: 500px;
        min-width: 500px;
    }
    ${movil} {
        width: 360px;
        min-width: 360px;
    }
`;
