import styles from './Information.module.scss';

import { Link, Outlet } from 'react-router-dom';
import __VARIABLES__ from '../../environments/variables';
import { FaArrowUp } from 'react-icons/fa';
import { Button, ButtonGroup, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';


export default function Information() {  

  
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
       
            <div className={styles.background + " page-header header-filter"}>
                <div className={styles.container + " container"}>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Heading as='h1' size='2xl'>
                                <h1 className="title mb-5 mt-5">
                                    Sector das Informações
                                </h1>
                            </Heading>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#fff', height: '40vh' }}>
                ..... 
            </div>
        </>
    )
}