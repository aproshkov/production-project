import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed,setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed} , [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
            <ThemeSwitcher/>
            <LangSwitcher className={cls.Lang}/>
            </div>
        </div>
    );
};