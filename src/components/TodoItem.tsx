import { ItemProps } from "../utils/ItemProps";

function TodoItem({ task, removeItem }: ItemProps) {

    return (
        <section className='item-container'>
            <input type='checkbox' />
            <p>{task}</p>
            <button onClick={removeItem}>
                X
            </button>
        </section>
    );
}

export default TodoItem;
