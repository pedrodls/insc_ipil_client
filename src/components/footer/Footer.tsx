import { FaPhone, FaEnvelope, FaMap, FaFacebook, FaWhatsapp, FaInstagram, FaTwitter, FaGlobe } from 'react-icons/fa';
import styles from './Footer.module.scss';
import __VARIABLES__ from '../../envs/variables';
export default function Footer() {
    return (<>
        <footer className={styles.footer}>
            <div className={`${styles.links} container`}>
                <div className="row">
                    <div className={`${styles.contact} col-lg-4 col-md-6 col-xs-12`}>
                        <h1>Contactos</h1>
                        <ul>
                            <li><a className="d-flex align-items-center"><FaPhone />&nbsp;&nbsp;{__VARIABLES__._institute_phone_}</a></li>
                            <li><a className="d-flex align-items-center"><FaEnvelope />&nbsp;&nbsp;{__VARIABLES__._institute_email_}</a></li>
                            <li><a className="d-flex align-items-center"><FaMap />&nbsp;&nbsp;{__VARIABLES__._institute_address_}</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.portal} col-lg-4 col-md-6 col-xs-12`}>
                        <h1>Portais Disponíveis</h1>
                        <ul>
                            <li><a className="d-flex align-items-center"><FaGlobe />&nbsp;&nbsp;Site Informativo</a></li>
                            <li><a className="d-flex align-items-center"><FaGlobe />&nbsp;&nbsp;Gestão de Notas (NotaIPIL)</a></li>
                            <li><a className="d-flex align-items-center"><FaGlobe />&nbsp;&nbsp;Gestão de Inscrições (INSCIPIL)</a></li>
                            <li><a className="d-flex align-items-center"><FaGlobe />&nbsp;&nbsp;Gestão de Matrículas</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.socialMedia} col-lg-4 col-md-12 col-xs-12`}>
                        <h1>Redes Sociais</h1>
                        <ul className="d-flex">
                            <li className={`${styles.icons}`}><a><FaFacebook /></a></li>
                            <li className={`${styles.icons}`}><a><FaTwitter /></a></li>
                            <li className={`${styles.icons}`}><a><FaInstagram /></a></li>
                            <li className={`${styles.icons}`}><a><FaWhatsapp /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.assign}>
                <p>
                    @2022 IPIL feito IPIL | All rights reserved
                </p>
            </div>
        </footer>
    </>)
}