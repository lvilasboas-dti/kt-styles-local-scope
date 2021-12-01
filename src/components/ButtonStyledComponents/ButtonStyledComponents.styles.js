import styled from 'styled-components';

export const Container = styled.button`
    padding: 16px;
    border-radius: 8px;
    background: #007bff;
    border: 0;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all ease .2s;

    &:hover {
        opacity: .9;
    }

    .label {
        font-size: 24px;
    }
`;

export const Icon = styled.div`
    margin: 0 12px 0 0;
`;
