import React, {
    ReactElement,
    ChangeEventHandler,
    MouseEventHandler,
} from 'react';

interface VTodoProps {
    id: number;
    value: string;
    checked: boolean;
    onCheck?: ChangeEventHandler;
    onRemove?: MouseEventHandler;
}

const VTodo = ({
    id,
    value,
    checked,
    onCheck,
    onRemove,
}: VTodoProps): ReactElement => {
    const inputId = `checkbox_${id}`;

    return (
        <li key={id}>
            <input
                type="checkbox"
                id={inputId}
                checked={checked}
                onChange={onCheck}
            />
            <label htmlFor={inputId}>{value}</label>
            <button type="button" onClick={onRemove}>
                remove
            </button>
        </li>
    );
};

export default VTodo;
