import { useRef } from 'react';
import { useSession } from '../hooks/session-context';

export const Login = () => {
  const { login } = useSession();
  // const [userId, setUserId] = useState(0);
  // const [userName, setUserName] = useState('길동');
  const useIdRef = useRef();
  const useNameRef = useRef();

  const submit = (evt) => {
    evt.preventDefault();
    login(useIdRef.current.value, useNameRef.current.value);
  };
  return (
    <>
      <h3>Login</h3>
      <form onSubmit={submit}>
        <label htmlFor='user-id'>
          User Id :
          <input id='user-id' type='number' ref={useIdRef} />
        </label>
        <label htmlFor='user-name'>
          User Name :
          <input id='user-name' type='text' ref={useNameRef} />
        </label>
        <button type='submit'>LogIn</button>
      </form>
    </>
  );
};
