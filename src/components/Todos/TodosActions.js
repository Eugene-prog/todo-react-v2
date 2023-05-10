import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'; 
import Button from '../UI/Button';
import styles from './TodosAction.module.css';

function TodosActions({ resetTodo, deleteCompletedTodos, complitedTodosExist }) {
  return (
    <div className={styles.todosActionsContainer}>
    <Button title={"Reset Todos"} onClick={resetTodo}><RiRefreshLine/></Button>
    <Button title={"Clear Completed Todos"} onClick={deleteCompletedTodos} disabled={!complitedTodosExist}><RiDeleteBin2Line/></Button>
    </div>
  )
}

export default TodosActions;