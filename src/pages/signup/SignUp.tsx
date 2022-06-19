import React, { useState } from 'react';
import {Navbar, Form, Input, Button, Select} from './../../envs/elements';
import styles from './SignUp.module.css';
//import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';

export default function SignUp() {
    const [error, setError] = useState<object>({ show: false, message: '' });
    const [spinner, setSpinner] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);

    const handleSubmit = () => { }
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
                                    {/*<Carousel.Item>
                                    <div>
                                    <Input validate={true} text="Nº do Bilhete" type="text" name="bi" placeholder="" _class="signup" handleEvent={handleChange} maxLength={14} />
                                            <Input validate={true} text="Email do Professor" type="email" name="email" placeholder="" _class="signup" handleEvent={handleChange} />
                                            <Input validate={true} text="Contacto do Professor" type="tel" name="telephone" placeholder="" _class="signup" handleEvent={handleChange} />

                                            <Select text="Área de Formação" _class="signup" id="cmbAreaFormacao" _options={area} handle={handleSelect} />
                                            <Select text="Curso" id="cmbCurso" _class="signup" _options={course} handle={handleSelect} />
                                        </div>
                                        <div>
                                                <div className="text-center" style={{ width: '120px', height: '120px', borderRadius: '120px', border: '1px solid gainsboro', margin: '0 auto', marginBottom: '5px' }}>
                                                    image != null && <img className="fit-img-120" src={preview} />
                                                </div>
                                                <button type="button" style={{ margin: '0 auto', marginBottom: '20px' }} className="d-block btn btn-primary" onClick={() => document.getElementById('avatar').click()}>
                                                    <FaCamera title="Escolha de Foto" className="arrowBack" />
                                                </button>                                               
                                            </div>     
                                    </Carousel.Item>*/}
                                </Carousel>

                                <nav className={`${styles.options} mt-4`}>
                                    <ul className="pagination">
                                        <li className={`page-item`} onClick={() => setIndex(index - 1)}>
                                            <a className="page-link">{/*<FaArrowLeft />*/} Anterior</a>
                                        </li>
                                        <li className={`page-item`} onClick={() => setIndex(index + 1)}>
                                            <a className="page-link">
                                                <span>Próximo {/*<FaArrowRight />*/}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}