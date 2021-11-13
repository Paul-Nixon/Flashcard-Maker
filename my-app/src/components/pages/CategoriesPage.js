import styles from './CategoriesPage.module.css';

import CategoryList from '../categories/CategoryList';
import useEffectOnce from "../custom_hooks/useEffectOnce";
import Category from '../categories/Category';


export default function CategoriesPage(props) {
    
    
    
    return (
        <div className={styles.categoriesPage}>
            <button className={styles.newCategoryBtn} onClick={props.renderNewCategoryPage}>Add New Category</button>
            
            <>
                <Category />
                <Category />
                <Category />
                <Category />
            </>
        </div>
    )
}
