import React, {FC} from "react";

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardsProps {
    width?: string; // необязательный пропс
    height?: string;
    variant?: CardVariant;
    children?: any;
    onClick: (num: number) => void;
}

const Card: FC<CardsProps> =
    ({
        width,
        height,
        variant,
        children,
        onClick
    }) => {
    
        const [state, useState] = React.useState(0);

    return (
        <div style={{width, height,
            border: variant === CardVariant.outlined ? '1px solid grey' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : 'none'
        }}
            onClick={()  => onClick(state)}
        >
            {children}
            {/* чилдреном является все что я помещу внутрь кард компонента в апп тсх*/}
        </div>
    );
};

export default Card;