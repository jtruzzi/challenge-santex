import { useState, useEffect } from 'react';

function useStateWithStorage(
  key: string,
  initialValue: number
): [number, (value: number | ((val: number) => number)) => void] {
  const [state, setState] = useState<number>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useStateWithStorage;
