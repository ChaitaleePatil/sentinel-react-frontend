import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../utils/cn';  // Corrected path
 // Utility function for class merging (optional)

export function Button({ children, className, onClick, type = "button", disabled = false }) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn(
                "px-6 py-3 rounded-md text-white font-medium transition-all",
                "disabled:bg-gray-400 disabled:cursor-not-allowed",
                className
            )}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    disabled: PropTypes.bool,
};