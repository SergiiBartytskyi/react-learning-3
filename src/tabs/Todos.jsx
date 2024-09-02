import { useEffect, useState } from 'react';
import { Form, Text, TodoList } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    return savedTodos ?? [];
  });
  const [editingTodoId, setEditingTodoId] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = newTodo => {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo,
      ),
    );
    setEditingTodoId(null);
  };

  const startEditingTodo = id => {
    setEditingTodoId(id);
  };

  return (
    <>
      <Form onSubmit={addTodo} />
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onEdit={startEditingTodo}
          editingTodoId={editingTodoId}
          onUpdate={updateTodo}
        />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
