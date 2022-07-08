import styles from './Form.module.scss';

export default function Form({ children, _class="", handleSubmitYup, onSubmitHandlerYup, useYup = false} : any) { /** */

    function submit(e: any) {
        e.preventDefault();
    }

    return (
        <form onSubmit={useYup ? handleSubmitYup(onSubmitHandlerYup) : submit} className={styles[_class]}>
            {children}
        </form>
    )
}