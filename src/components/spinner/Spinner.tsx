import styles from './Spinner.module.scss';
import __VARIABLES__ from '../../environments/variables';

export default function Spinner({ visibility = false, children = <></>}: any) {
    return (
        <div className={visibility ? styles.default : 'd-none'}>
            <span className="spinner-border spinner-border text-primary" role="status" aria-hidden="true"></span>
            {children}
        </div>
    )
}
export function SpinnerSignUp({ visibility = false, children = <></>} : any) {
    return (
        <div className={visibility ? "d-flex justify-content-center flex-column" : "d-none"}>
            <div className="d-flex justify-content-center">
                <div style={{ fontSize: '1em', width: '70px', height: '70px', color: __VARIABLES__._orange_default_btn_ }} className="spinner spinner-border" role="status"></div>
            </div>      
            {children}      
        </div>
    )
}