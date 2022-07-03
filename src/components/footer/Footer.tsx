import { FaPhone, FaEnvelope, FaMap, FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.scss';
import __VARIABLES__ from '../../envs/variables';
export default function Footer() {
    return (<>
        <footer className={styles.footer}>
            <div className={`${styles.links} container`}>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <h1>Contactos</h1>
                        <ul>
                            <li><a><FaPhone /> {__VARIABLES__._institute_phone_}</a></li>
                            <li><a><FaEnvelope /> {__VARIABLES__._institute_email_}</a></li>
                            <li><a><FaMap /> {__VARIABLES__._institute_address_}</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <h1>Portais Disponíveis</h1>
                        <ul>
                            <li><a><FaPhone /> 999999999</a></li>
                            <li><a><FaMap /> 999999999</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-12">
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