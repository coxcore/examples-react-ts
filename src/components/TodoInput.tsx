import React, { ReactElement, useState, ChangeEvent } from 'react';
import { VACInput } from 'react-vac';

// import VTodoInput from './vac/VTodoInput';

type SubmitHandler = (value: string) => void;

interface TodoInputProps {
    handleSubmit?: SubmitHandler;
}

const DEFAULT_SUBMIT: SubmitHandler = () => undefined;

const TodoInput = ({
    handleSubmit = DEFAULT_SUBMIT,
}: TodoInputProps): ReactElement => {
    // Input state
    const [value, setValue] = useState('');

    // VTodoInput Props Object
    const vTodoInputProps = {
        value,
        onChange: (event: ChangeEvent) => {
            const target = event.target as HTMLTextAreaElement;
            setValue(target.value);
        },
        onSubmit: () => {
            handleSubmit(value);
            setValue('');
        },
    };

    // VAC Debugger
    return <VACInput name="TodoInput" data={vTodoInputProps} />;

    // view asset component(VAC) to be developed
    // return <VTodoInput {...vTodoInputProps} />;
};

export default React.memo(TodoInput);
