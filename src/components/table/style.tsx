import styled from 'styled-components';
const desktop = '@media(max-width: 1168px)';
const table = '@media(max-width: 768px)';
const tableVertical = '@media(max-width: 600px)';
export const DivContainer = styled.div`
    min-width: 1110px;
    max-height: 410px;
    width: 1110px;
    height: 410px;
    margin-top: 30px;
    background: #ffffff;
    margin-left: 36px;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
    border-radius: 8px;
    ${desktop} {
        width: 1060px;
        min-width: 1060px;
        margin: 30px auto;
    }
    ${table} {
        width: 740px;
        min-width: 740px;
        margin: auto;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    ${tableVertical} {
        display: none;
    }
`;
export const SpanIcon = styled.span`
    font-size: 32px;
`;
export const Table = styled.table`
    font-family: Lato;
    background: #ffffff;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
    border-radius: 8px;
    min-width: 1110px;
    max-height: 410px;
    width: 100%;
    border-collapse: collapse;
    border: none;
    ${desktop} {
        width: 1060px;
        min-width: 1060px;
    }
    ${table} {
        width: 740px;
        min-width: 740px;
    }
    ${tableVertical} {
        width: 560px;
        min-width: 560px;
    }
`;
export const Title = styled.h1`
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: #25282b;
    margin-left: 24px;
    margin-top: 0px;
    margin-bottom: 30px;
    line-height: 26px;
    letter-spacing: 0.2px;
    height: 43px;
    padding-top: 24px;
    ${table} {
        font-size: 16px;
    }
`;
export const Thead = styled.th`
    background: #e8e8e8;
    color: #25282b;
    text-align: left;
    padding-left: 24px;
    padding-bottom: 18px;
    padding-top: 18px;
    border-collapse: collapse;
    border: none;
`;
export const Td = styled.td`
    border-bottom: 1px solid #ddd;
    height: 56px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #52575c;
    border-collapse: collapse;
    padding: 0px;
`;
