import React, {FC} from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => any;
};

export default function List<T>(props: ListProps<T>) {

    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}