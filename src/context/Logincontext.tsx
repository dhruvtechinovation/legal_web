// import React from 'react'
// import {createContext,useContext} from 'react'

// function Logincontext() {

// const logincontext=createContext(null)
//   return (
//     <div>Logincontext</div>
//   )
// }

// export default Logincontext
import { createContext, useEffect, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  setUser: (user: string) => void;
  setlogin: (login: boolean) => void;
  login: boolean;
  user: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string>('');
  const [login, setlogin] = useState<boolean>(false);
  // console.log(login)
  console.log(login)

  // useEffect(() => {
  //   const savedLogin = localStorage.getItem('login');
  //   if (savedLogin === 'true') {
  //     setlogin(true);
  //   }
  // }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, login, setlogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};