import { useState, useRef } from 'react'

import "./Carousel.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Flashcard from '../flashcards/Flashcard';


export default function Carousel({ flashcards }) {
    
    const [slideIndex, setSlideIndex] = useState(0),
    inputRef = useRef();
    
    
    function prevSlide()
    {
        if (slideIndex !== 0)
        {
            setSlideIndex(slideIndex - 1);
            inputRef.current.value = slideIndex - 1;
        }

        else
        {
            setSlideIndex(flashcards.length - 1);
            inputRef.current.value = flashcards.length;
        }
    }

    function nextSlide()
    {
        if (slideIndex !== flashcards.length)
        {
            setSlideIndex(slideIndex + 1);
            inputRef.current.value = slideIndex + 1;
        }

        else
        {
            setSlideIndex(0);
            inputRef.current.value = 1;
        }

    }


    return (
        <div className="carousel">
            <div className="carousel-flashcard-selector">
                <span className="carousel-text">Flashcard </span>
                <input type="number" min="1" max={`${flashcards.length}`} className="carousel-input"
                onChange={e => setSlideIndex(e.target.value - 1)} ref={inputRef} />
                <span className="carousel-text"> of {flashcards.length}</span>
            </div>

            <div className="carousel-main-content">
                <FontAwesomeIcon icon={faArrowLeft} fixedWidth className="carousel-icon"
                onClick={prevSlide} />
                <Flashcard flashcard={flashcards[slideIndex]} />
                <FontAwesomeIcon icon={faArrowRight} fixedWidth className="carousel-icon"
                onClick={nextSlide} />
            </div>
        </div>
    )
}
