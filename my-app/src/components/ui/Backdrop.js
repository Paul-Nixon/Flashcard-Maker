import styles from "./Backdrop.module.css";

export default function Backdrop(props) {
    return (
        <div className={styles.backdrop} onClick={props.onCancel}></div>
    )
}
