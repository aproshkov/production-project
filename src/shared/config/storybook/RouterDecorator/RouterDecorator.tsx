import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => JSX.Element) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
