import { EditForm, GridItem, Text } from '..';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './TodoListItem.module.css';

export const TodoListItem = ({
  id,
  text,
  count,
  onDelete,
  onEdit,
  isEditing,
  onUpdate,
}) => {
  return (
    <GridItem>
      <div className={style.box}>
        {isEditing ? (
          <EditForm
            defaultValue={text}
            onCancel={() => onEdit(null)}
            onSave={newText => onUpdate(id, newText)}
          />
        ) : (
          <>
            <Text textAlign="center" marginBottom="20">
              TODO #{count}
            </Text>
            <Text className={style.text}>{text}</Text>
            <button
              className={style.deleteButton}
              type="button"
              onClick={() => onDelete(id)}
            >
              <RiDeleteBinLine size={24} />
            </button>

            <button
              className={style.editButton}
              type="button"
              onClick={() => onEdit(id)}
            >
              <RiEdit2Line size={24} />
            </button>
          </>
        )}
      </div>
    </GridItem>
  );
};
