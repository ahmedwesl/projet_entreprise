// import React from 'react';
import {useLogout}  from './Login';
import {doCustomRender, PropsWithCustom} from "./customRender";


interface LogoutButtonProps {
    label?: string
}

function LogoutButton(props: PropsWithCustom<LogoutButtonProps>) {
    const onLogout = useLogout();
    let   disabled = onLogout == null;
    let handleLogout = () => {
        if (onLogout != null)
            onLogout();
    }

    let defRender = (p: PropsWithCustom<LogoutButtonProps>) => {
        return (
            <button disabled={disabled} onClick={handleLogout}>{p.label || 'Se déconnecter'}</button>
        );
    }
    return doCustomRender(props, defRender, {disabled: disabled, handleLogout: handleLogout});
}

export default LogoutButton;
