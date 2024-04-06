import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('it should return password', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                password: '123asd',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123asd');
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = { };
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
