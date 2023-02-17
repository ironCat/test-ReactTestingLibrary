import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [isShown, setShown] = useState(false);
  const [toggle, setToggle] = useState(false);

  const onClick = () => setToggle(prev => !prev)

  useEffect(() => {
    setTimeout(() => {
      setShown(true)
    }, 100)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello for testing.
        </p>
        {toggle && (
          <div
            data-testid="toggle-block"
          >
            toggle block
          </div>
        )}
        {isShown && (
          <div style={{ color: "red" }}>
            Appearing element after timeout
          </div>
        )
        }
        <button
          onClick={onClick}
          data-testid="toggle-button"
        >
          Click Me
        </button>
        <input
          data-testid="test-input"
          type="text"
          placeholder='Input some Text'
        />

      </header >
    </div >
  );
}

export default App;
