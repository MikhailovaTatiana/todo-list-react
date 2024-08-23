import { ItemProps } from "../utils/ItemProps";

function TodoItem({ task, checked, removeItem, toggleChecked }: ItemProps) {

    return (
        <section className='item-container'>
            <input
                type='checkbox'
                checked={checked}
                onChange={toggleChecked}
            />
            <p style={{ textDecoration: checked ? 'line-through' : 'none' }}>
                {task}
            </p>
            <button onClick={removeItem}>
                X
            </button>
        </section>
    );
}

export default TodoItem;
