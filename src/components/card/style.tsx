import styled from 'styled-components';
const desktop = '@media(max-width: 1168px)';
const table = '@media(max-width: 768px)';
const tableVertical = '@media(max-width: 600px)';
const movil = '@media(max-width:380px)';

export const DivContainer = styled.div`
    min-width: 255px;
    width: 255px;
    height: 88px;
    background: #ffffff;
    display: flex;
    justify-content: start;
    border-radius: 8px;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
    ${desktop} {
        min-width: 230px;
        width: 230px;
    }
    ${table} {
        min-width: 300px;
        width: 300px;
        margin-bottom: 20px;
        height: 98px;
    }
    ${tableVertical} {
        width: 100%;
        margin: auto;
    }
    ${movil} {
        margin: auto;
    }
`;
export const PCard = styled.p`
    margin-top: 20px;
    margin-bottom: 5px;
    font-family: Lato;
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
    line-height: 20px;
    letter-spacing: o.1px;
    color: #25282b;
`;
export const PCardNumber = styled.p`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #336cfb;
    margin-bottom: 20px;
    margin-top: 5px;
`;
export const DivIcon = styled.div`
    margin-left: 26.5px;
    margin-top: 26.26px;
`;
export const DivInfo = styled.div`
    margin-left: 26.49px;
`;
export const SpanIcon = styled.span`
    font-size: 40px;
    color: #336cfb;
    margin-top: 26.26px;
`;
