import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MainPageAsync } from './pages/Main-Page/Main-Page.async'
import { AboutPageAsync } from './pages/About-Page/About-Page.async'
import { Suspense } from 'react'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'



export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>TOGGLE</button>
        <Link to={'/'}> Главная</Link>
        <Link to={'/about'}>О сайте</Link>
        <Suspense fallback={<div>Loading..</div>}>
            <Routes>
                <Route path={'/'} element = {<MainPageAsync/>} />
                <Route path={'/about'} element = {<AboutPageAsync/>} />
            </Routes>
        </Suspense>
    </div>
    )
}