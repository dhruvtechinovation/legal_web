import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/validate', { withCredentials: true })
  //     .then((res) => {
  //       console.log("Auth Success:", res.data);
  //       setLogin(true);
  //     })
  //     .catch((err) => {
  //       console.error("Auth Failed:", err);
  //       setLogin(false);
  //     })
  //     .finally(() => setLoading(false));
  // }, []);
  

  return (
    <AuthContext.Provider value={{ login, setLogin, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => 
{
  const context=useContext(AuthContext);
  if(!context)
  {
    console.log('use context inside the provider')
  }
  return context
}