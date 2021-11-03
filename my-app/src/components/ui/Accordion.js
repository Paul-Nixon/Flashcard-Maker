import './Accordion.css';

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


export default function Accordion(props) {
    return (
        <div className="accordion">
            <button className="accordionBtn">
                <h2 className="accordionTitle">Title</h2>
                <FontAwesomeIcon icon={faChevronRight} className="accordionChevron" />
            </button>

            <div className="accordionContent">
                <button>View Flashcards</button>
                <button>Add New Flashcard</button>
            </div>
        </div>
    )
}
