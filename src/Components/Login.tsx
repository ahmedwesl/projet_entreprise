import { createContext, ReactNode, useContext, useState }   from 'react';
import {Waiting}                                            from "./Waiting";
import { PropsWithCustom, doCustomRender }                  from "./customRender";
import { fromStringTable }                                  from '../Tools/stringTable'
import { checkLogin }                                       from "../Tools/login";
import "./Login.scss"
import "../images/Start_Background.jpg"








type LoginFingerPrintProps = {
    test: string;
}
export function LoginFingerPrint(props: PropsWithCustom<LoginFingerPrintProps>) {
}

/*___________________________________________________________________*/
/*___________________________________________________________________*/

export type LoginFormProps = {
    onLogin         :  () => void
    labelPassword?  :  string;
    labelUserName?  :  string;
    labelButton?    :  string;
}

export function LoginForm(props: PropsWithCustom<LoginFormProps>) {
    const [isWaiting, setIsWaiting] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        setError('');
        setIsWaiting(true);
        checkLogin(username, password).then((response) => {
            setIsWaiting(false);
            if (response === '') {
                props.onLogin();
            } else {
                setError(response);
            }
        });
    };
    let getLabels = function (props: PropsWithCustom<LoginFormProps>) {
        return {
            labelPassword: props.labelPassword || fromStringTable('LOGIN_PASSWORD_LABEL', 'Password'),
            labelPasswordUserName: props.labelUserName || fromStringTable('LOGIN_USER_LABEL', 'User'),
            labelButton: props.labelButton || fromStringTable('LOGIN_BUTTON_LABEL', 'Login')
        }
    }


    let defRender = (p: PropsWithCustom<LoginFormProps>) => {
        let {labelPassword, labelPasswordUserName, labelButton} = getLabels((p))
        return (
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>{labelPasswordUserName} </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={isWaiting}
                            className="login-input"
                        />
                    </div>
                    <div className="form-group">
                        <label>{labelPassword} </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isWaiting}
                            className="login-input"
                        />
                    </div>
                    <Waiting isWaiting={isWaiting} />
                    <div style={{ color: 'red' }}>{error}</div>
                    <button type="submit" disabled={isWaiting} className="submit-button">
                        {labelButton}
                    </button>
                </form>
            </div>

        );
    };

    return doCustomRender(props, defRender, {
        getLabels       : getLabels,
        handleSubmit    : handleSubmit,
        username        : username,
        setUsername     : setUsername,
        password        : password,
        setPassword     : setPassword,
        isWaiting       : isWaiting,
        error: error
    });
}

    /*___________________________________________________________________*/
    /*___________________________________________________________________*/

// Type du contexte qui gère la déconnexion
    type LogoutContextType = {
        handleLogout?: () => void;
    };
    const LogoutContext = createContext<LogoutContextType>({});

    export enum LoginFormType {
        UserNamePwd,
        FingerPrint
    }

// Propriétés du composant Login
    type LoginProps = {
        formType?: LoginFormType;
        formOptions?: any;
    }

// Composant Login
    export function Login(props: PropsWithCustom<LoginProps>) {
        const [isLogged, setIsLogged] = useState(false);

        const handleLogout = () => setIsLogged(false);

        const handleLogin = () => {
            setIsLogged(true);
        }

        let defRender = (p: PropsWithCustom<LoginProps>) => {

            return (
                <LogoutContext.Provider value={{ handleLogout }}>
                    {isLogged ? (
                        p.children
                    ) : (
                        <div className='login' style={{ backgroundImage: `url("../images/Start_Background.jpg")` }}>
                            <LoginForm customRenderId={`${props.customRenderId}.Form`} {...p.formOptions} onLogin={handleLogin} />
                        </div>
                    )}
                </LogoutContext.Provider>

            );
        }
        return doCustomRender(props, defRender);
    }


    /*___________________________________________________________________*/

    /*___________________________________________________________________*/




    export function useLogout() {
        const {handleLogout} = useContext(LogoutContext);
        return handleLogout || null;
    }

export default Login;


