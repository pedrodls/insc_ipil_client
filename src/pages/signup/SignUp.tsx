import { useState, useEffect } from 'react';
import { Navbar, InputFile, InputDate, Input, Select, Footer, CardSignUp, Button, SpinnerSignUp } from '../../environments/elements';
import __VARIABLES__ from '../../environments/variables';
import { ERROR_STATE, APRESENTATION_STATE } from '../../environments/states';
import styles from './SignUp.module.scss';
import { FaArrowLeft, FaArrowRight, FaBoxOpen } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Carousel } from 'react-bootstrap';
import { schemaStage1, schemaStage2, schemaStage3 } from '../../environments/schemas';
import { Alert, AlertIcon, Stack } from '@chakra-ui/react';
import moment from 'moment';
//services request
import { AreaService, TownService, CourseService } from '../../environments/services';
//models request
import { AreaModel, TownModel, CourseModel } from '../../environments/models';

function ButtonChoose(index: number, setIndex: any) {
    return (<>
        <nav className={`${styles.options} p-4`}>
            <ul className="pagination">
                <li className={`page-item`} >
                    <button type="button" onClick={() => { setIndex(index - 1) }} className="btn btn-light text-primary text-center">
                        <div className="d-flex flex-column align-items-center">Anterior<FaArrowLeft /></div>
                    </button>
                </li>
                <li className={`page-item text-center`} >
                    <button type="submit" className="btn btn-light text-primary text-center">
                        <div className="d-flex flex-column align-items-center">Próximo<FaArrowRight /></div>
                    </button>
                </li>
            </ul>
        </nav>
    </>)
}
export default function SignUp() {
    //instancia dos serviços
    const areaServices = new AreaService();
    const townServices = new TownService();
    const courseServices = new CourseService();

    const [areas, setAreas] = useState<Array<AreaModel>>([]);
    const [towns, setTowns] = useState<Array<TownModel>>([]);
    const [courses, setCourses] = useState<Array<CourseModel>>([]);

    //---------------------Declaration Session---------------------------------------------------------------
    const [spinner, setSpinner] = useState<Array<boolean>>([false, false]);
    const [index, setIndex] = useState<number>(0); //controlador do estado do formulário    
    const [error, setError] = useState(new ERROR_STATE()); //controlo de erro
    const [apresentation, setApresentation] = useState(new APRESENTATION_STATE()); //apresentação das telas
    const [signup, setSignUp] = useState({}); //varíavel responsável por guardar os dados
    const [birthdateCalc, setBirthdateCalc] = useState<string>('') //variável que guarda o cálculo da idade dele
    const [filesUploaded, setFilesUploaded] = useState([null, null]) //variável que guarda oS ficheiros submetidos
    const [filesLength, setFilesLength] = useState<number>(0) //variável que guarda o cálculo da idade dele    

    //configurando react-hook-form com os schemas yup
    const { register: register1, handleSubmit: handleSubmit1, formState: { errors: errors1 } } = useForm({ resolver: yupResolver(schemaStage1) });
    const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 } } = useForm({ resolver: yupResolver(schemaStage2) });
    const { register: register3, handleSubmit: handleSubmit3, formState: { errors: errors3 } } = useForm({ resolver: yupResolver(schemaStage3) });

    useEffect(() => {
        areaServices.getAll().then(data => setAreas(data.data.data)).catch(e => console.log(e));
        townServices.getAll().then(data => setTowns(data.data.data)).catch(e => console.log(e));
        setApresentation({...apresentation, show1: true});        
    }, []);

    useEffect(() => {
        console.log(areas);
    }, [areas]);

    //----------------------Function Session----------------------------------------
    const handleSearchGuide = async() => {
        setSpinner(() => [true, false]);
        //trazer cursos só dessa área
        await courseServices.getAll().then(data => {console.log('dentro'); setCourses(data.data.data)}).catch(e => console.log(e));
        
        setSpinner(() => [false, false])
        setIndex(1);
        console.log('fora');
        //procurar guias
    }

    const onSubmitHandler = (data: any) => {
        if (index === 1 && data.telephone2.length !== 0 && !(/^[0-9]{9,9}$/).test(data.telephone2)) {
            setError({ show: true, color: '', message: 'Campo Contacto 2 no Formato Incorrecto' });
            return false;
        }
        if (index === 1 && data.educatorTown.length === 0)
            data.educatorTown = towns[0].id;

        window.scrollTo(0, 0);
        if (index === 1 || index === 2 || index === 3) {
            setIndex(index + 1);
            Object.assign(signup, data);
            console.log(signup);
        }
        //reset();
    }

    const handleChange = (e: any) => {
        if (e.target.name === 'birthdate')
            setBirthdateCalc(moment().diff(e.target.value, 'years').toString()); //cálculo de idade            

        setError(new ERROR_STATE)
    } //método executado quando input muda
    const handleSubmit = () => { //método executado quando clicado no Próximo                    
        if (filesLength != 2) {
            setError({ show: true, color: '', message: 'Anexe 2 ficheiros .PDF cada um com < 2.41MB' });
            return false;
        }
        console.log(signup);
    }
    const handleSelect = () => { }

    const handleFile = async (e: any) => {
        setError(new ERROR_STATE);

        const stageHandle = (value: any) => {
            filesUploaded[e.target.name === 'scheduleBI' ? 0 : 1] = value
            setFilesLength(filesUploaded.filter(f => f != null).length); //calcula o length
        }
        try {
            if (e.target.files[0].size > 2528637 || e.target.files[0].type != 'application/pdf') {
                stageHandle(null)
                setError({ ...error, show: true, message: e.target.files[0].type != 'application/pdf' ? 'O ficheiro deve ser um PDF' : 'Tamanho do Ficheiro deve ser no máx 2.41MB' })
            } //maior que 2,41MB
            else
                stageHandle(e.target.files[0]);

            console.log(filesUploaded)
        } catch (error) {
            stageHandle(null)
            console.log(error)
        }
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
                                        <li className={`page-item`}><button className={`page-link ${index === 1 ? styles.active : ''}`}>1</button></li>
                                        <li className={`page-item`}><button className={`page-link ${index === 2 ? styles.active : ''}`}>2</button></li>
                                        <li className={`page-item`}><button className={`page-link ${index === 3 ? styles.active : ''}`}>3</button></li>
                                        <li className={`page-item`}><button className={`page-link ${index === 4 ? styles.active : ''}`}>4</button></li>
                                    </ul>
                                </nav>
                                <hr className="row-global" />
                            </>}
                            <Carousel activeIndex={index} interval={300} indicators={false} slide={false} fade controls={false}>
                                <Carousel.Item>
                                    <SpinnerSignUp visibility={!apresentation.show1}>
                                        <div className="pt-4 d-flex justify-content-center">
                                            <p>Carregando os Dados...</p>
                                        </div>
                                    </SpinnerSignUp>
                                    {apresentation.show1 && <>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h1>Áreas de Formação</h1>
                                            <div className="d-flex justify-content-end" style={{ width: '40%' }}>
                                                <Button text={spinner[0] ? (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Aguarde...</>) : 'Inscrever'}
                                                    type="submit" _class="defaultYellow" handle={handleSearchGuide} disabled={spinner[0]} />
                                            </div>
                                        </div>
                                        <div className={`mt-4 mb-4`}>
                                            <Select text="" id="cmbSexo" _options={areas} handle={handleSelect} _class="signup" />
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
                                    </>}

                                </Carousel.Item>
                                {/*------------------*Dados do Encarregado de Educação-----*/}
                                <Carousel.Item>
                                    <form onSubmit={handleSubmit1(onSubmitHandler)} className="row">

                                        {/*errors.email?.message*/}

                                        <div className="col-md-12 col-lg-6">

                                            <Input registerYup={register1} text="Nº do Bilhete" id="educatorBI" type="text" name="educatorBI" placeholder="" _class="signup" handleEvent={handleChange} maxLength={14} />

                                            <Input registerYup={register1} text="Nome Completo" type="text" name="educatorFullName" placeholder="" _class="signup" handleEvent={handleChange} />
                                            <Select registerYup={register1} text="Parentesto" id="kinship" _options={__VARIABLES__._kinship_} handle={handleSelect} _class="signup" />
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <Select registerYup={register1} text="Município" id="educatorTown" _options={towns} handle={handleSelect} _class="signup" />
                                            <Input registerYup={register1} text="Email" type="email" name="email" placeholder="" _class="signup" handleEvent={handleChange} />

                                            <p className="mb-3">Contacto(s)</p>

                                            <div className={`inputInvisible d-flex align-items-center mb-4`}>

                                                <div style={{ width: '48%' }}>

                                                    <Input registerYup={register1} text="" placeholder="Contacto" id="telephone1" type="tel" name="telephone1" _class="invisible" handleEvent={handleChange} />

                                                </div>
                                                |
                                                <div style={{ width: '48%' }}>

                                                    <Input registerYup={register1} text="" placeholder="Contacto 2 (opcional)" id="telephone2" type="tel" name="telephone2" _class="invisible" handleEvent={handleChange} />

                                                </div>
                                            </div>
                                        </div>

                                        {(Object.keys(errors1).length > 0 || error.show) && <Stack spacing={3}>
                                            <Alert status='error' className="text-center">
                                                <><AlertIcon />
                                                    {
                                                        
                                                        /*---------------------*
                                                        Melhorar este código!!!!!
                                                        -----------------*/

                                                        errors1.educatorBI?.message || errors1.educatorFullName?.message || errors1.educatorCity?.message || errors1.email?.message || errors1.telephone1?.message || errors1.telephone2?.message || error.message
                                                    }
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
                                            <Select registerYup={register2} text="Gênero" id="gender" _options={__VARIABLES__._gender_} handle={handleSelect} _class="signup" />
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <p className="">Data de Nascimento</p>
                                            <div className="d-flex justify-content-between">

                                                <InputDate maxDate={moment().subtract(14, 'years').format('YYYY-MM-DD')} minDate={moment().subtract(20, 'years').format('YYYY-MM-DD')} registerYup={register2} text="" id="birthdate" type="date" name="birthdate" _class="signup" handleEvent={handleChange} />

                                                &nbsp;&nbsp;
                                                
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <input type='text' readOnly={true} className="form-control shadow-none" style={{ height: '50px' }} value={birthdateCalc} />
                                                    &nbsp;&nbsp;<span style={{ fontSize: '12px', textAlign: 'center' }}>idade até 31 de Maio</span>
                                                </div>
                                            </div>

                                            <Select registerYup={register1} text="Município" id="town" _options={towns} handle={handleSelect} _class="signup" />
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
                                    <form onSubmit={handleSubmit3(onSubmitHandler)} className="row">
                                        <div className="col-md-12 col-lg-6">
                                            <div>
                                                <Input registerYup={register3} text="Escola de proveniência - 9ª classe (Nome ou Nº)" type="text" name="school" placeholder="" _class="signup" handleEvent={handleChange} />
                                            </div>
                                            <div>
                                                <p style={{ fontSize: '12px' }} className="text-danger text-center mb-2">* Coloque com cuidado as notas das médias das disciplinas específicas</p>
                                            </div>
                                            <div className="mt-3">
                                                <p className="mb-4">Curso Pretendido (<b>Informática</b>)</p>
                                                <hr className="row-global" />
                                                <div className="text-center d-flex justify-content-between align-items-center">
                                                    <b>1ª Opção</b>
                                                    <Select registerYup={register3} text="" id="cmbCourse1" _options={[{ id: 'Técnico de Informática', name: 'Técnico de Informática' }, { id: 'Técnico de Gestão de Sistemas Informáticos', name: 'Técnico de Gestão de Sistemas Informáticos' }]} handle={handleSelect} _class="signup" />
                                                </div>
                                                <div className="text-center d-flex justify-content-between align-items-center mt-2">
                                                    <b>2ª Opção</b>
                                                    <Select registerYup={register3} text="" id="cmbCourse2" _options={[{ id: 'Técnico de Informática', name: 'Técnico de Informática' }, { id: 'Técnico de Gestão de Sistemas Informáticos', name: 'Técnico de Gestão de Sistemas Informáticos' }]} handle={handleSelect} _class="signup" />
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
                                                            <Input registerYup={register3} text="" type="text" name="mat7" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                        <td>
                                                            <Input registerYup={register3} text="" type="text" name="fis7" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                        <td>
                                                            <Input registerYup={register3} text="" type="text" name="quim7" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>8ª</td>
                                                        <td>
                                                            <Input registerYup={register3} text="" type="text" name="mat8" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                        <td>
                                                            <Input registerYup={register3} text="" type="text" name="fis8" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                        <td>
                                                            <Input registerYup={register3} text="" type="text" name="quim8" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>9ª</td>
                                                        <td>
                                                            <Input registerYup={register3} text="" type="text" name="mat9" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                        <td>
                                                            <Input registerYup={register3} text="" type="text" name="fis9" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                        <td>
                                                            <Input registerYup={register3} text="" type="text" name="quim9" placeholder="" _class="signup" handleEvent={handleChange} />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        {(Object.keys(errors3).length > 0 || error.show) && <Stack spacing={3}>
                                            <Alert status='error' className="text-center">
                                                <><AlertIcon />
                                                    {errors3.school?.message || 'Campo deve ser uma nota entre 0 a 20'}
                                                </>
                                            </Alert>
                                        </Stack>}
                                        {ButtonChoose(index, setIndex)}
                                    </form>
                                </Carousel.Item>
                                {/*----------------------*Anexos de Documentos----------------*/}
                                <Carousel.Item>
                                    <div className="row mb-4">
                                        <div className="col-md-12 col-lg-6">
                                            <div className="">
                                                <InputFile text="Anexo de BI" id="scheduleBI" accept=".pdf" name="scheduleBI" _class="default" handleEvent={handleFile} />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <div className="">
                                                <InputFile text="Anexo de Certificado" id="scheduleCertificado" accept=".pdf" name="scheduleCertificado" _class="default" handleEvent={handleFile} />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column align-items-center justify-content-center">
                                            <FaBoxOpen className="" size="100" color="gainsboro" />
                                            <div className={styles.filesUploaded}>{filesLength}</div>
                                        </div>
                                    </div>
                                    {error.show && <Stack spacing={3}>
                                        <Alert status='error' className="text-center">
                                            <><AlertIcon />
                                                {error.message}
                                            </>
                                        </Alert>
                                    </Stack>}
                                    <div className="d-flex justify-content-between m-2">
                                        <button type="button" className="btn btn-light text-primary" onClick={() => setIndex(index - 1)}>
                                            <div className="d-flex flex-column align-items-center">Anterior<FaArrowLeft /></div>
                                        </button>
                                        <Button text={spinner ? (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Aguarde...</>) : 'Enviar'}
                                            type="submit" _class="defaultYellow" handle={handleSubmit} disabled={spinner} />
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