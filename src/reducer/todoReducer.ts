export const SET = 'set';
export const ADD = 'add';
export const CHECK = 'check';
export const REMOVE = 'remove';
export const CLEAR = 'clear';

export type Todo = { id: number; value: string; checked: boolean };
export type TodoList = Array<Todo>;

type ActionParams = {
    type: string;
    data?: TodoList;
    id?: number;
    value?: string;
    checked?: boolean;
};

type Action = (state: TodoList, action: ActionParams) => TodoList;

/**
 * todo reducer
 */
const todoReducer = (state: TodoList, action: ActionParams): TodoList =>
    todoActions[action.type]?.(state, action) ?? state ?? [];

const todoActions: Record<string, Action> = {
    [SET]: (list, { data }) => (Array.isArray(data) ? data : []),

    [ADD]: (list, { value }) => {
        if (!value) {
            return list;
        }
        return [
            ...list,
            {
                id: Date.now(),
                value: String(value),
                checked: false,
            },
        ];
    },

    [CHECK]: (list, { id, checked }) => {
        return list.map((item) =>
            item.id === id
                ? {
                      ...item,
                      checked: Boolean(checked ?? !item.checked),
                  }
                : item
        );
    },

    [REMOVE]: (list, { id }) => {
        return list.filter((todo) => todo.id !== id);
    },

    [CLEAR]: () => {
        return [];
    },
};

export default todoReducer;
