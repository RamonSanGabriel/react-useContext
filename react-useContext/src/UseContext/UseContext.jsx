import { useContext, createContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
    setUser('You are logged in');
  };

  const handleLogout = () => {
    setIsLogin(false);
    setUser('You are logged out');
  };

  return (
    <div>
      <UserContext.Provider
        value={{ user, isLogin, handleLogin, handleLogout }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
};
