import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearAuth } from '../store/slice/authSlice';
import { getCurrentUser } from '../api/user.api';

const AuthInitializer = ({ children }) => {
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const initializeAuth = async () => {
      if (token && !isAuthenticated) {
        try {
          const user = await getCurrentUser();
          if (user) {
            dispatch(setUser(user));
          } else {
            dispatch(clearAuth());
          }
        } catch (error) {
          console.error('Failed to initialize auth:', error);
          dispatch(clearAuth());
        }
      }
    };

    initializeAuth();
  }, [dispatch, token, isAuthenticated]);

  return children;
};

export default AuthInitializer;
