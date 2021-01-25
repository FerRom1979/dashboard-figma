import styled from 'styled-components';
const desktop = '@media(max-width: 1168px)';
const table = '@media(max-width: 768px)';

export const DivContainer = styled.div`
    width: 1184px;
    min-width: 1184px;
    height: 88px;
    min-height: 88px;
    display: flex;
    align-items: center;
    background-color: #f6f8fb;
    ${desktop} {
        width: auto;
        min-width: 829px;
    }
    ${table} {
        width: 578px;
        min-width: 578px;
    }
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
    ${desktop} {
        margin-left: 16px;
    }
    ${table} {
        margin-left: 0px;
        padding-left: 0px;
        width: 256px;
        min-width: 256px;
    }
`;
export const InputDiv = styled.div`
    position: relative;
    flex: 1;
    input[type-text] {
        padding-left: 200px;
    }
    ${table} {
        margin-left: 32px;
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
    ${table} {
        margin-right: 0px;
    }
`;
export const DivAvatar = styled.div`
    margin-right: 0;
`;
export const DivUser = styled.div`
    ${desktop} {
        margin-right: 15px;
    }
    ${table} {
        margin-left: 90px;
        margin-right: 0px;
    }
`;
