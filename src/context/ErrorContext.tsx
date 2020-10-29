import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export interface IErrorContext {
  error?: object;
  addError: (message: string, status?: any) => void;
  removeError: () => {};
}

const ErrorContext = createContext<any>({} as IErrorContext);

export const ErrorProvider: FC = ({ children }) => {
  const [error, setError] = useState<any>(null);

  const removeError = useCallback(() => setError(null), []);

  const addError = useCallback(
    (message, status) => setError({ message, status }),
    []
  );

  const value = useMemo(
    () => ({
      error,
      addError,
      removeError,
    }),
    [error, addError, removeError]
  );

  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
};

export const useError = () => {
  const context = useContext(ErrorContext);
  if (context === undefined) {
    throw new Error(
      "useError hook must be used within a ErrorProvider component"
    );
  }
  return context;
};
