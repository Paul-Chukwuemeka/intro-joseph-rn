import { useState, useEffect } from "react";

export default function useDebounce(value: string) {
  const [debounced, setDebounced] = useState<string>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, 500);
    return () => clearTimeout(handler);
  }, [value]);
  return debounced;
}
