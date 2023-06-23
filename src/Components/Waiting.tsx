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

                />
            </div>
        );
    } else {
        return null;
    }
}
