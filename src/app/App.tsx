import './styles/index.scss'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import {useTheme} from 'app/providers/ThemeProvider'
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar/ui/Navbar';





export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
        <Navbar/>
        <AppRouter/>
        <button onClick={toggleTheme}>TOGGLE</button>
    </div>
    )
}

export default App;