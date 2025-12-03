import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './RouteLoader.css';

/**
 * Route Loader Component
 * Shows a top progress bar during route transitions
 * Lightweight NProgress-style loader without external dependencies
 */
const RouteLoader = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Start loading on route change
    setLoading(true);
    setProgress(20);

    // Simulate progress
    const timer1 = setTimeout(() => setProgress(40), 100);
    const timer2 = setTimeout(() => setProgress(70), 200);
    const timer3 = setTimeout(() => setProgress(90), 300);
    
    // Complete loading
    const completeTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setLoading(false), 200);
    }, 400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(completeTimer);
    };
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div className="route-loader" style={{ width: `${progress}%` }} />
  );
};

export default RouteLoader;
