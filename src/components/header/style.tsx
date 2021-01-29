import styled from 'styled-components';
import * as mediaQueris from '../mediaQueris';

const { desktop, verticalTablet, tablet, mobile } = mediaQueris;

export const Container = styled.div`
    width: 1184px;
    height: 88px;
    min-height: 88px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f6f8fb;
    ${desktop} {
        width: 900px;
    }
    ${tablet} {
        width: 768px;
    }
    ${verticalTablet} {
        width: 500px;
        justify-content: flex-end;
    }
    ${mobile} {
        height: 64px;
        margin-right: 16px;
        width: 100%;
        background-color: #ffffff;
        justify-content: space-between;
    }
`;
export const InputSearch = styled.input`
    min-width: 350px;
    min-height: 40px;
    width: 350px;
    height: 40px;
    margin-left: 36px;
    color: #a0a4a8;
    font-weight: normal;
    background: #ffffff;
    border: none;
    border-radius: 100px;
    font-size: 13px;
    padding-left: 16px;
    ${desktop} {
        margin-left: 16px;
    }
    ${tablet} {
        margin-left: 0px;
        padding-left: 0px;
        width: 256px;
        min-width: 256px;
    }
`;
export const Responsive = styled.div<{
    display?: string;
    displayVerticalTablet?: string;
    displayMobile?: string;
    marginLeftTablet?: number;
}>`
    display: ${({ display }) => `${display}` || ''};
    ${tablet} {
        margin-left: ${({ marginLeftTablet }) => `${marginLeftTablet}px` || ''};
    }
    ${verticalTablet} {
        display: ${({ displayVerticalTablet }) => `${displayVerticalTablet}` || ''};
    }
    ${mobile} {
        display: ${({ displayMobile }) => `${displayMobile}` || ''};
    }
`;
export const IconWrapper = styled.span<{
    fontSize?: number;
    color?: string;
    marginRightTablet?: number;
    transform?: string;
}>`
    margin-right: 24px;
    font-size: ${({ fontSize }) => `${fontSize}px` || ''};
    color: ${({ color }) => `${color}` || ''};
    transform: ${({ transform }) => `${transform}` || ''};
    ${tablet} {
        margin-right: ${({ marginRightTablet }) => `${marginRightTablet}px` || ''};
    }
`;
export const User = styled.div`
    margin-right: 24px;
    display: flex;
    align-items: center;
    ${desktop} {
        margin-right: 0px;
    }
    ${tablet} {
        margin-left: 10px;
        margin-right: 20px;
    }
    ${verticalTablet} {
        justify-content: end;
    }
    ${mobile} {
        display: flex;
        justify-content: flex-end;
        margin-right: 20px;
    }
`;
