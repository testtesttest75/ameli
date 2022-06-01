import React from 'react';
import styles from '../styles/PopUp.module.css'

const PopUp = (props) => {
    return (
        <div onClick={props.setVisible} className={(props.isVisible)? styles.visibleBlur : styles.invisbleBlur}>
            <div className={(props.isVisible)? styles.visibleContainer : styles.invisibleContainer}>
                <h1>Votre demande de remboursement a bien été prise en compte !</h1>
                <img src="/images/checkmark.gif" alt="checked" />
                <p>Le remboursement sera effectué d'ici 3 à 5 jours.</p>
            </div>
        </div>
    );
};

export default PopUp;