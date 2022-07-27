import { useEffect, useState } from 'react'

import { CardGuides, DefaulTable } from '../../../environments/elements'
import { getAccount } from '../../../environments/functions'
import __VARIABLES__ from '../../../environments/variables'

import { AreaModel } from '../../../environments/models';

import styles from './ValidateAreaPayment.module.scss'
import { AreaService } from '../../../environments/services';
import { Badge, Heading } from '@chakra-ui/react';

export function ValidateAreaPaymentPage({ type_account }: any) {

    const [data, setData] = useState<boolean>(false)

    const [fetchComplete, setFetchComplete] = useState<boolean>(false)

    const [areas, setAreas] = useState<Array<AreaModel>>([]);

    const areaServices = new AreaService();

    const fetchData = async () => {

        const _session_account = await getAccount()

        if (_session_account.toLowerCase() === __VARIABLES__._validate_payment_account.toLowerCase()) {

            setData(true)

            const _areas: any = await areaServices.getAll().then(data => data.data.data).catch(e => []);

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
                                        <Heading as='h2' size='lg'>
                                            <p className="title mb-5">
                                                Área de Formação de Informática
                                                <Badge ml='1' fontSize='1em' colorScheme='orange'>
                                                    +14
                                                </Badge>
                                            </p>

                                        </Heading>

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">

                                        <DefaulTable />

                                    </div>

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