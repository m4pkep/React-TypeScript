import React, {useEffect, useState} from "react";
import Card, { CardVariant } from './components/Card';
import UserList from "./components/UserList";
import {IUser, ITodo} from './types/types';
import axios from 'axios';
import List from './components/List';
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  async function fetchUsers() {
    try {
      const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(responce.data);
    } catch (e) {
      alert(e)
    }
  };

  async function fetchTodos() {
    try {
      const responce = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(responce.data);
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
      <List
        items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
      />
      <List
        items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
      />
    </div>
  );
};

export default App;