import React, { useState, useEffect } from 'react';
import "./App.css";
import LoadingScreen from './components/LoadingScreen';
import HomePage from './components/HomePage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && <HomePage />}
    </div>
  );
}

export default App;