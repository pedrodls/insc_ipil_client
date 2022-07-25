import { useEffect, useState } from 'react'
import { CardGuides, Input, Select, InputDate, Button } from '../../../environments/elements'
import { getAccount } from '../../../environments/functions'
import __VARIABLES__ from '../../../environments/variables'
import styles from './Guides.module.scss'
import { AreaService, GuideService } from '../../../environments/services';
import { AreaModel } from '../../../environments/models';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaGuide } from '../../../environments/schemas';
import { Alert, AlertIcon, Stack } from '@chakra-ui/react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom'

export function GuidesPage({ type_account }: any) {
    let navigate = useNavigate();

    const areaServices = new AreaService();
    const guideServices = new GuideService();

    const [areas, setAreas] = useState<Array<AreaModel>>([]);
    const [data, setData] = useState<boolean>(false)
    const [spinner, setSpinner] = useState<boolean>(false);
    const [message, setMessage] = useState<any>({ show: false, type: 'error', message: '' })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schemaGuide) });

    useEffect(() => {

        (async function () {

            const _session_account = await getAccount()

            _session_account == __VARIABLES__._guide_account ? setData(true) : setData(false)

            await areaServices.getAll().then(data => {
                setAreas(data.data.data);
            }).catch(e => console.log(e));

        })();

    }, [])

    const handleChange = () => {
        setMessage({ show: false, type: 'error', message: '' });
    }

    const onSubmitHandler = async (data: any, e: any) => {
        setMessage({ show: false, message: '', type: 'error' });
        setSpinner(true);

        if (data.areaId.length === 0)
            data.areaId = areas.length === 0 ? '' : areas[0].id

        let response = await guideServices.createOne(data).then(res => res.data).catch(e => e.response.data);
        console.log(response);
        setSpinner(false);

        if (response.error) {
            setMessage({ show: true, message: response.message, type: 'error' });
            return false;
        }
        const inp1: any = document.getElementById('code_solicitation');
        inp1.focus();

        setMessage({ show: true, message: response.message, type: 'success' });
        reset({ code_solicitation: '', rupe: '' }, {
            keepDefaultValues: false
        });
        e.target.reset();
    }

    return <>

        {
            data ? <>
                <div className={styles['container-fluid']}>
                    <div className="row mb-4">
                        <div className="col-md-12 d-flex justify-content-center">
                            <CardGuides>
                                <form onSubmit={handleSubmit(onSubmitHandler)}>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <Input registerYup={register} text="Nº de solicitação" type="text" name="code_solicitation" placeholder="" _class="signup" handleEvent={handleChange} />
                                        </div>
                                        <div className="col-md-6">
                                            <Input registerYup={register} text="Rupe" type="text" name="rupe" placeholder="" _class="signup" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Select registerYup={register} text="Área de Formação" id="areaId" _options={areas} _class="signup" />
                                        </div>
                                        <div className="col-md-6">
                                            <InputDate registerYup={register} maxDate={moment().add(3, 'months').format('YYYY-MM-DD')} minDate={moment().format('YYYY-MM-DD')} text="Data de Expiração" id="expireIn" type="date" name="expireIn" _class="signup" handleEvent={handleChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-end m-2">
                                            <Button text={spinner ? (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> A Criar...</>) : 'Criar'} type="submit" _class="defaultYellow" disabled={spinner} />
                                        </div>
                                    </div>
                                    {(Object.keys(errors).length > 0 || message.show) && <Stack spacing={3}>
                                        <Alert status={Object.keys(errors).length > 0 ? 'warning' : message.type} className="text-center">
                                            <><AlertIcon />
                                                {
                                                    errors.code_solicitation?.message || errors.rupe?.message || errors.areaId?.message || errors.expireIn?.message || message.message
                                                }
                                            </>
                                        </Alert>
                                    </Stack>}
                                </form>
                            </CardGuides>
                        </div>
                    </div>
                </div>
            </> : <>


            </>
        }

    </>

}