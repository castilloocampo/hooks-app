
import { act, renderHook } from '@testing-library/react';
import useForm from '../../hooks/useForm';
describe('useForm', () => {

  const initialValueForm = {
    name: "Mario Castillo",
    email: "mariotl9752@gmail.com",
  };

  test('should return a default form', () => {
    const { result } = renderHook(() => useForm(initialValueForm));
    const [values] = result.current;
    expect(values).toEqual(initialValueForm);
  });

  test('should change value of form', () => {
    const { result } = renderHook(() => useForm(initialValueForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          value: "Nuevo Nombre",
          name: "name"
        }
      });
    });
    const newFormValue = {...initialValueForm, name: "Nuevo Nombre"};
    expect(result.current[0]).toEqual(newFormValue);
   
  });

  test('should reset values of form', () => {
    const { result } = renderHook(() => useForm(initialValueForm));
    const [, handleInputChange, resetForm] = result.current;

    act(() => {
      handleInputChange({
        target: {
          value: "Juanito Perez",
          name: "name"
        }
      });
      resetForm();
    });
    expect(result.current[0]).toEqual(initialValueForm);

  });


});