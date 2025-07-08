import { useEffect, useState } from "react";

export function useThemePreference() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    // Listen for changes in theme preference
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e: any) => {
      setIsDarkMode(e.matches);
    };
    mediaQuery.addListener(handleChange); // or mediaQuery.addEventListener('change', handleChange);

    // Clean up the listener on component unmount
    return () => {
      mediaQuery.removeListener(handleChange); // or mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return {
    isDarkMode,
  };
}
