import './App.css';

import { Menu } from 'react-feather';

import { ButtonCssModules } from './components/ButtonCssModules/ButtonCssModules';
import { ButtonStyledComponents } from './components/ButtonStyledComponents/ButtonStyledComponents';

const App = () => {
    return (
        <div className='app'>

            <div className='button-css-module'>
                <ButtonCssModules
                    icon={<Menu />}
                    label={'Botão CSS Modules'}
                />
            </div>

            <div className='button-styled-components'>
                <ButtonStyledComponents
                    icon={<Menu />}
                    label={'Botão Styled Components'}
                />
            </div>
            
        </div>
    )
}

export default App;
