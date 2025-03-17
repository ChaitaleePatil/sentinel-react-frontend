import React from 'react';

export function Card({ children, className = "", ...props }) {
    return (
        <div className={`bg-white shadow-lg rounded-2xl p-6 border border-gray-200 ${className}`} {...props}>
            {children}
        </div>
    );
}

export function CardContent({ children, className = "" }) {
    return (
        <div className={`text-gray-700 ${className}`}>
            {children}
        </div>
    );
}

export function Button({ children, onClick, className = "", ...props }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
