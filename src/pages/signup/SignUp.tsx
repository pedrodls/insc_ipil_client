import { useState, useEffect } from 'react';
import { Navbar, InputFile, InputDate, Input, Select, Footer, CardSignUp, Button, SpinnerSignUp } from '../../environments/elements';
import __VARIABLES__ from '../../environments/variables';
import { ERROR_STATE, APRESENTATION_STATE } from '../../environments/states';
import styles from './SignUp.module.scss';
import { FaArrowLeft, FaArrowRight, FaBoxOpen, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Carousel } from 'react-bootstrap';
import { schemaStage1, schemaStage2, schemaStage3 } from '../../environments/schemas';
import { Alert, AlertIcon, Stack, Button as ButtonUI } from '@chakra-ui/react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
//services request
import { AreaService, TownService, CourseService, AuthService, SubjectApplyService } from '../../environments/services';
//models request
import { AreaModel, TownModel, CourseModel, SubjectApplyModel } from '../../environments/models';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
} from '@chakra-ui/react'

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
    const { onClose } = useDisclosure()
    const navigate = useNavigate();
    //
    const authServices = new AuthService();
    //instancia dos serviços
    const areaServices = new AreaService();
    const townServices = new TownService();
    const courseServices = new CourseService();
    const subjectApplyServices = new SubjectApplyService();

    const [areas, setAreas] = useState<Array<AreaModel>>([]);
    const [selected, setSelected] = useState<any>({}); //elementos selecionados
    const [towns, setTowns] = useState<Array<TownModel>>([]);
    const [courses, setCourses] = useState<Array<CourseModel>>([]);
    const [subjectApply, setSubjectApply] = useState<Array<SubjectApplyModel>>([]);

    //---------------------Declaration Session---------------------------------------------------------------
    const [spinner, setSpinner] = useState<Array<boolean>>([false, false]);
    const [index, setIndex] = useState<number>(0); //controlador do estado do formulário    
    const [error, setError] = useState(new ERROR_STATE()); //controlo de erro
    const [apresentation, setApresentation] = useState(new APRESENTATION_STATE()); //apresentação das telas
    const [signup, setSignUp] = useState({}); //varíavel responsável por guardar os dados
    const [birthdateCalc, setBirthdateCalc] = useState<string>('') //variável que guarda o cálculo da idade dele
    const [filesUploaded, setFilesUploaded] = useState([null, null]) //variável que guarda oS ficheiros submetidos
    const [filesLength, setFilesLength] = useState<number>(0) //variável que guarda o cálculo da idade dele    
    const [modal, setModal] = useState(new ERROR_STATE());
    const [notes, setNotes] = useState<Array<any>>([]);

    //configurando react-hook-form com os schemas yup
    const { register: register1, handleSubmit: handleSubmit1, formState: { errors: errors1 } } = useForm({ resolver: yupResolver(schemaStage1) });
    const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 } } = useForm({ resolver: yupResolver(schemaStage2) });
    const { register: register3, handleSubmit: handleSubmit3, formState: { errors: errors3 } } = useForm({ resolver: yupResolver(schemaStage3) });

    useEffect(() => {
        (async function () {
            await areaServices.getAll().then(data => {
                setAreas(data.data.data);
                selected.area = data.data.data.length > 0 ? data.data.data[0].id : '';
            }).catch(e => console.log(e));

            await townServices.getAll().then(data => setTowns(data.data.data)).catch(e => console.log(e));
            //pegando as disciplinas e colocando no state
            let response = await subjectApplyServices.allActive().then(data => data.data.data).catch(e => console.log(e));
            setSubjectApply(response);
            const objSa = [];
            for (let sa of response)
                objSa.push({
                    subjectApplyId: sa.id,
                    values: ['', '', '']
                })
            setNotes(objSa);

            setApresentation({ ...apresentation, show1: true });
        })();
    }, []);

    //----------------------Function Session----------------------------------------
    const handleSearchGuide = async () => {
        setSpinner(() => [true, false]);
        await courseServices.allByAreaId(selected.area).then(data => { setCourses(data.data.data) }).catch(e => console.log(e));

        setSpinner(() => [false, false])
        setIndex(1);
        //procurar guias
    }

    const onSubmitHandler = (data: any) => {
        if (index === 1 && data.telephone2.length !== 0 && !(/^[0-9]{9,9}$/).test(data.telephone2)) {
            setError({ show: true, color: '', message: 'Campo Contacto 2 no Formato Incorrecto' });
            return false;
        }
        if (index === 1 && data.educatorTownId.length === 0)
            data.educatorTownId = towns.length > 0 ? towns[0].id : '';
        if (index === 2 && data.townId.length === 0)
            data.townId = towns.length > 0 ? towns[0].id : '';
        if (index === 3) { //se as opções não estiverem de acordo com os cursos das áreas escolhidas então eles serão a primeira opção da área escolhida. No caso de selecionar uma opção e depois trocar sua área
            if (courses.map(c => c.id).indexOf(data.cmbCourse1) < 0)
                data.cmbCourse1 = courses.length === 0 ? '' : courses[0].id;
            if (courses.map(c => c.id).indexOf(data.cmbCourse2) < 0)
                data.cmbCourse2 = courses.length === 0 ? '' : courses[0].id;
            
            let op = false;
            for(let note of notes){
                //avaliando notas de cada classe
                if(isNaN(note.values[0]) || isNaN(note.values[1]) || isNaN(note.values[2]) || (+note.values[0] < 0 || +note.values[0] > 20) || (+note.values[1] < 0 || +note.values[1] > 20) || (+note.values[2] < 0 || +note.values[2] > 20 || note.values[0].trim().length === 0 || note.values[1].trim().length === 0 || note.values[2].trim().length === 0)){
                    op = true
                    break;
                }
            }
            if(op){
                setError({ show: true, color: '', message: 'Campo deve ser uma nota entre 0 a 20' });
                return false;
            }
            console.log(notes);
            data.notes = notes //adicionando notas no signup

            //schemaStage4.validate({notes: '-2'}).then(value => console.log('1 - 1', value)).catch(err => console.log('2 - 2', err));      
        }

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
    const handleNotes = (e: any, grade: number, subjectOrder: number) => {        
        notes[subjectOrder].values[grade] = e.target.value;
        setError(new ERROR_STATE)
    }

    const handleSubmit = async () => { //método executado quando clicado no Próximo                    
        if (filesLength != 2) {
            setError({ show: true, color: '', message: 'Anexe 2 ficheiros .PDF cada um com < 2.41MB' });
            return false;
        }
        setSpinner(() => [false, true]);
        const response = await authServices.signUp({ ...signup, scheduleBI: filesUploaded[0], scheduleCertificado: filesUploaded[1] }).then(data => data.data).catch(e => e.response.data);
        console.log(response);
        setSpinner(() => [false, false]);
        setModal({ message: response.message, show: true, color: response.error ? 'danger' : 'success' });
    }

    const handleSelect = (e: any) => {
        if (e.target.id === 'cmbArea')
            selected.area = e.target.value;
    }

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

                        <Modal onClose={onClose} isCentered isOpen={modal.show} motionPreset='slideInBottom'>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader className="text-center">
                                    <div className="d-flex flex-column align-items-center">
                                        {modal.color === 'success' ?
                                            <FaCheckCircle className="text-center mb-4" size="50" color={__VARIABLES__._green_default_btn_} />
                                            :
                                            <FaExclamationCircle className="text-center mb-4" size="50" color={__VARIABLES__._orange_default_btn_} />
                                        }
                                        Resultado da Inscrição
                                    </div>
                                </ModalHeader>
                                <ModalBody className="text-center">
                                    {modal.message}
                                </ModalBody>
                                <ModalFooter className="text-center">
                                    <ButtonUI colorScheme='blue' mr={3} onClick={() => { modal.color === 'danger' ? setModal({ ...modal, show: false }) : navigate('/') }}>
                                        OK
                                    </ButtonUI>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>

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
                                            <Select text="" id="cmbArea" _options={areas} handle={handleSelect} _class="signup" />
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
                                            <Select registerYup={register1} text="Município" id="educatorTownId" _options={towns} handle={handleSelect} _class="signup" />
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

                                            <Select registerYup={register2} text="Município" id="townId" _options={towns} handle={handleSelect} _class="signup" />
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
                                                <p className="mb-4">Curso Pretendido</p>
                                                <hr className="row-global" />
                                                <div className="text-center d-flex justify-content-between align-items-center">
                                                    <b>1ª Opção</b>
                                                    <Select registerYup={register3} text="" id="cmbCourse1" _options={courses} handle={handleSelect} _class="signup" />
                                                </div>
                                                <div className="text-center d-flex justify-content-between align-items-center mt-2">
                                                    <b>2ª Opção</b>
                                                    <Select registerYup={register3} text="" id="cmbCourse2" _options={courses} handle={handleSelect} _class="signup" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <table className="table table-responsible" style={{ verticalAlign: 'middle' }}>
                                                <thead className="text-center">
                                                    <tr>
                                                        <th>-</th>
                                                        {subjectApply.map((sa, indexSa) => (                                                            
                                                            <th key={indexSa}>{sa.code}</th>                                                            
                                                        ))}                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        [7, 8, 9].map((grade, index) => (
                                                            <tr key={index}>
                                                                <td>{grade}ª</td>
                                                                {subjectApply.map((sa, indexSa) => (
                                                                    <td key={grade + indexSa}>
                                                                        <Input text="" type="text" name="notes" placeholder="" _class="signup" handleEvent={(e: any) => handleNotes(e, index, indexSa)} />
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        {(Object.keys(errors3).length > 0 || error.show) && <Stack spacing={3}>
                                            <Alert status='error' className="text-center">
                                                <><AlertIcon />
                                                    {errors3.school?.message || error.message}
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
                                        <Button text={spinner[1] ? (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> A Enviar...</>) : 'Enviar'}
                                            type="submit" _class="defaultYellow" handle={handleSubmit} disabled={spinner[1]} />
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </CardSignUp>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}