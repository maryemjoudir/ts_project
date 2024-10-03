import { useState } from "react";
import { User } from "../types/app";

export default function User_() {
  const [user, setUser] = useState<null | User>(null);
  //const [user, setUser] = useState<User>({} as User);

  return (
    <div>
      <button
        onClick={() => setUser({ name: "maryem", email: "maryem@gmail.com" })}
      >
        Login
      </button>
      {/* <button onClick={() => setUser({} as User)}>Logout</button> */}
      {/* <h2>User name is {user.name}</h2>
      <h2>User email is {user.email}</h2> */}

      <button onClick={() => setUser(null)}>Logout</button>
      <h2>User name is {user?.name}</h2>
      <h2>User email is {user?.email}</h2>
    </div>
  );
}
