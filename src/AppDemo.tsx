import {doCustomRender, PropsWithCustom, UseCustomization} from './Components/customRender';
import AppDemoGeneric           from "./AppGeneric";
import { useState }             from "react";
import {LoginFormProps} from "./Components/Login";
import {Waiting} from "./Components/Waiting";

let renderCustomLoginForm = (props: any, states: any) => {
    const { labelPassword, labelPasswordUserName, labelButton } = states.getLabels(props);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <form onSubmit={states.handleSubmit}>
                <div>
                    <label>
                        {labelPasswordUserName} : {''}
                        <input type="text" value={states.username} onChange={(e) => states.setUsername(e.target.value)} disabled={states.isWaiting} />
                    </label>
                </div>
                <div>
                    <label>
                        {labelPassword} : {''}
                        <input type="password" value={states.password} onChange={(e) => states.setPassword(e.target.value)} disabled={states.isWaiting} />
                    </label>
                </div>
                <button type="submit" disabled={states.islWaiting}>
                    {labelButton}
                </button>
                <Waiting isWaiting={states.isWaiting} />
                <div style={{ color: 'red' }}>{states.error}</div>
            </form>
        </div>
    );
};




let getCustomProps = function(id: string) : any {
   // if (id == "loginPage")
    //   return {formOptions: {labelPassword: "coucou from loginPage"}};
    if (id == "loginPage.Form")
        return {labelPassword: "coucou from loginPage.Form"};
    if (id == "logoutButton")
        return {label: ""}
    return null;
}
let getCustomRender = function(id: string): ((props: any, states: any, defRender?: any) => JSX.Element) {
    if (id === "loginPage.Form") {
        return renderCustomLoginForm;
    }

};
function AppDemo () {
    return (
        <UseCustomization renderers={getCustomRender} props={getCustomProps}>
            <AppDemoGeneric />
        </UseCustomization>
    );
}

export default AppDemo;

