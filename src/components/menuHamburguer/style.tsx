import styled from 'styled-components';
const movil = '@media(max-width: 380px)';

export const DivMenu = styled.div`
    width: 100px;
    height: 10px;
    position: fixed;
    top: 70px;
    left: 12px;
    border-radius: 50%;
    ${movil} {
        top: 20px;
    }
`;
export const DivNav = styled.div`
    position: fixed;
    top: 22%;
    left: 6%;
    transform: translate(-18%, -18%);
    width: 100px;
    height: 100px;
    ${movil} {
        top: 17%;
    }
`;
export const Button = styled.button`
    border: none;
    background: #f6f8fb;
`;
export const SpanButton = styled.span`
    font-size: 20px;
`;
