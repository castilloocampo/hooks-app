import { cleanup, render } from "@testing-library/react";
import { mount, shallow } from "enzyme"
import HomeScreen from '../../../components/09-useContext/HomeScreen';
import { UserContext } from "../../../components/09-useContext/UserContext";

const user = {
  name: 'Mario Castillo',
  email: 'mario@email.com'
}

// describe('HomeScreen component enzyme', () => {
//   const wrapper = mount(
//     <UserContext.Provider value={{
//       user: user
//     }}>
//       <HomeScreen />
//     </UserContext.Provider>
//   );

//   afterEach(() => {
//     cleanup();
//   });

//   test('should show correctly enzyme', () => {
//     expect(wrapper).toMatchSnapshot();
//   });

// });

describe('HomeScreen component React Testing Library', () => {

  let { container } = render(
    <UserContext.Provider value={{
      user: user
    }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  afterEach(() => {
    cleanup();
  });

  test('should show correctly', () => {
    expect(container).toMatchSnapshot();
  });
});