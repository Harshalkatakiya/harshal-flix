'use client'
import React, { useState } from 'react';
import Data from './Data';
const Autocomplete = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        const filtered = Data.filter((option) =>
            option.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered);
    };
    const handleOptionSelect = (option) => {
        setInputValue(option.title);
        setFilteredOptions([]);
        console.log("Selected option:", option);
    };
    return (
        <div className="autocomplete">
            <input
                type="text"
                className="form-control mb-2"
                value={inputValue}
                onChange={handleInputChange}
                style={{ borderWidth: '3px' }}
            />
            {filteredOptions.length > 0 && (
                <ul className="list-group autocomplete-options">
                    {filteredOptions.map((option, index) => (
                        <li
                            key={index}
                            className="list-group-item"
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Autocomplete;