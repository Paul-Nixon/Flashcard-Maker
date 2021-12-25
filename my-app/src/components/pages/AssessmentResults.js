import styles from './AssessmentResults.module.css';


export default function AssessmentResults({score, correctAnswers, returntoCategories}) {
    return (
        <div className={styles.assessmentResults}>
            <div className={styles.assessmentResult}>Correct Answers: </div>
            <div className={styles.assessmentResult}>Score: {score}</div>
            <button className="modal--btn modal--btn--alt" onClick={returntoCategories}>back to categories</button>
        </div>
    )
}
