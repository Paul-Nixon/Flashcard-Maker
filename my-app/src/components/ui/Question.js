import styles from './Question.module.css';



export default function Question({ question }) {
    return (
        <div className={styles.questionWrapper}>
            <p className={styles.question}>{question.question}</p>

            <div className={styles.choices}>
                <div className={styles.choice}>
                    <input type="radio" id={`${question.answer}`} name="choice" value={`${question.answer}`} />
                    <label htmlFor={`${question.answer}`}>{question.answer}</label>
                </div>

                {question.options.map(option => {
                    return <div className={styles.choice}>
                        <input type="radio" id={`${option}`} name="choice" value={`${option}`} />
                        <label htmlFor={`${option}`}>{option}</label>
                    </div>
                })}
            </div>
        </div>
    )
}
