import { useState } from "react";

function Loggedin() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>LogOut</button>
      <h2>User is {isLoggedIn ? "logged in" : "logged out"}</h2>
    </div>
  );
}

export default Loggedin;
