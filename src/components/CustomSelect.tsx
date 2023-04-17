/* eslint-disable react/jsx-no-comment-textnodes */
// Import the necessary libraries and styles
import React from 'react';
import styles from '@/styles/customSelect.module.css';
import Image from 'next/image';

// Define the interface for the component's props
interface CustomSelectProps {
    options: Array<{ value: string; label: string }>;
    onChange: (value: string) => void;
}

// Define the CustomSelect component
const CustomSelect: React.FC<CustomSelectProps> = ({ options, onChange }) => {
return (
        // Add a wrapper div with the CustomSelect class
        <div className={styles.CustomSelect}>
            {/* // Add the select element with the Select class and an onChange event handler */}
            <select
                className={styles.Select}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            >
                {/* // Loop through the provided options and create an option element for each one */}
                {options.map((option) => (
                    <option className={styles.CustomSelectOption} key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {/* // Add a wrapper div with the ArrowAbsolute class for positioning the arrow image */}
            <div className={styles.ArrowAbsolute}>
                {/* // Add a wrapper div with the ArrowDown class and the arrow image inside */}
                <div className={styles.ArrowDown}>
                    <Image src='/images/ArrowDown.svg' fill alt="ArrowDown" />
                </div>
            </div>
        </div>
    );
};

// Export the CustomSelect component
export default CustomSelect;

