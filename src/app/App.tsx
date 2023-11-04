import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import {useTheme} from 'app/providers/ThemeProvider'
import './styles/index.scss';
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'





export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>TOGGLE</button>
        <Link to={'/'}> Главная</Link>
        <Link to={'/about'}>О сайте</Link>
        <Suspense fallback={<div>Loading..</div>}>
            <Routes>
                <Route path={'/'} element = {<MainPage/>} />
                <Route path={'/about'} element = {<AboutPage/>} />
            </Routes>
        </Suspense>
    </div>
    )
}