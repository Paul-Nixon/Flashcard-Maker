import styles from './Assessment.module.css'

import Carousel from '../layout/Carousel';


export default function Quiz({ questions }) {
    
    
    
    return (
        <div className={styles.assessment}>
            <Carousel flashcards={questions} />
        </div>
    )
}
