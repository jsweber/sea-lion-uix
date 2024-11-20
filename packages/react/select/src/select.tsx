import { FC } from 'react';
import { Button } from '@sea-lion/react-button';

const Name = 'Select';

interface SelectProps {
    children: React.ReactNode;
}

const Select: FC<SelectProps> = ({ children }) => {

    return (
        <div>
            <Button>{children}</Button>
            <div>select</div>
        </div>
    );
}

Select.displayName = Name;

export {
    Select
};

export type {
    SelectProps
};
