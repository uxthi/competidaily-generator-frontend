import styled from 'styled-components';

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 10vh;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.dahlia};

    @media (max-width: 768px) {
        height: 50px;
    }
`

export  { Container };