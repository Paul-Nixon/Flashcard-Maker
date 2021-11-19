import styles from './NewCategory.module.css';

import { useRef, useContext, useState } from 'react';

import Card from "../ui/Card";
import AuthContext from "../../contexts/AuthContext";
import CategoriesContext from "../../contexts/CategoriesContext";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";


export default function NewCategory() {
    
    const nameRef = useRef(),
    { currentUser } = useContext(AuthContext),
    categoriesCtx = useContext(CategoriesContext),
    [modalIsRendered, setModalIsRendered] = useState(false),
    [backdropIsRendered, setBackdropIsRendered] = useState(false),
    [modal, setModal] = useState(<Modal />);
    
   
    function removeModalHandler()
    {
        setModalIsRendered(false);
        setBackdropIsRendered(false);
    }


    async function formHandler(event)
    {
        event.preventDefault();

        if (nameRef.current.value.length !== 0)
        {
            try
            {
                categoriesCtx.addCategory(nameRef.current.value, currentUser.email);
                setModal(<Modal>
                    <span class="close" onClick={removeModalHandler}>&times;</span>
                    New category created!
                </Modal>);
                setModalIsRendered(true);
                setBackdropIsRendered(true);
                event.target.reset();
            }
            catch (error)
            {
                setModal(<Modal>
                    <span class="close" onClick={removeModalHandler}>&times;</span>
                    There's a back-end error.
                </Modal>);
                setModalIsRendered(true);
                setBackdropIsRendered(true);
            }
        }
        else
        {
            setModal(<Modal>
                <span class="close" onClick={removeModalHandler}>&times;</span>
                The name field cannot be empty.
            </Modal>);
            setModalIsRendered(true);
            setBackdropIsRendered(true);
        }
    }
    
    
    return (
        <div className={styles.categoryFormWrapper}>
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

                {modalIsRendered && modal}
                {backdropIsRendered && <Backdrop onCancel={removeModalHandler} />}
            </Card>
        </div>
    )
}
