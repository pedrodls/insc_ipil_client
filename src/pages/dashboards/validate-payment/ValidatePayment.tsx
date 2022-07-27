import { useEffect, useState } from 'react'

import { CardGuides, ValidatePaymentCard } from '../../../environments/elements'
import { getAccount } from '../../../environments/functions'
import __VARIABLES__ from '../../../environments/variables'

import { AreaModel } from '../../../environments/models';

import styles from './ValidatePayment.module.scss'
import { AreaService, ApplysService } from '../../../environments/services';
import { Heading } from '@chakra-ui/react';

export function ValidatePaymentPage({ type_account }: any) {

    const [data, setData] = useState<boolean>(false)

    const [fetchComplete, setFetchComplete] = useState<boolean>(false)

    const [areas, setAreas] = useState<Array<AreaModel>>([]);

    const areaServices = new AreaService();

    const applysServices = new ApplysService();

    const fetchData = async () => {

        const _session_account = await getAccount()

        if (_session_account.toLowerCase() === __VARIABLES__._validate_payment_account.toLowerCase()) {

            setData(true)

            const _areas: any = await areaServices.getAll().then(data => data.data.data).catch(e => []);

            const _applys: any = await applysServices.getApplys().then(data => data.data).catch(e => []);

            console.log(_applys)

            setAreas(_areas);

            setFetchComplete(true);

        }
        else
            setData(false)

    }

    useEffect(() => {

        fetchData()

    }, [])

    return <>

        {
            data ? <>
                <div className={styles['container-fluid']}>

                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                            
                            <CardGuides>

                                <div className="row">
                                    <div className="col-md-12">
                                        <Heading as='h1' size='lg' fontSize='1.5em'>
                                            <p className="title mb-5">
                                                Secção de <br /> validação de inscrição online
                                            </p>
                                        </Heading>
                                    </div>
                                </div>

                                <div className="row">

                                        {

                                            areas.map((data, index) => {
                                                return (<ValidatePaymentCard data={data} key={index} />)
                                            })
                                        }

                                </div>


                            </CardGuides>

                        </div>
                    </div>
                </div>
            </> : <>


            </>
        }

    </>

}