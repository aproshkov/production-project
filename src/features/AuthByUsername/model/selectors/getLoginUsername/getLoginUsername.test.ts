import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('it should return login', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                username: 'nick1',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('nick1');
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = { };
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
