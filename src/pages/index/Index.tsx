import styles from './index.module.scss';

import { Link } from 'react-router-dom';
import __VARIABLES__ from './../../envs/variables';
import { Navbar } from './../../envs/elements';
import { FaArrowUp } from 'react-icons/fa';

export default function Index() {
    return (
        <>
           <Navbar _class="navbar-invisible"/>
           
            <div className={`${styles.buttonUp}`}>
                <FaArrowUp/>
            </div>
            <Navbar />
            <div className={styles.background + " page-header header-filter"}>
                <div className={styles.container + " container"}>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="title mb-4">{__VARIABLES__._institute_short_name_}</h1>
                            <h4 className="title mb-4">{__VARIABLES__._institute_name_}</h4>
                            <h5 className="description">Faça já a sua inscrição!</h5>
                            <Link to={'/signup'} className="mt-4 btn btn-danger btn-lg">Fazer Inscrição</Link>
                            &nbsp;&nbsp;
                            <Link to={'/signup'} className="mt-4 btn btn-outline-warning btn-lg">Consulta</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#fff', height: '40vh' }}>

            </div>
        </>
    )
}