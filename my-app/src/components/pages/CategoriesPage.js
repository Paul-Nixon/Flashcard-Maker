import { useContext } from 'react';

import styles from './CategoriesPage.module.css';

import CategoryList from '../categories/CategoryList';
import AuthContext from '../../contexts/AuthContext';
import CategoriesContext from '../../contexts/CategoriesContext';


export default function CategoriesPage(props) {
    
    const { currentUser } = useContext(AuthContext),
    categoriesCtx = useContext(CategoriesContext);

    categoriesCtx.fetchAllCategories(currentUser.email);
    
    return (
        <div className={styles.categoriesPage}>
            <button className={styles.newCategoryBtn} onClick={props.renderNewCategoryPage}>Add New Category</button>
            
            <CategoryList categories={categoriesCtx.userCategories} />
        </div>
    )
}
