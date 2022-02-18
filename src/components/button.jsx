import React from 'react';
import classNames from 'classnames';

function Button(props) {
    const { outline, children, onClick, className, cart } = props;

    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
                'button--outline': outline,
                'button--cart': cart
            })}
        >
            {children}
        </button>
    );
}

export default Button;
