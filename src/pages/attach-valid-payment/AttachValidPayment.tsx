import styles from './AttachValidPayment.module.scss';

import __VARIABLES__ from '../../environments/variables';
import {  Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CardGuides, Input, Button } from '../../environments/elements';


export default function AttachValidPaymentPage() {

    const [spinner, setSpinner] = useState<Array<boolean>>([false, false]);

    const handleSubmit = async () => { //método executado quando clicado no Próximo                    
        
    }

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
                                    Comprovar Pagamento
                                </h1>
                            </Heading>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#fff' }}>

                <div className="row mt-4">
                    <div className="col-md-12 d-flex justify-content-center">
                        <CardGuides>

                            <div className="row">
                                <div className="col-md-12">
                                    <Heading as='h1' size='lg' fontSize='1.4em'>
                                        <p className="title mb-5" >
                                            Esta secção, permite comprovar e ver o estado de pagamento de sua inscrição.
                                        </p>
                                    </Heading>
                                </div>
                            </div>

                            <div className="row">

                                <form >
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <Input text="Bilhete de Identidade" type="text" name="code_solicitation" placeholder="" _class="signup" />
                                        </div>
                                        <div className="col-md-6">
                                            <Input text="Nº de solicitação" type="text" name="rupe" placeholder="" _class="signup" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col d-flex justify-content-end m-2">
                                            <Button text={spinner[1] ? (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> A Comprovar...</>) : 'Comprovar'}
                                                type="submit" _class="defaultYellow" handle={handleSubmit} disabled={spinner[1]} />
                                        </div>
                                    </div>

                                </form>

                            </div>

                        </CardGuides>

                    </div>
                </div>

            </div>
        </>
    )
}