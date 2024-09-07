import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function GetUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data, status }) => {
      if (status === 200) {
        setUsers(data);
      }
    });
  }, []);

  return (
    <div>
      <div className="Container">
        {users.map(({ id, username, name, email, address }) => {
          return (
            <div key={id} className="UsersApi">
              <p className="Id"><label htmlFor="">Id</label>{id}</p>
              <p><label htmlFor="">Username</label>{username}</p>
              <p><label htmlFor="">Name</label>{name}</p>
              <p><label htmlFor="">Email</label>{email}</p>
              <p><label htmlFor="">Street</label>{address.street}</p>
              <p><label htmlFor="">Suite</label>{address.suite}</p>
              <p><label htmlFor="">City</label>{address.city}</p>
              <p><label htmlFor="">Zipcode</label>{address.zipcode}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GetUsers;
