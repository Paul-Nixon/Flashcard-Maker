import styles from './Layout.module.css';

export default function Layout(props) {
    return (
        <div className={styles.layout}>{props.children}</div>
    )
}
