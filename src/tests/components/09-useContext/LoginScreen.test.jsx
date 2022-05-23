
import { render, screen, fireEvent } from '@testing-library/react';
import LoginScreen from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Login Screen', () => {

  let setUser = jest.fn();
  let { container } = render(
    <UserContext.Provider value={{
      setUser
    }}>
      <LoginScreen />
    </UserContext.Provider>
  );
  beforeEach(() => {
    container = render(
      <UserContext.Provider value={{
        setUser
      }}>
        <LoginScreen />
      </UserContext.Provider>
    ).container;
  });

  test('should show correctly', () => {
    expect(container).toMatchSnapshot();
  });

  test('should call setUser with expected argument', () => {
    const btnLogin = screen.queryByRole('button');
    fireEvent.click(btnLogin);
    expect(setUser).toHaveBeenCalledWith({
      id: expect.any(Number),
      name: "Mario Castillo",
      email: "mariotl9752@gmail.com"
    });
  });


});
