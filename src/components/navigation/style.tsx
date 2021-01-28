import styled from 'styled-components';
import * as mediaQueris from '../mediaQueris';

const { desktop, verticalTablet, tablet, mobile } = mediaQueris;

export const DivContainer = styled.div`
    width: 256px;
    height: 1382px;
    background-color: #ffffff;
    ${desktop} {
        display: flex;
        flex-direction: row;
        height: 48px;
        width: 1060;
        background-color: #f6f8fb;
    }
    ${tablet} {
        width: 768px;
        min-width: 768px;
        justify-content: space-around;
    }
    ${verticalTablet} {
        flex-direction: column;
        width: 100px;
        min-width: 100px;
        background-color: transparent;
        margin-top: 50px;
    }
    ${mobile} {
        margin-top: 50px;
        margin-left: 100px;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 32px;
    margin-bottom: 2px;
    ${desktop} {
        display: flex;
        flex-direction: row;
        margin-top: 0px;
    }
    ${tablet} {
        width: 70px;
        height: 20px;
    }
    ${verticalTablet} {
        margin-bottom: 20px;
    }
`;
export const SubTitleNav = styled.h3`
    height: 20px;
    margin-left: 24px;
    margin-right: 24px;
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
export const DivList = styled.div`
    display: flex;
    margin-left: 25px;
    padding-bottom: 10px;
    ${desktop} {
        display: flex;
        flex-direction: row;
        height: 48px;
    }
    ${tablet} {
        display: block;
        margin-left: 0px;
        margin-top: 1px;
    }
    ${mobile} {
        margin-top: 0px;
    }
`;
export const DivNoneList = styled.div`
    display: none;
    ${desktop} {
        display: block;
    }
    ${tablet} {
        width: auto;
    }
    ${verticalTablet} {
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
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
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
        margin-left: 28px;
        color: #52575c;
    }
    ${tablet} {
        margin-left: 0px;
        height: 20px;
        margin-top: 14px;
        margin-right: 24px;
        width: auto;
    }
    ${verticalTablet} {
        font-size: 18px;
        color: white;
    }
    ${mobile} {
        font-size: 18px;
    }
`;
export const DivListNav = styled.div`
    display: flex;

    align-items: center;
    height: 48px;
    ${tablet} {
        height: 20px;
        margin-top: 0px;
        width: auto;
        height: 48px;
    }
    ${mobile} {
        padding-bottom: 8px;
    }
`;
export const LabelList = styled.h4`
    height: 20px;
    margin-left: 12px;
    right: 24px;
    top: calc(50% - 20px / 2 + 20px);
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
    ${tablet} {
        width: auto;
        margin: 0px;
        padding-bottom: 4px;
        padding-left: 0px;
    }
    ${verticalTablet} {
        font-size: 18px;
        margin-top: 10px;
        color: white;
    }
    ${mobile} {
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
