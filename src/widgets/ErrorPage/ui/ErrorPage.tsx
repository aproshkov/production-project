import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

const reloadHandle = () => {
    window.location.reload();
};

export const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('Ошибка загрузки страницы')}</p>
            <Button onClick={reloadHandle}>{t('Перезагрузить страницу')}</Button>
        </div>
    );
};
