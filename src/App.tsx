import React, {useEffect, useState} from "react";
import Card, { CardVariant } from './components/Card';
import UserList from "./components/UserList";
import {IUser} from './types/types';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(responce.data);
    } catch (e) {
      alert(e)
    }
  };

  return (
    <div className="">
      <Card onClick={(num) => console.log('click', 0)} variant={CardVariant.outlined} width="200px" height="200px">
        <button>кнопка</button>
        <p>блок с текстом как чилдрен</p>
      </Card>
      <UserList users={users}/>
    </div>
  );
};

export default App;