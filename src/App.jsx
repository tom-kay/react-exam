import { useState } from 'react';
import './App.css';
import { Hello, Hello2 } from './components/Hello';
import { My } from './components/My';
import { SessionProvider } from './hooks/session-context';

function App() {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    // flushSync(() => setCount((count) => count + 1));
    // flushSync(() => setCount((count) => count + 1));
    setCount((count) => count + 1);
    // setTimeout(() => {
    //   setCount((count) => count + 1);
    //   setCount((count) => count + 1);
    // }, 3000);
  };

  return (
    <div className='App'>
      <Hello name='시코' />
      <Hello2 id={2} name='시니어코딩' />
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={plusCount}>PlusCount</button>
        <SessionProvider>
          {/* <My
            session={session}
            login={login}
            logout={logout}
            removeCartItem={removeCartItem}
          ></My> */}
          <My />
        </SessionProvider>
      </div>
    </div>
  );
}

export default App;
