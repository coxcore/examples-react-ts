import React, {
    ChangeEventHandler,
    MouseEventHandler,
    ReactElement,
} from 'react';

interface VTodoInputProps {
    value?: string;
    onChange?: ChangeEventHandler;
    onSubmit?: MouseEventHandler;
}

const VTodoInput = ({
    value,
    onChange,
    onSubmit,
}: VTodoInputProps): ReactElement => {
    return (
        <div>
            <input type="text" value={value} onChange={onChange} />
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
};

export default VTodoInput;
