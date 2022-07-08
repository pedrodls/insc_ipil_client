import styles from './Select.module.scss';

export default function Select({ registerYup = () => {}, defaultSelect = 0, text = "", id = "", _options = [], handle = () => { }, _class = "" }: any) {
    return (
        <>
            {text && <label htmlFor={id}>{text}</label>}
            <select {...registerYup(id)} defaultValue={defaultSelect} id={id} className={`${styles.select} ${styles[_class]} form-select shadow-none`} onChange={handle}>
                {
                    _options.length && _options.map((option: any, index: number) => (
                        <option key={index} value={option.id}>{option.name}</option>
                    ))
                }
            </select>
        </>
    )
}