import React from 'react';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <a href="https://assure.ameli.fr/PortailAS/appmanager/PortailAS/assure?_nfpb=true&_pageLabel=as_accueil_page" className={styles.r_lien_image}>
                <img src="/images/logo_general.png" alt="Logo du régime d'assurance maladie" />
            </a>
        </div>
    );
};

export default Navbar;