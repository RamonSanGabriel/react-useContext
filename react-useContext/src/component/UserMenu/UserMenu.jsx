import { useUser } from '../../UseContext/UseContext';

const UserMenu = () => {
  const { user, handleLogin, handleLogout, isLogin } = useUser();
  return (
    <div>
      {isLogin && <p>{user}</p>}
      {isLogin ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default UserMenu;
