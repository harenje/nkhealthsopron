import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<any[]>([]);
  const fetchUsers = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  };

  return (
    <>
      <div className="">
        <button className="h-12 w-12 bg-red-500" onClick={fetchUsers}>
          asd
        </button>
      </div>
      <div className="h-screen w-screen bg-blue-200">
        <ul>
          {users.map((user, index) => {
            return (
              <li key={index}>
                {user.emailVerified}
                ||| {user.email}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Users;
