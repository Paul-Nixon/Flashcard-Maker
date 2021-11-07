import styles from './NewCategory.module.css';

import { useRef } from 'react';

import Card from "../ui/Card";
import CategoriesContext from "../../contexts/CategoriesContext";


export default function NewCategory() {
    
    const nameRef = useRef();
    
    
    function formHandler(event)
    {
        event.preventDefault();

        
    }
    
    
    return (
        <Card>
            <form className={styles.newCategoryForm} onSubmit={formHandler}>
                <div className="inputWrapper">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Category name" ref={nameRef}  />
                </div>

                <div className="contactFormActions">
                    <button>Submit</button>
                </div>
            </form>
        </Card>
    )
}
