import { useSession } from '../hooks/session-context';
import { Login } from './Login';
import { Profile } from './Profile';

export const My = () => {
  const { session, removeCartItem } = useSession();

  return (
    <>
      <h3>My</h3>
      {session.loginUser ? <Profile /> : <Login />}
      <ul>
        {session?.cart.map((item) => (
          <li key={item.id}>
            {item.name}({item.price})
            <button onClick={() => removeCartItem(item.id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
};
