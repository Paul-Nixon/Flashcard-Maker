import styles from './CategoryList.module.css';

import Category from './Category';


export default function CategoryList({ categories }) {
    return (
        <div className={styles.categoriesList}>
            {categories.map(category => {
                return <Category name={category.name} key={category.id} />
            })}
        </div>
    )
}
