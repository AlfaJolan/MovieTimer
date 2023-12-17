import React, { ReactElement, Children, cloneElement, useState } from "react";

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const BackGroundColorClick = ({ children }: { children: ReactElement | ReactElement[] }) => {
    const [backgroundColor, backgroundColorChange] = useState('');

    const onClick = () => backgroundColorChange(getRandomColor());

    return (
        <span onClick={onClick}>
            {Children.map(
                children,
                (child: ReactElement) => cloneElement(child, {
                    ...child.props,
                    style: {
                        ...(child.props.style ?? {}),
                        backgroundColor,
                    },
                })
            )}
        </span>
    );
};

export default BackGroundColorClick;
