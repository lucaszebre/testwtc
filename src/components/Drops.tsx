// Import the necessary libraries, components, and styles
import React, { useState } from 'react';
import SneakerCart from './SneakerCart';
import styles from '@/styles/Drops.module.css';
import CustomSelect from './CustomSelect';
import { drops_data } from '../data/data';

// Define the Drops component
const Drops = () => {
  // Define the array of options for the CustomSelect component
const ArrayIndice = [
    { value: 'option1', label: 'Tout les resell', var: 'tout les resell' },
    { value: 'option2', label: 'Excellent resell', var: 'excellent' },
    { value: 'option3', label: 'Bon resell', var: 'bon' },
    { value: 'option4', label: 'Moyen resell', var: 'moyen' },
    { value: 'option5', label: 'Mauvais resell', var: 'mauvais' },
    ];

  // Define the state variable for the selected option value
const [selectedValue, setSelectedValue] = useState<string>('option1');

  // Filter the data based on the selected option value
const filteredData =
    selectedValue === 'option1'
        ? drops_data
        : drops_data.filter(
            (item) =>
                item.resellIndex ===
                ArrayIndice.find((option) => option.value === selectedValue)?.var
            );

  // Render the Drops component
return (
        <div className={styles.DropsDiv}>
            <div className={styles.DropsHeader}>
                <p className={styles.DropsTitle}>Drops</p>
                <CustomSelect
                options={ArrayIndice}
                onChange={(value) => {
                    setSelectedValue(value);
                }}
                />
            </div>
            <div className={styles.DropsSneakers}>
                {filteredData.map((item) => (
                <div className={styles.SneakerCartWrapper} key={item.id}>
                    <SneakerCart
                        image={item.imagePath}
                        alt={item.brandName}
                        SneakerTitle={item.modelName}
                        SneakerRef={item.brandName}
                        SneakerColorTitle={item.colorName}
                        CircleColor={item.CircleColor}
                        SneakerIndice={item.resellIndex}
                        height={item.height}
                    />
                </div>
                ))}
            </div>
        </div>
    );
};

// Export the Drops component
export default Drops;

