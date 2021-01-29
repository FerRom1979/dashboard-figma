import styled from 'styled-components';
import * as mediaQueris from '../mediaQueris';

const { desktop, verticalTablet, tablet, mobile } = mediaQueris;

export const Container = styled.div`
    width: 256px;
    display: flex;
    flex-direction: column;
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
        position: fixed;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
        width: 68px;
        min-width: 68px;
        max-width: 68px;
        background-color: #ffffff;
        box-shadow: 4px 0px 16px rgba(16, 30, 115, 0.08);
    }
    ${mobile} {
        width: 200px;
        min-width: 200px;
        height: auto;
        align-items: flex-start;
        background-color: transparent;
    }
`;
export const Logo = styled.div`
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
    ${verticalTablet} {
        width: auto;
        display: block;
        margin-left: 19px;
    }
    ${mobile} {
        display: none;
    }
`;
export const ImgLogo = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #336cfb;
`;
export const NavDashboard = styled.div`
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
        width: auto;
        margin-left: 26px;
        margin-top: 47px;
    }
    ${mobile} {
        margin-top: 0px;
        margin-bottom: 20px;
        margin-left: 0px;
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
export const List = styled.div`
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
    ${verticalTablet} {
        width: auto;]
    }
    ${mobile} {
        display: block;
        margin-bottom: 40px;
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
export const IconWrapperNoneIcon = styled.span`
    margin-top: 6px;
    margin-left: 7px;
    color: '#52575c';
`;
export const Label = styled.h4`
    margin-left: 13px;
    right: 24px;
    width: 180px;
    font-style: normal;
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
        display: none;
    }
    ${mobile} {
        display: block;
        font-size: 18px;
        color: white;
        cursor: pointer;
        &:hover {
            color: #336cfb;
        }
    }
`;
export const ListNav = styled.div`
    display: flex;

    align-items: center;
    height: 48px;
    ${tablet} {
        height: 20px;
        margin-top: 0px;
        width: auto;
        height: 48px;
    }
    ${verticalTablet} {
        height: auto;
        margin-top: 29px;
        width: auto;
        padding-left: 2px;
    }
    ${mobile} {
        padding-bottom: 8px;
        margin-top: 20px;
    }
`;
export const LabelList = styled.h4`
    height: 20px;
    margin-left: 12px;
    right: 24px;
    top: calc(50% - 20px / 2 + 20px);
    font-style: normal;
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
        display: none;
    }
    ${mobile} {
        display: block;
        font-size: 18px;
        margin-top: 10px;
        color: white;
    }
`;
export const IconWrapperListNav = styled.span`
    color: #dbdde0;
    width: 14px;
    height: 16px;
    margin-left: 24px;
    ${desktop} {
        display: none;
    }
    ${verticalTablet} {
        display: block;
        height: auto;
        margin-top: 0px;
        margin-left: 0px auto;
    }
    ${mobile} {
        display: none;
    }
`;
export const IconWrapperListDash = styled.span`
    color: #336cfb;
    width: 14px;
    height: 13px;
    margin-top: 20px;
    ${desktop} {
        display: none;
    }
    ${verticalTablet} {
        height: auto;
        display: block;
        margin-top: 0px;
        margin-left: 0px auto;
    }
    ${mobile} {
        display: none;
    }
`;
export const Hr = styled.hr`
    color: #e8e8e8;
    ${desktop} {
        display: none;
    }
`;
export const WrapperNameLogo = styled.span`
    ${verticalTablet} {
        display: none;
    }
`;
