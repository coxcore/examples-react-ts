import React, { ReactElement } from 'react';
import { VAC } from 'react-vac';

import useTodoList from '../hooks/useTodoList';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoContainer = (): ReactElement => {
    // Business Logic
    const [list, { addTodo, checkTodo, removeTodo, selectModel }] =
        useTodoList('userA');

    // TodoInput Props Object
    const todoInputProps = {
        handleSubmit: addTodo,
    };

    // TodoList Props Object
    const todoListProps = {
        list,
        checkTodo,
        removeTodo,
    };

    return (
        <div>
            <h1>Todo List</h1>

            <h3>Select Todo Data</h3>
            <VAC
                data={{
                    userA: () => selectModel('userA'),
                    userB: () => selectModel('userB'),
                    userC: () => selectModel('userC'),
                }}
            />

            <h3>View Components</h3>
            <TodoInput {...todoInputProps} />
            <TodoList {...todoListProps} />
        </div>
    );
};

export default TodoContainer;
