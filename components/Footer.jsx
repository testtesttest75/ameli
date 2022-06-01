import React from 'react';
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footerConnexion}>
            <div className={styles.footerVersion}>
                <span>Version :  <span id='numeroVersion'>21.24.03</span></span>
            </div>
            <ul>
                <li>
                    <a title="Accéder à l'accueil">
                        <img src="/images/footer_logo_ameli.png" className={styles.logoAm} alt="Logo du régime d'assurance maladie" />
                    </a>
                </li>
                <li>
                    <a href="https://didacticiel.ameli.fr/assures/cgu_mentionslegales/#conditions-generales-dutilisation" title='Mentions légales et CGU'>Mentions légales et CGU</a>
                </li>
                <li>
                    <a id="id_lien_accessibilite" target="aideAmeli" href="https://didacticiel.ameli.fr/assures/cgu_mentionslegales/#accessibilite" title="Aide et Accessibilité">
				        Aide et Accessibilité
			        </a>
                </li>
                <li>
                    <a id="id_lien_recommandations_securite" href="https://didacticiel.ameli.fr/assures/cgu_mentionslegales/#recommandations-de-securite" title="Recommandations de sécurité" target="aideAmeli">
                        Recommandations de sécurité
                    </a>
                </li>
                <li>
                    <a id="id_lien_protection" target="aideAmeli" href="https://didacticiel.ameli.fr/assures/cgu_mentionslegales/#conditions-generales-dutilisation" title="Protection des données personnelles">
				        Protection des données personnelles
			        </a>
                </li>
                <li>
                    <a id="id_lien_site_ameli.fr" href="https://www.ameli.fr/" title="Site Ameli" target="aideAmeli">
				        Site Ameli
			        </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;