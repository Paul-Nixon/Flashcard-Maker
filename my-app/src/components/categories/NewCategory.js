import styles from './NewCategory.module.css';

import { useRef, useContext, useState } from 'react';

import Card from "../ui/Card";
import AuthContext from "../../contexts/AuthContext";
import CategoriesContext from "../../contexts/CategoriesContext";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";


export default function NewCategory() {
    
    const nameRef = useRef(),
    formErrorMsgRef = useRef(),
    { currentUser } = useContext(AuthContext),
    categoriesCtx = useContext(CategoriesContext),
    [modalIsRendered, setModalIsRendered] = useState(false),
    [backdropIsRendered, setBackdropIsRendered] = useState(false);
    
    let modal;
   
    function removeModalHandler()
    {
        setModalIsRendered(false);
        setBackdropIsRendered(false);
    }


    function formHandler(event)
    {
        event.preventDefault();

        if (nameRef.current.value.length !== 0)
        {
            try
            {
                categoriesCtx.addCategory(nameRef.current.value, currentUser.email);
                modal = <Modal>New category created!</Modal>;
                setModalIsRendered(true);
                setBackdropIsRendered(true);
            }
            catch (error)
            {
                modal = <Modal>There's a back-end error.</Modal>;
                setModalIsRendered(true);
                setBackdropIsRendered(true);
            }
        }
        else
        {
            modal = <Modal>The Name field cannot be empty.</Modal>;
            setModalIsRendered(true);
            setBackdropIsRendered(true);
        }
    }
    
    
    return (
        <Card>
            <form className={styles.newCategoryForm} onSubmit={formHandler}>
                <div className="formErrorMsg" ref={formErrorMsgRef}>Invalid email or password.</div>
                <div className="inputWrapper">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Category name" ref={nameRef}  />
                </div>

                <div className="contactFormActions">
                    <button>Submit</button>
                </div>
            </form>

            {modalIsRendered && modal}
            {backdropIsRendered && <Backdrop onCancel={removeModalHandler} />}
        </Card>
    )
}
