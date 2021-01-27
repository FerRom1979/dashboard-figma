import styled from 'styled-components';
const desktop = '@media(max-width: 1168px)';
const table = '@media(max-width: 768px)';
const tableVertical = '@media(max-width: 600px)';
const movil = '@media(max-width: 380px)';

export const DivContainer = styled.div`
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
    ${table} {
        width: 768px;
    }
    ${tableVertical} {
        width: 600px;
    }
    ${movil} {
        width: 380px;

        width: 100%;
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
    input[type-text] {
        padding-left: 200px;
    }
    ${table} {
        margin-left: 70px;
    }
    ${tableVertical} {
        display: none;
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
    margin-right: 24px;
    ${desktop} {
        margin-right: 0px;
    }
    ${table} {
        margin-left: 10px;
        margin-right: 20px;
    }
    ${tableVertical} {
        margin-right: 16px;
        margin-right: 20px;
    }
    ${movil} {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-right: 20px;
    }
`;
export const DivBurger = styled.div`
    display: none;
    ${tableVertical} {
        display: block;
    }
`;
