import React, {useEffect} from "react";
import {useTypedSelector} from "../hooks";
import {useActions} from "../hooks/useActions";

export const UserList = () => {
  const {error, loading, todos} = useTypedSelector((state) => state.todo);

  const {fetchUsers, fetchTodo} = useActions();

  useEffect(() => {
    fetchTodo();
  }, []);

  if (loading) return <>"Loading..."</>;

  if (error) return <>{error}</>;

  return (
    <>
      {todos.map((user) => (
        <div>{user.title}</div>
      ))}
    </>
  );
};
