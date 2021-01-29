import styled from 'styled-components';
import * as mediaQueris from '../mediaQueris';

const { desktop, verticalTablet, tablet, mobile } = mediaQueris;

export const Container = styled.div`
    width: 100%;
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
    ${tablet} {
        min-width: 300px;
        width: 300px;
        margin-bottom: 20px;
        height: 98px;
    }
    ${verticalTablet} {
        min-width: 300px;
        width: 300px;
        margin: auto;
    }
    ${mobile} {
        min-width: 300px;
        width: 300px;
    }
`;
export const PCard = styled.p`
    margin-top: 20px;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #25282b;
`;
export const PCardNumber = styled.p`
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #336cfb;
    margin-bottom: 20px;
    margin-top: 5px;
`;
export const IconWrapper = styled.span`
    font-size: 40px;
    color: #336cfb;
    margin-top: 26px;
`;
export const SectionCard = styled.div<{ marginLeft?: number; marginTop?: number }>`
    margin-left: ${({ marginLeft }) => `${marginLeft}px` || ''};
    margin-top: ${({ marginTop }) => `${marginTop}px` || ''};
`;
