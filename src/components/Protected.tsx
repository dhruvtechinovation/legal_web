import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from '@/context/Logincontext'

function ProtectedRoute({ children }) {
  // const res=localStorage.getItem('token')
  // console.log(res)
  const {login}=useAuth()
  console.log(login)


  const navigate = useNavigate();

  useEffect(() => {
    if (!login) {
      navigate('/',{replace:true});
    }
  }, [login, navigate]);

  // If not authenticated, don't render children
  if (!login) return null;

  return children;
}

export default ProtectedRoute;
