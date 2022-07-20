import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { FaKey, FaEnvelope } from 'react-icons/fa';
import { Form, Input, Button, Footer } from '../../environments/elements';
import { LoginModel } from '../../environments/models';
import { userAuthAccount } from '../../ProtectedRoutes';
import { AuthService } from '../../environments/services';

export default function Login() {

    const [error, setError] = useState({ show: false, message: '' });
    const [spinner, setSpinner] = useState(false);

    let navigate = useNavigate()

    useEffect(() => {

        if (userAuthAccount())
            navigate('/dashboard')

        window.scroll(0, 0)

    }, [0])

    const authService = new AuthService()

    let [
        state = {
            data: new LoginModel()
        },
        setState
    ] = useState<any>()


    let handleSubmit = async (e: any) => {

        e.preventDefault()

        if (state.data.password && state.data.email) {

            setError({ message: '', show: false })

            setSpinner(true)

            await authService.authenticate(state.data).then(data => {

                setError({ message: '', show: false })

                setSpinner(false)

            }).catch((e) => {

                if (e.response && e.response.data)
                    setError({message: e.response.data.message, show: true})
                else
                    setError({ message: 'Erro no servidor', show: true })

                setSpinner(false)

            });


        } else
            setError({ message: 'Campo email ou password vazio', show: true })

    }

    let handleChange = (e: any) => {

        let data = { ...state.data };

        let { name, value } = e.target

        data[name] = value;

        setState({ data: data })

    }

    return (
        <>
            <div className={styles.background + " page-header header-filter"}>
                <div className={styles.container + " container"}>
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <Form _class="login">
                                <h1 className="pt-2 text-dark">Faça o Login</h1>
                                {error.show && <p className='text-danger text-center'>{error.message}</p>}
                                <div className={`inputShadow d-flex align-items-center mb-4`}>
                                    <div style={{ padding: '0 8px' }}><FaEnvelope color="8E959B" /></div>
                                    <div style={{ width: '86%' }}><Input text="" type="email" name="email" placeholder="Insira seu Email" _class="invisible" required={true} handleEvent={handleChange} /></div>
                                </div>
                                <div className={`inputShadow d-flex align-items-center mb-4`}>
                                    <div style={{ padding: '0 6px' }}><FaKey color="8E959B" /></div>
                                    <div style={{ width: '86%' }}><Input text="" type="password" name="password" placeholder="Insira sua Palavra-Passe" _class="invisible" required={true} handleEvent={handleChange} /></div>
                                </div>
                                <Button text={spinner ? (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Aguarde...</>) : 'Entrar'}
                                    type="submit" _class="defaultDanger" handle={handleSubmit} disabled={spinner} />
                                <Link to="/" className={`${styles.back} btn text-danger text-center mt-2`}>Voltar</Link>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}