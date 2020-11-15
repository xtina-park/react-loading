import React, {useState, useEffect} from 'react';
import Loading from './components/Loading';
import Clock from './components/Clock';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  })
  return (
    <div>
      {isLoading==true?
        <Loading/>:
        <Clock/>
      }
    </div>
  );
}

export default App;
