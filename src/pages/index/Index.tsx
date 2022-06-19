import React from 'react';
import styles from './index.module.css';

import { Link } from 'react-router-dom';
import __VARIABLES__ from './../../envs/variables';
import {Navbar} from './../../envs/elements';

export default function Index(){
    return (
        <>
           <Navbar _class="navbar-invisible" />
            <div className={styles.background + " page-header header-filter"}>
                <div className={styles.container + " container"}>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="title mb-4">{__VARIABLES__._institute_short_name_}</h1>
                            <h4 className="title mb-4">{__VARIABLES__._institute_name_}</h4>
                            <h5 className="description">Faça já a sua inscrição!</h5>
                            <Link to={'/signup'} className="mt-4 btn btn-danger btn-lg">Fazer Inscrição</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: '#fff', height: '100vh'}}>

            </div>
        </>
    )
}