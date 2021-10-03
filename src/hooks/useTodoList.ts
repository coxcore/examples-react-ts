import { useMemo, useEffect, useReducer } from 'react';
import useStorage from './useStorage';
import todoReducer, * as ACTIONS from '../reducer/todoReducer';
import type { Todo, TodoList } from '../reducer/todoReducer';

export interface TodoActions {
    updateModel: (data: Array<Todo>) => void;
    selectModel: (modelId: string) => void;
    addTodo: (value: string) => void;
    checkTodo: (id: number, checked?: boolean) => void;
    removeTodo: (id: number) => void;
    clear: () => void;
}

/**
 * todo list store
 */
const useTodoList = (modelId?: string): [TodoList, TodoActions] => {
    const storage = useStorage(modelId);
    const [list, dispatch] = useReducer(
        todoReducer,
        checkArray(storage.data())
    );

    const actions: TodoActions = useMemo(
        () => ({
            updateModel: storage.update,

            selectModel: (modelId) =>
                dispatch({ type: ACTIONS.SET, data: storage.select(modelId) }),

            addTodo: (value) => dispatch({ type: ACTIONS.ADD, value }),

            checkTodo: (id, checked) =>
                dispatch({ type: ACTIONS.CHECK, id, checked }),

            removeTodo: (id) => dispatch({ type: ACTIONS.REMOVE, id }),

            clear: () => dispatch({ type: ACTIONS.CLEAR }),
        }),
        [storage]
    );

    useEffect(() => {
        actions.updateModel(list);
    }, [list, actions]);

    return [list, actions];
};

const checkArray: (initList: TodoList) => TodoList = (initList) =>
    Array.isArray(initList) ? initList : [];

export default useTodoList;
