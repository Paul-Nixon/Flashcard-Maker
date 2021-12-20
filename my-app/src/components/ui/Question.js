import styles from './Question.module.css';


export default function Question({ question }) {
    return (
        <div className={styles.questionWrapper}>
            <p className={styles.question}>{question.question}</p>

            <div className={styles.choices}>
                {question.options.map(answerOption => {
                    return <button className={styles.questionBtn}>{answerOption.answerText}</button>
                })}
            </div>

            <div></div>
        </div>
    )
}
