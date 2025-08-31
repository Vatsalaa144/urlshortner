import React, { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from '@tanstack/react-router'
import { useSelector } from 'react-redux'
import Navbar from './components/NavBar'

const RootLayout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If not authenticated and not on landing or auth page, redirect to landing
    if (!isAuthenticated && !['/landing', '/auth'].includes(location.pathname)) {
      navigate({ to: '/landing' });
    }
    // If authenticated and on landing or auth page, redirect to home
    else if (isAuthenticated && ['/landing', '/auth'].includes(location.pathname)) {
      navigate({ to: '/' });
    }
  }, [isAuthenticated, location.pathname, navigate]);

  // Only show NavBar on dashboard and home pages
  const shouldShowNavbar = ['/', '/dashboard'].includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar/>}
      <Outlet/>
    </>
  )
}

export default RootLayout