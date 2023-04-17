/* eslint-disable react/no-unescaped-entities */
// Import the necessary libraries, components, and styles
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Nav.module.css';

// Define the Nav component
const Nav = () => {
return (
    <>
        <nav className={styles.Nav}>
            {/* Create a wrapper div to group all elements inside the nav */}
            <div className={styles.NavWrapper}>
            {/* Create the logo div and use the Image component to display the logo */}
                <div className={styles.NavLogo}>
                    <Image src="/images/logo-wtc.png" fill alt="logo-wtc" />
                </div>
            {/* Create the hamburger menu div */}
                <div className={styles.NavMenu}>
                    <span className={styles.span1}></span>
                    <span className={styles.span2}></span>
                    <span className={styles.span3}></span>
                </div>
            {/* Create a div to hold the navigation links and the download button */}
            <div className={styles.NavBlock}>
                    {/* Create a list to hold the navigation links */}
                    <li className={styles.NavList}>
                        <ul className={styles.NavLink}>ACCEUIL</ul>
                        <ul className={styles.NavLink}>DROPS</ul>
                        <ul className={styles.NavLink}>NEWS</ul>
                    </li>
                    {/* Create a button for downloading the app */}
                    <button className={styles.NavButton}>
                        <p className={styles.ButtonText}>TÉLÉCHARGE L'APPLICATION</p>
                    </button>
                </div>
            </div>
        </nav>
        </>
    );
};

// Export the Nav component
export default Nav;
