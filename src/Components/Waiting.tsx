// import React from "react";

type WaitingProps = {
    isWaiting: boolean;
};

export function Waiting(props: WaitingProps) {
    if (props.isWaiting) {
        return (
            <div>
                <p>Chargement en cours...</p>
                <img
                    src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
                    alt="Loading"
                />
            </div>
        );
    } else {
        return null;
    }
}
