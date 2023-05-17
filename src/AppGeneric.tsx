// import React, { useContext } from 'react';
import Login from './Components/Login';
import {LoginFormType} from './Components/Login';
import Carte from "./Components/Carte";
import LogoutButton from './Components/LogoutButton';

function AppDemoGeneric() {
    return (
        <>

            <Login   customRenderId="" formType={LoginFormType.UserNamePwd} >
                <Carte />
                <LogoutButton customRenderId="logoutButton" />
            </Login>
            <LogoutButton />
        </>
    );
}

export default AppDemoGeneric;


