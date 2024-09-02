import { Grid, TodoListItem } from '..';

export const TodoList = ({
  todos,
  onDelete,
  onEdit,
  editingTodoId,
  onUpdate,
}) => {
  return (
    <Grid>
      {todos.map(({ id, text }, i) => (
        <TodoListItem
          key={id}
          id={id}
          text={text}
          count={i + 1}
          onDelete={onDelete}
          onEdit={onEdit}
          isEditing={editingTodoId === id}
          onUpdate={onUpdate}
        />
      ))}
    </Grid>
  );
};
