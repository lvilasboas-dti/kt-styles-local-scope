import { Container, Icon } from './ButtonStyledComponents.styles';

export const ButtonStyledComponents = ({ icon, label }) => {
    return (
        <Container>
            {!!icon &&
                <Icon>
                    {icon}
                </Icon>
            }

            {!!label &&
                <div className='label'>
                    {label}
                </div>
            }
        </Container>
    )
}
