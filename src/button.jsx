import React from 'react';
import classNames from 'classnames';

function Button({ outline, children, onClick }) {
    return (
        <button
            onClick={onClick}
            className={classNames('button', {
                'button--outline': outline,
            })}
        >
            {children}
        </button>
    );
}

export default Button;
