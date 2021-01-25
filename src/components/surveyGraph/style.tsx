import styled from 'styled-components';
const desktop = '@media(max-width: 1168px)';
const table = '@media(max-width: 768px)';
export const DivContainer = styled.div`
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
    ${table} {
        display: none;
    }
`;
