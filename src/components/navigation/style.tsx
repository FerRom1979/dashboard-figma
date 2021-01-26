import styled from 'styled-components';
const desktop = '@media(max-width: 1168px)';
const table = '@media(max-width: 768px)';
const tableVertical = '@media(max-width: 600px)';
const movil = '@media(max-width: 380px)';

export const DivContainer = styled.div`
    width: 256px;
    height: 1382px;
    background-color: #ffffff;
    ${desktop} {
        display: flex;
        flex-direction: row;
        height: 48px;
        background-color: #f6f8fb;
    }
    ${table} {
        width: 768px;
        min-width: 768px;
        justify-content: space-around;
    }
    ${tableVertical} {
        flex-direction: column;
        width: 100px;
        min-width: 100px;
        background-color: transparent;
    }
    ${movil} {
        margin-top: 10px;
    }
`;
export const LogoDiv = styled.div`
    width: 142px;
    height: 30px;
    margin-top: 24px;
    margin-left: 24px;
    color: #336cfb;
    margin-bottom: 0;
    padding-bottom: 0;
    ${desktop} {
        display: none;
    }
`;
export const ImgLogo = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #336cfb;
`;
export const DivNavDashboard = styled.div`
    width: 256px;
    height: 88px;
    margin-top: 32px;
    margin-bottom: 2px;
    ${desktop} {
        display: flex;
        flex-direction: row;
        margin-top: 0px;
    }
    ${table} {
        width: 70px;
        height: 20px;
    }
    ${tableVertical} {
        margin-bottom: 20px;
    }
`;
export const SubTitleNav = styled.h3`
    height: 20px;
    margin-left: 24px;
    margin-right: 24px;
    padding-top: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #a0a4a8;
    margin-bottom: 0;
    padding-bottom: 0;
    ${desktop} {
        display: none;
    }
`;
export const Divlist = styled.div`
    display: flex;
    height: 20px;
    margin-left: 25px;
    ${desktop} {
        display: flex;
        flex-direction: row;
        height: 48px;
    }
    ${table} {
        display: block;
        margin-left: 0px;
        margin-top: 10px;
    }
    ${movil} {
        margin-top: 0px;
    }
`;
export const DivNoneList = styled.div`
    display: none;
    ${desktop} {
        display: block;
        width: 140px;
    }
    ${table} {
        width: auto;
    }
    ${tableVertical} {
        display: none;
    }
`;
export const LabelNoneIcon = styled.span`
    margin-top: 10px;
    margin-left: 7.2px;
    color: '#52575c';
`;
export const Label = styled.h4`
    margin-left: 13px;
    right: 24px;
    width: 180px;
    height: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    margin-top: 20px;
    letter-spacing: 0.1px;
    margin-bottom: 0;
    color: #336cfb;
    &:hover {
        color: #336cfb;
    }
    ${desktop} {
        height: 48px;
        margin-top: 15.62px;
        width: auto;
        margin-left: 140px;

        color: #52575c;
    }
    ${table} {
        margin-left: 0px;
        height: 20px;
        margin-top: 14px;
        margin-right: 24px;
        width: auto;
    }
    ${tableVertical} {
        font-size: 18px;
        color: white;
    }
    ${movil} {
        font-size: 18px;
    }
`;
export const DivListNav = styled.div`
    display: flex;
    align-items: center;
    width: 256px;
    height: 48px;
    ${table} {
        height: 20px;
        margin-top: 0px;
        width: auto;
        height: 48px;
    }
    ${movil} {
        padding-bottom: 8px;
    }
`;
export const LabelList = styled.h4`
    height: 20px;
    margin-left: 12px;
    right: 24px;
    top: calc(50% - 20px / 2 + 20px);
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #52575c;
    cursor: pointer;
    &:hover {
        color: #336cfb;
    }

    ${desktop} {
        margin-left: 32px;
    }
    ${table} {
        width: auto;
        margin: 0px;
        padding-bottom: 4px;
        padding-left: 0px;
    }
    ${tableVertical} {
        font-size: 18px;
        margin-top: 10px;
        color: white;
    }
    ${movil} {
        font-size: 18px;
    }
`;
export const SpanListNav = styled.span`
    color: #dbdde0;
    width: 13.28px;
    height: 16px;
    margin-left: 24px;
    ${desktop} {
        display: none;
    }
`;
export const SpanListDash = styled.span`
    color: #336cfb;
    width: 14px;
    height: 13.3px;
    margin-top: 20px;
    ${desktop} {
        display: none;
    }
`;
export const Hr = styled.hr`
    color: #e8e8e8;
    ${desktop} {
        display: none;
    }
`;
