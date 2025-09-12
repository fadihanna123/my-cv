import { createContext, useContext } from "react";

export const MyGlobalContext = createContext<GlobalContent>({
  darkMode: false,
  setDarkMode: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
