import styles from './CategoryList.module.css';

import Category from './Category';
import { AuthProvider } from '../../contexts/AuthContext';
import { CategoriesProvider } from '../../contexts/CategoriesContext';


export default function CategoryList({ categories }) {
    

    return (
        <ul className={styles.categoriesList}>
            {categories.map(category => {
                return <AuthProvider>
                    <CategoriesProvider><Category name={category.name} key={category.id} /></CategoriesProvider>
                </AuthProvider>
            })}
        </ul>
    )
}
