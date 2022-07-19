
import moment from 'moment'

import { CardSignUp, CardGuides, Input, Select, InputDate, Button } from '../../../environments/elements'

import styles from './Guides.module.scss'

export function GuidesPage() {


    return <>
        <div className={styles['container-fluid']}>

            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <CardGuides>

                        <div className="row mb-4">
                            <div className="col-md-6">

                                <Input text="Nº de solicitação" type="text" name="codeSolicitation" placeholder="" _class="signup" />



                            </div>
                            <div className="col-md-6">

                                <Input text="Rupe" type="text" name="educatorFullName" placeholder="" _class="signup" />

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">

                                <Select text="Área de Formação" id="kinship" _options={[{ id: 'Mãe', name: 'Mãe' }, { id: 'Pai', name: 'Pai' }]} _class="signup" />


                            </div>

                        </div>

                        <div className="row">
                            <div className="col d-flex justify-content-end m-2">

                                <Button text={'Enviar'}
                                    type="submit" _class="defaultYellow" />

                            </div>
                        </div>
                    </CardGuides>

                </div>
            </div>
        </div>



    </>

}