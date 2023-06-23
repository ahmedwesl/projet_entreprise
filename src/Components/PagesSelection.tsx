import { useState } from "react";
import "./PagesSelection.scss";
import * as React from "react";

// Définition du type de données pour une sélection de page
type PageSelection = {
    id: string;
    label: JSX.Element;
    element: JSX.Element;
}

// Définition des propriétés du composant PagesSelection
type PagesSelectionProps = {
    elems: PageSelection[];
}

// Composant principal PagesSelection
function PagesSelection(props: React.PropsWithChildren<PagesSelectionProps>) {
    // État pour stocker l'option sélectionnée
    const [selectedOption, setSelectedOption] = useState<string>("");

    // Gestionnaire d'événement lorsqu'une option est cliquée
    const handleClick = (optionId) => {
        setSelectedOption(optionId);
    };

    // Recherche de la page correspondant à l'option sélectionnée
    let page = props.elems.find((elem) => elem.id === selectedOption);

    // Si une page correspondante est trouvée, on la retourne
    if (page)
        return page.element;

    // Sinon, on affiche la liste des options de sélection de page
    return (
        <div className="pagesSelectionContainer">
            {
                props.elems.map((elem) => <PageSelectionItem key={elem.id} optionId={elem.id} label={elem.label} handleClick={handleClick} />)
            }
        </div>
    );
}

// Composant pour afficher une option de sélection de page
type PageSelectionItemProps = {
    optionId: string;
    label: JSX.Element;
    handleClick: (optionId: string) => void;
};

function PageSelectionItem(props: PageSelectionItemProps) {
    // Gestionnaire d'événement lorsqu'un bouton est cliqué
    const handleButtonClick = () => {
        props.handleClick(props.optionId);
    };

    return (
        <div className='pageSelectionItem' option-id={props.optionId}>
            <button onClick={handleButtonClick}>{props.label}</button>
        </div>
    );
}

export { PagesSelection };
