import { renderHook, act } from '@testing-library/react-hooks';
import useStateWithStorage from './useStateWithStorage';

describe('useStateWithStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize subtotal with the value from localStorage', () => {
    localStorage.setItem('subtotal', JSON.stringify(5));
    const { result } = renderHook(() => useStateWithStorage('subtotal', 0));
    const [subtotal] = result.current;
    expect(subtotal).toBe(5);
  });

  it('should initialize subtotal with the default if localStorage is empty', () => {
    const { result } = renderHook(() => useStateWithStorage('subtotal', 0));
    const [subtotal] = result.current;
    expect(subtotal).toBe(0);
  });

  it('should update localStorage when the state changes', () => {
    const { result } = renderHook(() => useStateWithStorage('subtotal', 0));
    const [, setSubtotal] = result.current;

    act(() => {
      setSubtotal(5);
    });

    const [subtotal] = result.current;
    expect(subtotal).toBe(5);
    expect(localStorage.getItem('subtotal')).toBe(JSON.stringify(5));
  });

  it('should handle setSubtotal updates correctly', () => {
    const { result } = renderHook(() => useStateWithStorage('subtotal', 0));
    const [, setSubtotal] = result.current;

    act(() => {
      setSubtotal((prev) => prev + 1);
    });

    const [subtotal] = result.current;
    expect(subtotal).toBe(1);
    expect(localStorage.getItem('subtotal')).toBe(JSON.stringify(1));
  });
});
