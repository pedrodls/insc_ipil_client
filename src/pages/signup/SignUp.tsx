import { useState } from 'react';
import { Navbar, Form, Input, Select, Footer, Button } from './../../envs/elements';
import styles from './SignUp.module.scss';
import { FaArrowLeft, FaArrowRight, FaBoxOpen } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Carousel } from 'react-bootstrap';
import { schemaStage1 } from './../../envs/schemas';

//schema definition
const schemaState = [yup.object().shape({
    fatherBI: yup.string().required(),
    fatherFullName: yup.string().required(),
    fatherCity: yup.string().required(),
    fatherDistrict: yup.string().required(),
    email: yup.string().email(),
    telephone1: yup.string().min(9).max(9).required(),
    telephone2: yup.string().min(9).max(9).required()
})
];

//await schema.isValid(42);

/*const person = {
    age: -17,
    name: 'Bruno Fortunato Domingos Mateus'
}

const schema1 = yup.object().shape({
    age: yup.number().positive().integer().required(),
    name: yup.string().required()
})

console.log(schema1);
//schema1.validate(person).then(value => console.log(value)).catch(err => console.log(err));
*/

export default function SignUp() {
    const [error, setError] = useState<object>({ show: false, message: '', color: '' });
    const [spinner, setSpinner] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);

    //------------------upload elements------------------
    const [errorUpload, setErrorUpload] = useState({ state: false, color: '', message: '' })

    //testando react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaStage1) });

    const onSubmit = (data: any) => console.log(data);

    const handleChange = () => { }
    const handleSelect = () => { }
    const handleFocus = () => { }
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
                        <Form _class="sign_up">
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
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6">
                                            <Input validate={true} text={"Nº do Bilhete"} id="bilheteAluno" type="text" name="bilhete" placeholder="" _class="signup" handleEvent={handleChange} maxLength={14} />
                                            <Input validate={true} text="Nome do Encarregado de Educação" type="text" name="fullName" placeholder="" _class="signup" handleEvent={handleChange} />
                                            <Select text="Parentesto" id="cmbSexo" _options={[{ id: 'Mãe', name: 'Mãe' }, { id: 'Pai', name: 'Pai' }]} handle={handleSelect} _class="signup" />
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <Input validate={true} text="Município do Encarregado" id="birthdate" type="text" name="birthdate" _class="signup" handleEvent={handleChange} handleFocus={handleFocus} />
                                            <Input validate={true} text="Distrito do Encarregado" id="birthdate" type="text" name="birthdate" _class="signup" handleEvent={handleChange} handleFocus={handleFocus} />
                                            <Input validate={true} text="Email do Encarregado de Educação" type="email" name="email" placeholder="" _class="signup" handleEvent={handleChange} />
                                            <p className="mb-3">Contacto(s) do Encarregado de Educação</p>
                                            <div className={`inputInvisible d-flex align-items-center mb-4`}>
                                                <div style={{ width: '48%' }}>
                                                    <Input validate={true} text="" placeholder="Contacto *" id="birthdate" type="text" name="birthdate" _class="invisible" handleEvent={handleChange} handleFocus={handleFocus} />
                                                </div>
                                                |
                                                <div style={{ width: '48%' }}>
                                                    <Input validate={true} text="" placeholder="Contacto 2" id="birthdate" type="text" name="birthdate" _class="invisible" handleEvent={handleChange} handleFocus={handleFocus} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                {/*---------------------*Dados do Aluno-----------------*/}
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6">
                                            <Input validate={true} text="Nº do Bilhete" id="bilheteAluno" type="text" name="bilhete" placeholder="" _class="signup" handleEvent={handleChange} maxLength={14} />
                                            <Input validate={true} text="Nome do Aluno" type="text" name="fullName" placeholder="" _class="signup" handleEvent={handleChange} />
                                            <Select text="Sexo" id="cmbSexo" _options={[{ id: 'M', name: 'M' }, { id: 'F', name: 'F' }]} handle={handleSelect} _class="signup" />
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <p className="">Data de Nascimento</p>
                                            <div className="d-flex justify-content-between">
                                                <Input validate={true} text="" id="birthdate" type="date" name="birthdate" _class="signup" handleEvent={handleChange} handleFocus={handleFocus} />
                                                &nbsp;&nbsp;
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <Input validate={true} text="" id="birthdate" readOnly={true} type="text" name="birthdate" _class="signup" handleEvent={handleChange} handleFocus={handleFocus} />
                                                    &nbsp;&nbsp;<span style={{ fontSize: '12px', textAlign: 'center' }}>idade até 31 de Maio</span>
                                                </div>
                                            </div>

                                            <Input validate={true} text="Município do Aluno" id="birthdate" type="text" name="birthdate" _class="signup" handleEvent={handleChange} handleFocus={handleFocus} />
                                            <Input validate={true} text="Distrito do Aluno" id="birthdate" type="text" name="birthdate" _class="signup" handleEvent={handleChange} handleFocus={handleFocus} />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                {/*----------------------*Dados Acadêmicos----------------*/}
                                <Carousel.Item>
                                    <div className="row">
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
                                                    <Select text="" id="cmbSexo" _options={[{ id: 'M', name: 'Técnico de Informática' }, { id: 'F', name: 'Técnico de Gestão de Sistemas Informáticos' }]} handle={handleSelect} _class="signup" />
                                                </div>
                                                <div className="text-center d-flex justify-content-between align-items-center mt-2">
                                                    <b>2ª Opção</b>
                                                    <Select text="" id="cmbSexo" _options={[{ id: 'M', name: 'Técnico de Informática' }, { id: 'F', name: 'Técnico de Gestão de Sistemas Informáticos' }]} handle={handleSelect} _class="signup" />
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
                                    </div>
                                </Carousel.Item>
                                {/*----------------------*Anexos de Documentos----------------*/}
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6">
                                            <div className="">
                                                <Input text="Anexo de BI" type="file" id="schedule" accept=".pdf" name="schedule" _class="default" handleEvent={handleFile} />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <div className="">
                                                <Input text="Anexo de Certificado" type="file" id="schedule" accept=".pdf" name="schedule" _class="default" handleEvent={handleFile} />
                                            </div>
                                        </div>
                                        {errorUpload.state &&
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

                            {index !== 0 && <nav className={`${styles.options} mt-4`}>
                                <ul className="pagination">
                                    <li className={`page-item`} onClick={() => { window.scrollTo(0, 0); setIndex(index - 1) }}>
                                        <button className="page-link text-center">
                                            <div className="d-flex flex-column align-items-center">Anterior<FaArrowLeft /></div>
                                        </button>
                                    </li>
                                    <li className={`page-item text-center`} onClick={() => { window.scrollTo(0, 0); setIndex(index + 1) }}>
                                        <button className="page-link text-center">
                                            <div className="d-flex flex-column align-items-center">Próximo<FaArrowRight /></div>
                                        </button>
                                    </li>
                                </ul>
                            </nav>}
                        </Form>

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