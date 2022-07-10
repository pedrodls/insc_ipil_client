import styles from './Spinner.module.scss';

export default function Spinner({text="", visibility = false}: any){
    return (
        <div className={visibility ? styles.default : 'd-none'}>
            <span className="spinner-border spinner-border text-primary" role="status" aria-hidden="true"></span>
            {text}
        </div>
    )
}