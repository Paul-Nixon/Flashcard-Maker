import styles from './Modal.module.css';

export default function Modal(props) {
    return (
        <div className={styles.modal}>{props.children}</div>
    )
}
