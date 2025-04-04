import { createContext, useContext, useEffect, useRef, useState } from "react";

const AuthContext = createContext("");

export function useAuth() {
  return useContext(AuthContext);
}

const localStorageUsersKey = "users";
const localStorageCurrentUserKey = "currentUser";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem(localStorageCurrentUserKey)) || null
  );
  const usersRef = useRef();

  useEffect(() => {
    const lsData = JSON.parse(localStorage.getItem(localStorageUsersKey));

    if (lsData) {
      usersRef.current = lsData;
    } else {
      localStorage.setItem(localStorageUsersKey, JSON.stringify([]));
      usersRef.current = [];
    }
  }, []);

  const signIn = (data, callback) => {
    const localStorageData = JSON.parse(
      localStorage.getItem(localStorageUsersKey)
    );
    const user = localStorageData.find((item) => item.email === data.email);

    if (user) {
      if (user.password === data.password && user.email === data.email) {
        setUser(user);
        localStorage.setItem(localStorageCurrentUserKey, JSON.stringify(user));
        callback();
      }
    }
  };

  const register = (data, callback) => {
    usersRef.current = [...usersRef.current, data];
    localStorage.setItem(
      localStorageUsersKey,
      JSON.stringify(usersRef.current)
    );
    callback();
  };

  const logOut = (callback) => {
    setUser(null);
    localStorage.removeItem(localStorageCurrentUserKey);
    callback();
  };

  return (
    <AuthContext.Provider value={{ user, signIn, register, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
