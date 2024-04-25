import React, { createContext, useState, FC, ReactNode } from "react";

interface GlobalState {
  loggedIn: boolean;
}

export const GlobalStateContext = createContext<GlobalState | undefined>(
  undefined
);

export const GlobalStateProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<GlobalState>({
    loggedIn: false,
  });

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  );
};
