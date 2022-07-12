import styles from './Home.module.scss';

import { Link } from 'react-router-dom';
import __VARIABLES__ from '../../environments/variables';
import { FaArrowUp } from 'react-icons/fa';
import { Button, Heading } from '@chakra-ui/react';

export default function Home() {
    return (
        <>
            <div className={`${styles.buttonUp}`}>
                <FaArrowUp />
            </div>
            <div className={styles.background + " page-header header-filter"}>
                <div className={styles.container + " container"}>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Heading as='h1' size='3xl'>
                                <p className="title mb-5 mt-5">
                                    Bem-vindo ao portal de <br /> inscrição online do
                                    {' ' + __VARIABLES__._institute_short_name_}
                                </p>
                            </Heading>

                            <Link to={'/signup'} className="mt-5 me-3 mb-3">
                                <Button colorScheme='red' className='text' size='lg'>
                                    Inscrever-se agora!
                                </Button>
                            </Link>


                            <Link to={'/signup'} className="mt-5 me-3 mb-3">
                                <Button colorScheme={__VARIABLES__._orange_default_btn_} className='text' size='lg'>
                                    Ver mais
                                </Button>
                            </Link>


                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#fff', height: '40vh' }}>
                home
            </div>
        </>
    )
}