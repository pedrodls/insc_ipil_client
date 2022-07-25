import { useEffect, useState } from 'react'

import { CardSignUp, CardGuides, Input, Select, InputDate, Button } from '../../../environments/elements'
import { getAccount } from '../../../environments/functions'
import __VARIABLES__ from '../../../environments/variables'

import { AreaModel, TownModel, CourseModel, SubjectApplyModel } from '../../../environments/models';

import styles from './Guides.module.scss'
import { AreaService } from '../../../environments/services';
import moment from 'moment';

export function GuidesPage({ type_account }: any) {

    const [data, setData] = useState<boolean>(false)

    const [areas, setAreas] = useState<Array<AreaModel>>([]);

    const [dataForm, setDataForm] = useState<any>({})

    const areaServices = new AreaService();

    const [selected, setSelected] = useState<any>({}); //elementos selecionados

    const fetchData = async () => {

        const _session_account = await getAccount()

        if (_session_account == __VARIABLES__._guide_account) {

            setData(true)

            await areaServices.getAll().then(data => {

                setAreas(data.data.data);

                selected.area = data.data.data.length > 0 ? data.data.data[0].id : '';

            }).catch(e => console.log(e));
        }
        else
            setData(true)

    }

    const handleChange = (e: any) => {

        const _data = dataForm

        _data[e.target.name] = e.target.value

        setDataForm(_data)

    }

    const handleSelect = (e: any) => {

        const _data = dataForm

        _data[e.target.id] = e.target.value.length == 0 ? areas[0].id : e.target.value 

        setDataForm(_data)

    }

    const submitGuide = () => {

        if(!dataForm.hasOwnProperty('areaId'))         
            setDataForm({...dataForm, areaId: areas[0].id})
        
        
        console.log(dataForm)
    }

    useEffect(() => {

        fetchData()

    }, [])

    return <>

        {
            data ? <>
                <div className={styles['container-fluid']}>

                    <form className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                            <CardGuides>

                                <div className="row mb-4">
                                    <div className="col-md-6">

                                        <Input text="Nº de solicitação" type="text" name="codeSolicitation" placeholder="" _class="signup" handleEvent={handleChange} />

                                    </div>
                                    <div className="col-md-6">

                                        <Input text="Rupe" type="text" name="rupe" placeholder="" _class="signup" handleEvent={handleChange} />

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">

                                        <Select text="Área de Formação" id="areaId" _options={areas} _class="signup" handle={handleSelect} />


                                    </div>
                                    <div className="col-md-6">

                                        <InputDate minDate={moment().format('YYYY-MM-DD')} defaultValue={moment().format('YYYY-MM-DD')} text="Data de expiração" id="expireIn" type="date" name="expireIn" _class="signup" handleEvent={handleChange} />

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col d-flex justify-content-end m-2">

                                        <Button text={'Enviar'}
                                            type="button" _class="defaultYellow" handle={submitGuide} />

                                    </div>
                                </div>
                            </CardGuides>

                        </div>
                    </form>

                </div>
            </> : <>


            </>
        }

    </>

}