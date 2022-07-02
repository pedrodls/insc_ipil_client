import { useState } from 'react';
import { Navbar, Form, Input, Select } from './../../envs/elements';
import styles from './SignUp.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Carousel } from 'react-bootstrap';

export default function SignUp() {
    const [error, setError] = useState<object>({ show: false, message: '' });
    const [spinner, setSpinner] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);

    //testando react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => console.log(data);

    const handleChange = () => { }
    const handleSelect = () => { }
    const handleFocus = () => { }

    return (
        <>
            <Navbar />
            <div className={styles.background + " page-header header-filter"}>
                <div className={styles.container + " container"}>
                    <div className="row">
                        <div className="d-flex justify-content-center mb-4">
                            <Form _class="sign_up">
                                <Carousel activeIndex={index} interval={300} indicators={false} slide={false} fade controls={false}>
                                    <Carousel.Item>
                                        <div>
                                            <Input validate={true} text="Nome Completo" type="text" name="fullName" placeholder="" _class="signup" handleEvent={handleChange} />
                                            <Select text="Sexo" id="cmbSexo" _options={[{ id: 'M', name: 'M' }, { id: 'F', name: 'F' }]} handle={handleSelect} _class="signup" />
                                            <Input validate={true} text="Data de Nascimento" id="birthdate" type="date" name="birthdate" _class="signup" handleEvent={handleChange} handleFocus={handleFocus} />
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div>
                                            <Input text="Escola de Proveniência (9ª classe)" type="text" name="school" placeholder="" _class="signup" handleEvent={handleChange} />
                                        </div>
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
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div>
                                            <Select text="Área de Formação" id="cmbSexo" _options={[{ id: 'M', name: 'Informática' }, { id: 'F', name: 'Construção Civil' }]} handle={handleSelect} _class="signup" />
                                            <div className="mt-4 mb-4">
                                                <p>Curso</p>
                                                <hr />
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
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    </Carousel.Item>
                                </Carousel>

                                <nav className={`${styles.options} mt-4`}>
                                    <ul className="pagination">
                                        <li className={`page-item`} onClick={() => setIndex(index - 1)}>
                                            <a className="page-link"><FaArrowLeft /> Anterior</a>
                                        </li>
                                        <li className={`page-item`} onClick={() => setIndex(index + 1)}>
                                            <a className="page-link">
                                                <span>Próximo <FaArrowRight /></span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </Form>

                            Seccção de Teste o React-Hook-Form
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" className="form-control" {...register('fullName', {required: true, pattern: /^\w$/})} />
                                <input type="text" className="form-control" {...register('bi', {required: true, minLength: 14})} />
                                <input type="submit" className="btn btn-danger" />
                                {errors.fullName && <h1 className="text-dark">Nome Errado</h1>}
                                {errors.bi && <span>Bilhete</span>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}