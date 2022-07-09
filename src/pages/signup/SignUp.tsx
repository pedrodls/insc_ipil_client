import { useState } from 'react';
import { Navbar, InputFile, InputDate, Input, Select, Footer, CardSignUp } from '../../environments/elements';
import { ERROR_STATE } from '../../environments/states';
import styles from './SignUp.module.scss';
import { FaArrowLeft, FaArrowRight, FaBoxOpen } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Carousel } from 'react-bootstrap';
import { schemaStage1, schemaStage2, schemaStage3 } from '../../environments/schemas';
import { Alert, AlertIcon, Stack } from '@chakra-ui/react';
import moment from 'moment';

function ButtonChoose(index: number, setIndex: any) {
    return (<>
        <nav className={`${styles.options} mt-4`}>
            <ul className="pagination">
                <li className={`page-item`} onClick={() => { window.scrollTo(0, 0); setIndex(index - 1) }}>
                    <button className="page-link text-center">
                        <div className="d-flex flex-column align-items-center">Anterior<FaArrowLeft /></div>
                    </button>
                </li>
                <li className={`page-item text-center`} >
                    <button type="submit" className="page-link text-center">
                        <div className="d-flex flex-column align-items-center">Próximo<FaArrowRight /></div>
                    </button>
                </li>
            </ul>
        </nav>
    </>)
}

export default function SignUp() {
    //---------------------Declaration Session---------------------------------------------------------------
    const [spinner, setSpinner] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0); //controlador do estado do formulário    
    const [error, setError] = useState(new ERROR_STATE()); //controlo de erro
    const [errorUpload, setErrorUpload] = useState(new ERROR_STATE()); //upload elements
    const [signup, setSignUp] = useState({}); //varíavel responsável por guardar os dados

    //testando react-hook-form
    //{ resolver: yupResolver(schemaStage1) }
    const { register: register1, handleSubmit: handleSubmit1, formState: { errors: errors1 } } = useForm({ resolver: yupResolver(schemaStage1) });
    const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 } } = useForm({ resolver: yupResolver(schemaStage2) });
    const { register: register3, handleSubmit: handleSubmit3, formState: { errors: errors3 } } = useForm({ resolver: yupResolver(schemaStage3) });

    //----------------------Function Session----------------------------------------
    const onSubmitHandler = (data: any) => {
        console.log(data);
        if (index === 1 && data.telephone2.length !== 0 && !(/^[0-9]{9,9}$/).test(data.telephone2)) {
            setError({ show: true, color: '', message: 'Campo Contacto 2 no Formato Incorrecto' });
            return false;
        }
        window.scrollTo(0, 0);
        if (index === 1) {
            setIndex(index + 1);
            Object.assign(signup, data);
        } else if (index === 2) {
            setIndex(index + 1);
            Object.assign(signup, data);
        }

        console.log(signup);

        //reset();
    }

    const handleChange = () => { setError({ show: false, color: '', message: '' }) } //método executado quando input muda
    const handleClick = () => { //método executado quando clicado no Próximo                    
    }
    const handleSelect = () => { }

    const handleFile = async (e: any) => {
        setSpinner(true);
        try {
            //{ schedule: e.target.files[0] }
            setSpinner(false);
        } catch (error) { console.log(error) }
    }

    return (
        <>
            <Navbar isSignUp={true} />
            <section className={`${styles['container-signup']} container`}>
                <div className="row">
                    <div className={`${styles['content-form']} d-flex justify-content-center mb-4`}>
                        <CardSignUp>
                            {index !== 0 && <>
                                <nav className={styles.pagination}>
                                    {index === 1 && <h1 className="text-center">Dados do Encarregado de Educação</h1>}
                                    {index === 2 && <h1 className="text-center">Dados do Aluno</h1>}
                                    {index === 3 && <h1 className="text-center">Dados Acadêmicos</h1>}
                                    {index === 4 && <h1 className="text-center">Anexo de Documentos</h1>}
                                    <ul className="pagination">
                                        <li className={`page-item`}><button onClick={() => setIndex(1)} className={`page-link ${index === 1 ? styles.active : ''}`}>1</button></li>
                                        <li className={`page-item`}><button onClick={() => setIndex(2)} className={`page-link ${index === 2 ? styles.active : ''}`}>2</button></li>
                                        <li className={`page-item`}><button onClick={() => setIndex(3)} className={`page-link ${index === 3 ? styles.active : ''}`}>3</button></li>
                                        <li className={`page-item`}><button onClick={() => setIndex(4)} className={`page-link ${index === 4 ? styles.active : ''}`}>4</button></li>
                                    </ul>
                                </nav>
                                <hr className="row-global" />
                            </>}
                            <Carousel activeIndex={index} interval={300} indicators={false} slide={false} fade controls={false}>
                                <Carousel.Item>                                

                                    <div className="d-flex justify-content-between align-items-center">
                                        <h1>Áreas de Formação</h1>
                                        <div className="d-flex justify-content-end" style={{ width: '40%' }}>
                                            <button onClick={() => setIndex(1)} className="btn btn-danger">Começar</button>
                                        </div>
                                    </div>
                                    <div className={`mt-4 mb-4`}>
                                        <Select text="" id="cmbSexo" _options={[{ id: 'M', name: 'Informática' }, { id: 'F', name: 'Mecânica' }]} handle={handleSelect} _class="signup" />
                                    </div>
                                    <table className={`table table-borderless table-responsible ${styles.table}`} style={{ verticalAlign: 'middle', marginTop: '4em' }}>
                                        <thead className="text-center">
                                            <tr>
                                                <th>-</th>
                                                <th>Áreas</th>
                                                <th>Estado das Guias</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">1</td>
                                                <td>Construção Civil</td>
                                                <td className="text-center text-danger">indisponível</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td>Electricidade</td>
                                                <td className="text-center text-success">disponível</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">3</td>
                                                <td>Informática</td>
                                                <td className="text-center text-success">disponível</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">4</td>
                                                <td>Química</td>
                                                <td className="text-center text-success">disponível</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">5</td>
                                                <td>Mecânica</td>
                                                <td className="text-center text-danger">indisponível</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Carousel.Item>
                                {/*------------------*Dados do Encarregado de Educação-----*/}
                                <Carousel.Item>
                                    <form onSubmit={handleSubmit1(onSubmitHandler)} className="row">

                                        {/*errors.email?.message*/}

                                        <div className="col-md-12 col-lg-6">
                                            <Input registerYup={register1} text="Nº do Bilhete" id="educatorBI" type="text" name="educatorBI" placeholder="" _class="signup" handleEvent={handleChange} maxLength={14} />
                                            <Input registerYup={register1} text="Nome Completo" type="text" name="educatorFullName" placeholder="" _class="signup" handleEvent={handleChange} />
                                            <Select registerYup={register1} text="Parentesto" id="kinship" _options={[{ id: 'Mãe', name: 'Mãe' }, { id: 'Pai', name: 'Pai' }]} handle={handleSelect} _class="signup" />
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <Input registerYup={register1} text="Município" id="educatorCity" type="text" name="educatorCity" _class="signup" handleEvent={handleChange} />
                                            <Input registerYup={register1} text="Email" type="email" name="email" placeholder="" _class="signup" handleEvent={handleChange} />
                                            <p className="mb-3">Contacto(s)</p>
                                            <div className={`inputInvisible d-flex align-items-center mb-4`}>
                                                <div style={{ width: '48%' }}>
                                                    <Input registerYup={register1} text="" placeholder="Contacto *" id="telephone1" type="tel" name="telephone1" _class="invisible" handleEvent={handleChange} />
                                                </div>
                                                |
                                                <div style={{ width: '48%' }}>
                                                    <Input registerYup={register1} text="" placeholder="Contacto 2(opcional)" id="telephone2" type="tel" name="telephone2" _class="invisible" handleEvent={handleChange} />
                                                </div>
                                            </div>
                                        </div>

                                        {(Object.keys(errors1).length > 0 || error.show) && <Stack spacing={3}>
                                            <Alert status='error' className="text-center">
                                                <><AlertIcon />
                                                    {errors1.educatorBI?.message || errors1.educatorFullName?.message || errors1.educatorCity?.message || errors1.email?.message || errors1.telephone1?.message || errors1.telephone2?.message || error.message}
                                                </>
                                            </Alert>
                                        </Stack>}
                                        {ButtonChoose(index, setIndex)}
                                    </form>
                                </Carousel.Item>
                                {/*---------------------*Dados do Aluno-----------------*/}
                                <Carousel.Item>
                                    <form onSubmit={handleSubmit2(onSubmitHandler)} className="row">
                                        <div className="col-md-12 col-lg-6">
                                            <Input registerYup={register2} text="Nº do Bilhete" id="bi" type="text" name="bi" placeholder="" _class="signup" handleEvent={handleChange} maxLength={14} />
                                            <Input registerYup={register2} text="Nome Completo" type="text" name="fullName" placeholder="" _class="signup" handleEvent={handleChange} />
                                            <Select registerYup={register2} text="Gênero" id="gender" _options={[{ id: 'M', name: 'M' }, { id: 'F', name: 'F' }]} handle={handleSelect} _class="signup" />
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <p className="">Data de Nascimento</p>
                                            <div className="d-flex justify-content-between">
                                                <InputDate max={moment().subtract(14, 'years').calendar()} registerYup={register2} text="" id="birthdate" type="date" name="birthdate" _class="signup" handleEvent={handleChange} />
                                                &nbsp;&nbsp;
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <Input validate={true} text="" id="age" readOnly={true} type="text" name="age" _class="signup" handleEvent={handleChange} />
                                                    &nbsp;&nbsp;<span style={{ fontSize: '12px', textAlign: 'center' }}>idade até 31 de Maio</span>
                                                </div>
                                            </div>

                                            <Input registerYup={register2} text="Município" id="city" type="text" name="city" _class="signup" handleEvent={handleChange} />
                                            <Input registerYup={register2} text="Endereço" id="address" type="text" name="address" _class="signup" handleEvent={handleChange} />
                                        </div>

                                        {(Object.keys(errors2).length > 0 || error.show) && <Stack spacing={3}>
                                            <Alert status='error' className="text-center">
                                                <><AlertIcon />
                                                    {errors2.bi?.message || errors2.fullName?.message || errors2.birthdate?.message || errors2.city?.message || errors2.address?.message || error.message}
                                                </>
                                            </Alert>
                                        </Stack>}
                                        {ButtonChoose(index, setIndex)}
                                    </form>
                                </Carousel.Item>
                                {/*----------------------*Dados Acadêmicos----------------*/}
                                <Carousel.Item>
                                    <form onSubmit={handleSubmit2(onSubmitHandler)} className="row">
                                        <div className="col-md-12 col-lg-6">
                                            <div>
                                                <Input text="Escola de proveniência - 9ª classe (Nome ou Nº)" type="text" name="school" placeholder="" _class="signup" handleEvent={handleChange} />
                                            </div>
                                            <div>
                                                <p style={{ fontSize: '12px' }} className="text-danger text-center mb-2">* Coloque com cuidado as notas das médias das disciplinas específicas</p>
                                            </div>
                                            <div className="mt-3">
                                                <p className="mb-4">Curso Pretendido (<b>Informática</b>)</p>
                                                <hr className="row-global" />
                                                <div className="text-center d-flex justify-content-between align-items-center">
                                                    <b>1ª Opção</b>
                                                    <Select text="" id="cmbCourse1" _options={[{ id: 'M', name: 'Técnico de Informática' }, { id: 'F', name: 'Técnico de Gestão de Sistemas Informáticos' }]} handle={handleSelect} _class="signup" />
                                                </div>
                                                <div className="text-center d-flex justify-content-between align-items-center mt-2">
                                                    <b>2ª Opção</b>
                                                    <Select text="" id="cmbCourse2" _options={[{ id: 'M', name: 'Técnico de Informática' }, { id: 'F', name: 'Técnico de Gestão de Sistemas Informáticos' }]} handle={handleSelect} _class="signup" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <table className="table table-responsible" style={{ verticalAlign: 'middle' }}>
                                                <thead className="text-center">
                                                    <tr>
                                                        <th>-</th>
                                                        <th>MAT</th>
                                                        <th>FIS</th>
                                                        <th>QUIM</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>7ª</td>
                                                        <td>
                                                            <Input text="" type="text" name="school" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                        <td>
                                                            <Input text="" type="text" name="school" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                        <td>
                                                            <Input text="" type="text" name="school" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>8ª</td>
                                                        <td>
                                                            <Input text="" type="text" name="school" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                        <td>
                                                            <Input text="" type="text" name="school" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                        <td>
                                                            <Input text="" type="text" name="school" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>9ª</td>
                                                        <td>
                                                            <Input text="" type="text" name="school" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                        <td>
                                                            <Input text="" type="text" name="school" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                        <td>
                                                            <Input text="" type="text" name="school" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </form>
                                </Carousel.Item>
                                {/*----------------------*Anexos de Documentos----------------*/}
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6">
                                            <div className="">
                                                <Input text="Anexo de BI" type="file" id="scheduleBI" accept=".pdf" name="scheduleBI" _class="default" handleEvent={handleFile} />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <div className="">
                                                <Input text="Anexo de Certificado" type="file" id="scheduleCertificado" accept=".pdf" name="scheduleCertificado" _class="default" handleEvent={handleFile} />
                                            </div>
                                        </div>
                                        {errorUpload.show &&
                                            <p className='text-center' style={{ color: errorUpload.color }}>
                                                {errorUpload.message}
                                            </p>}
                                        <div className="d-flex flex-column align-items-center justify-content-center">
                                            <FaBoxOpen className="" size="100" color="gainsboro" />
                                            <div className={styles.filesUploaded}>0</div>
                                        </div>
                                    </div>

                                </Carousel.Item>
                            </Carousel>
                        </CardSignUp>



                        {/*<form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" className="form-control" {...register('fullName', { required: true, pattern: /^\w$/ })} />
                            <input type="text" className="form-control" {...register('bi', { required: true, minLength: 14 })} />
                            <input type="submit" className="btn btn-danger" />
                            {errors.fullName && <h1 className="text-dark">Nome Errado</h1>}
                        </form>*/}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}