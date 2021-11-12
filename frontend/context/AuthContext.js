import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within the AuthProvider');
  }

  return context;
}

export function AuthContextProvider(props) {
  const [authState, setAuthState] = useState(false);
  const value = {
    authState,
    setAuthState,
    checkAuthState,
  };

  function checkAuthState(email, password) {
    if (email === 'test@user.com' && password === 'Chk123') {
      return true;
    }
    return false;
  }

  return <AuthContext.Provider value={value} {...props} />;
}
