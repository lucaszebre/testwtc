/* eslint-disable react/no-unescaped-entities */
// components/SneakerCart.tsx
// Import the necessary libraries, components, and styles
import React from 'react';
import styles from '@/styles/SneakerCart.module.css';
import Image from 'next/image';

// Define the SneakerCartProps interface for type checking
interface SneakerCartProps {
    image: string;
    alt: string;
    SneakerTitle: string;
    SneakerColorTitle: string;
    SneakerRef: string;
    CircleColor: string;
    SneakerIndice: string;
    height: string;
}

// Define the SneakerCart component
const SneakerCart: React.FC<SneakerCartProps> = (props) => {
return (
    <div className={styles.SneakerDiv}>
      {/* Create a div to hold the sneaker image */}
        <div
            className={styles.SneakerImage}
            style={{ height: props.height }}
        >
            <Image src={props.image} fill alt={props.alt} />
        </div>
        {/* Create a div to hold the sneaker details */}
        <div className={styles.SneakerCart}>
            {/* Create a div to hold the sneaker title and reference */}
            <div className={styles.SneakerBlock1}>
                <h1
                    className={styles.SneakerTitle}
                    style={{
                    color: props.SneakerColorTitle,
                    }}
                >
                    {props.SneakerTitle}
                </h1>
                <h2 className={styles.SneakerRef}>{props.SneakerRef}</h2>
            </div>
            {/* Create a div to hold the sneaker color and resell index */}
            <div className={styles.SneakerBlock2}>
                <span
                    className={styles.Circle}
                    style={{ background: props.CircleColor }}
                ></span>
                <p className={styles.SneakerIndice}>{`${props.SneakerIndice} RESELL`}</p>
            </div>
        </div>
    </div>
);
};

// Export the SneakerCart component
export default SneakerCart;
