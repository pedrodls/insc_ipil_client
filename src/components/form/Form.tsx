import styles from './Form.module.scss';

export default function Form({ children, _class=""} : any) { /** */

    function submit(e: any) {
        e.preventDefault();
    }

    return (
        <form onSubmit={submit} className={styles[_class]}>
            {children}
        </form>
    )
}