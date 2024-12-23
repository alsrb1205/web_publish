import React from 'react';
import { useState } from 'react';
export default function Header({children}) {

    return (
        <header className='header'>
            {children}
        </header>
    );
}

