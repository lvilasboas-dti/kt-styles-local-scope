import styled from 'styled-components';

const getColorFromType = type => {
    switch(type) {
        case 'success':
            return '#28a745';
        case 'error':
            return '#dc3545';
        default:
            return '#007bff';
    }
}

export const Container = styled.button`
    padding: 16px;
    border-radius: 8px;
    background: ${props => getColorFromType(props.type)};
    border: 0;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all ease .2s;

    &:hover {
        opacity: .9;
    }
`;

export const Icon = styled.div`
    margin: 0 12px 0 0;
`;

export const Label = styled.div`
    font-size: 24px;
`;
