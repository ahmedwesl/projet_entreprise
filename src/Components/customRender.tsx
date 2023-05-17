import { createContext, useContext } from 'react';

const CustomRenderCtx    = createContext( null);
const CustomPropsCtx     = createContext(null);

export type PropsWithCustom<T> = React.PropsWithChildren<T> & {
    customRenderId?: string
}

/*****************************************************************************************/
/*****************************************************************************************/

export function doCustomRender<T>(props: PropsWithCustom<T>, defRender: (props: any) => JSX.Element, states?: any) {
    const   renderContext   = useContext(CustomRenderCtx);
    const   propsContext    = useContext(CustomPropsCtx);
    let     customRender    = null;
    let     fullProps       = props;

    if (props && props.customRenderId && props.customRenderId != "") {
        if (renderContext)
            customRender = renderContext(props.customRenderId);

        if (propsContext)
            fullProps = {...props, ...propsContext(props.customRenderId)}
    }

    return (
        <>
            {customRender ? customRender(fullProps, states, defRender) : defRender(fullProps)}
        </>
    )
}


 interface UseCustomizationProps {
    renderers?:  (id: string) => (props: any, states: any, defRender?: any) => JSX.Element
    props?:      (id: string) => any
}

 export function UseCustomization(props: React.PropsWithChildren<UseCustomizationProps>) {
    return (
        <>
            <CustomRenderCtx.Provider value={props.renderers}>
                <CustomPropsCtx.Provider value={props.props}>
                    {props.children}
                </CustomPropsCtx.Provider>
            </CustomRenderCtx.Provider>
        </>
    )
}