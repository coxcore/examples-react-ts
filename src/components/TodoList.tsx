import React, { ReactElement, useCallback } from 'react';
import { VACList } from 'react-vac';

// import { ListWrap } from 'react-loop-item';
// import VTodo from './vac/VTodo';

type TodoAction = (id: number) => void;

interface TodoListProps {
    list: Array<{ id: number; value: string; checked: boolean }>;
    checkTodo: TodoAction;
    removeTodo: TodoAction;
}

const TodoList = ({
    list,
    checkTodo,
    removeTodo,
}: TodoListProps): ReactElement => {
    // cache each callback
    const each = useCallback(
        ({ id, value, checked }) => ({
            id,
            value,
            checked,
            onCheck: () => checkTodo(id),
            onRemove: () => removeTodo(id),
        }),
        [checkTodo, removeTodo]
    );

    // ListWrap Props Object
    const vTodoListProps = {
        list,
        each,
    };

    // VAC Debugger
    return <VACList name="VTodoList" data={vTodoListProps} />;

    // view asset component(VAC) to be developed
    // return <ListWrap tag="ul" target={VTodo} memo="id" {...vTodoListProps} />;
};

export default TodoList;
