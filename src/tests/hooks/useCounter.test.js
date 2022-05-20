import { act, renderHook } from "@testing-library/react";
import useCounter from '../../hooks/useCounter';

describe('useCounter customHook', () => {

  test('should get correct properties', () => {
    const { result: { current } } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = current;
    expect(counter).toBe(10);
    expect(typeof increment).toBe("function");
    expect(typeof decrement).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test('should have correct value in counter prop', () => {
    const { result: { current } } = renderHook(() => useCounter(100));
    expect(current.counter).toBe(100);
  });

  test('should increments in 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => {
      increment();
    })
    expect(result.current.counter).toBe(101);
  });

  test('should decrements in 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
    })
    expect(result.current.counter).toBe(99);
  });

  test('should reset to initial argument', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
      decrement();
    });
    expect(result.current.counter).toBe(98);

    const { reset } = result.current;
    act(() => {
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});