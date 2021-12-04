import { useState, useRef } from 'react'

import "./Carousel.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

import Flashcard from '../flashcards/Flashcard';


export default function Carousel({ flashcards }) {
    
    const [slideIndex, setSlideIndex] = useState(0),
    inputRef = useRef();
    
    
    function prevSlide()
    {
        if (slideIndex !== 0) setSlideIndex(slideIndex - 1)

        setSlideIndex(flashcards.length)
    }

    function nextSlide()
    {
        if (slideIndex !== flashcards.length) setSlideIndex(slideIndex + 1)

        setSlideIndex(0)
    }


    return (
        <div className="carousel">
            <div className="carousel-flashcard-selector">
                <span className="carousel-text">Flashcard </span>
                <input type="number" min="1" max={`"${flashcards.length}"`} className="carousel-input"
                ref={inputRef} />
                <span className="carousel-text"> of {flashcards.length}</span>
            </div>

            <div className="carousel-main-content">
                <FontAwesomeIcon icon={faArrowAltCircleLeft} fixedWidth className="carousel-icon"
                onClick={prevSlide} />
                <Flashcard flashcard={flashcards[slideIndex]} />
                <FontAwesomeIcon icon={faArrowAltCircleRight} fixedWidth className="carousel-icon"
                onClick={nextSlide} />
            </div>
        </div>
    )
}
