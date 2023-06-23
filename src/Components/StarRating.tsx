import { useState } from "react";
import "./StarRating.scss"

// Composant pour afficher la notation par étoiles
function Rating({ totalStars }) {
    // Variables d'état pour la notation actuelle et l'élément survolé
    const [rating, setRating]               = useState(0);
    const [hoveredItem, setHoveredItem]     = useState(0);

    // Gestionnaire d'événement lorsqu'un élément est cliqué
    const handleItemClick = (indiceItem: number) => {
        if (rating === indiceItem + 1) {
            // Si l'élément cliqué est déjà rempli, on le vide ainsi que tous les éléments précédents
            setRating(0);
        } else {
            // Sinon, on remplit l'élément cliqué et tous les éléments précédents
            setRating(indiceItem + 1);
        }
        setHoveredItem(0); // On réinitialise également l'élément survolé
    };

    // Gestionnaire d'événement lorsqu'un élément est survolé
    const handleItemHover = (indiceItem) => {
        setHoveredItem(indiceItem + 1);
    };

    // Gestionnaire d'événement lorsque la souris quitte un élément
    const handleItemLeave = () => {
        setHoveredItem(0);
    };

    return (
        <div>
            {/* Génère un tableau d'éléments de notation en fonction du nombre total d'étoiles */}
            {Array.from({ length: totalStars }, (_, i) => (
                <RatingItem
                    key={i}
                    filled={i < rating || i < hoveredItem}
                    onItemClick={() => handleItemClick(i)}
                    onItemHover={() => handleItemHover(i)}
                    onItemLeave={handleItemLeave}
                />
            ))}
        </div>
    );
}

const RatingItem = ({ filled, onItemClick, onItemHover, onItemLeave }) => {

    return (
        <span
            className={`rating-item ${filled ? "filled" : ""}`}
            onClick={onItemClick}
            onMouseEnter={onItemHover}
            onMouseLeave={onItemLeave}
        >
      {filled === filled ? "★" : "☆"}
    </span>
    );
};


export default Rating;
