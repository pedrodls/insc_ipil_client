import { useEffect, useState } from 'react'

import { CardGuides, ValidatePaymentCard } from '../../../environments/elements'
import { getAccount } from '../../../environments/functions'
import __VARIABLES__ from '../../../environments/variables'

import { AreaModel } from '../../../environments/models';

import styles from './ValidatePayment.module.scss'
import { AreaService } from '../../../environments/services';
import { Heading } from '@chakra-ui/react';

export function ValidatePaymentPage({ type_account }: any) {

    const [data, setData] = useState<boolean>(false)

    const [areas, setAreas] = useState<Array<AreaModel>>([]);

    const areaServices = new AreaService();

    const [selected, setSelected] = useState<any>({}); //elementos selecionados

    const fetchData = async () => {

        const _session_account = await getAccount()

        if (_session_account == __VARIABLES__._validate_payment_account) {

            setData(true)

            await areaServices.getAll().then(data => {

                setAreas(data.data.data);

                selected.area = data.data.data.length > 0 ? data.data.data[0].id : '';

            }).catch(e => console.log(e));
        }
        else
            setData(true)

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
                                        <Heading as='h1' size='xl'>
                                            <p className="title mb-5">
                                                Secção de <br /> validação de inscrição online
                                            </p>
                                        </Heading>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">

                                        {
                                            areas.length
                                        }
                                        {

                                            areas.map((data, index) => {
                                                return (<ValidatePaymentCard />)
                                            })
                                        }
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