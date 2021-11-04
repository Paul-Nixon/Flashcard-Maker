import styles from './CategoryList.module.css';

import Category from './Category';


export default function CategoryList({ categories }) {
    return (
        <div className={styles.categoriesList}>
            {categories.map(category => {
                return <Category category={category} key={category.id} />
            })}
        </div>
    )
}
