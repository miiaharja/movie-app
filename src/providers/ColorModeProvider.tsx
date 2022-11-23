import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ModeChoises = "light" | "system" | "dark";

type ColorModeContextType = {
  colorMode: ModeChoises;
  setColorMode: (colorMode: ModeChoises) => void;
};

const ColorModeContext = React.createContext<ColorModeContextType | null>(null);

export const useColorModeContext = () => {
  const colorModeCtx = React.useContext(ColorModeContext);

  if (colorModeCtx === null) {
    throw new Error("Cannot use ColorModeContext outside the provider");
  }
  return colorModeCtx;
};

export const ColorModeProvider = ({ children }: Props) => {
  const [colorMode, setColorMode] = useState<ModeChoises>((localStorage.getItem("mode") ?? "system") as ModeChoises);
  const contextValue = React.useMemo<ColorModeContextType>(() => {
    return { colorMode, setColorMode };
  }, [colorMode]);

  useEffect(() => {
    localStorage.setItem("mode", colorMode);
  }, [colorMode]);

  return <ColorModeContext.Provider value={contextValue}>{children}</ColorModeContext.Provider>;
};
