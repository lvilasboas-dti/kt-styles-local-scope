import { Container, Icon, Label } from './ButtonStyledComponents.styles';

export const ButtonStyledComponents = ({ icon, label, type }) => {
    return (
        <Container type={type}>
            {!!icon &&
                <Icon>
                    {icon}
                </Icon>
            }

            {!!label &&
                <Label>
                    {label}
                </Label>
            }
        </Container>
    )
}
