import Login from './Components/Login';
import {LoginFormType} from './Components/Login';
import ShowPages from "./Pages/PageSelector";
import LogoutButton from './Components/LogoutButton';


function AppDemoGeneric() {
    return (
        <>
            <Login customRenderId="" formType={LoginFormType.UserNamePwd} >
                <ShowPages/>
                <LogoutButton customRenderId="logoutButton" />
            </Login>
        </>
    );
}

export default AppDemoGeneric;


