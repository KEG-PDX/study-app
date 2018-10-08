jest.mock('../../services/authApi', () => ({
  signin: jest.fn(),
  signup: jest.fn(),
  verify: jest.fn()
}));

import { signup, signin, logout } from './actions';
import { USER_AUTH, LOGOUT } from './reducers';
import { 
  signup as signupSvc,
  signup as signinSvc } from '../../services/authApi';

describe('Auth action creators', () => {

  function testAuth(name, mockSvc, actionCreator) {
    it(`Creates ${name} action`, () => {
      const promise = Promise.resolve();
      mockSvc.mockReturnValueOnce(promise);

      const credentials = {};
      const { type } = actionCreator(credentials);
      expect(type).toBe(USER_AUTH);
      expect(mockSvc.mock.calls.length).toBe(1);
      expect(mockSvc.mock.calls[0][0]).toEqual(credentials);
    });
  }

  testAuth('signup', signupSvc, signup);
  testAuth('signin', signinSvc, signin);

  it('Creates logout action', () => {
    const { type } = logout();
    expect(type).toBe(LOGOUT);
  });
});