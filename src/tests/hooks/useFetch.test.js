import { cleanup, renderHook, waitFor } from '@testing-library/react';
import useFetch from '../../hooks/useFetch';
describe('useFetch', () => {
  beforeEach(() => {
    cleanup();
    jest.setTimeout(2000);
  })

  test('should return default information', () => {
    const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('should return required info', async () => {
    const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    await waitFor(() => {
      expect(result.current.data.length).toBe(1);
      expect(result.current.loading).not.toBeTruthy();
      expect(result.current.error).toBe(null);
    });
  });

  test.skip('should return error', async () => {
    const { result } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'));
    console.log(result.current);
    await waitFor(() => {
      expect(result.current.error).toBe('No se pudo cargar la info');
      console.log(result.current);
    }, {timeout:2000});
  });
});