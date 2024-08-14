import React from 'react';

// eslint-disable-next-line react/prop-types
export default function TabButton({ children }) {
    return (
        <li>
            <button>{children}</button>
        </li>
    );
}
