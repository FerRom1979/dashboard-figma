import styled from 'styled-components';

export const DivContainer = styled.div`
    width: 1184px;
    min-width: 1184px;
    height: 88px;
    min-height: 88px;
    display: flex;
    align-items: center;
    background-color: #f6f8fb;
`;
export const InputSearch = styled.input`
    min-width: 350px;
    min-height: 40px;
    width: 350px;
    height: 40px;
    margin-left: 36px;
    color: #a0a4a8;
    font-family: Lato;
    font-weight: normal;
    font-style: normal;
    background: #ffffff;
    border: none;
    border-radius: 100px;
    font-size: 13px;
    padding-left: 16px;
`;
export const InputDiv = styled.div`
    position: relative;
    flex: 1;
    input[type-text] {
        padding-left: 200px;
    }
`;
export const SpanIconInput = styled.span`
    position: absolute;
    left: 40px;
    top: 8px;
`;
export const SpanBell = styled.span`
    font-size: 21px;
    color: #cacccf;
    margin-right: 24px;
`;
export const FaceIcon = styled.span`
    font-size: 40px;
    margin-right: 24px;
`;
