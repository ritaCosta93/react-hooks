import React, {forwardRef, useImperativeHandle} from 'react'


export interface FormProps {
    initialData?: string;
}

 export interface FormRef{
    submit():void;
}

const Form: React.RefForwardingComponent<FormRef,FormProps> = (props,ref) => {

    function submit(){
        alert('Submit');
    }

    useImperativeHandle(ref, () =>({
        submit
    }))

    return (
        <form action="">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </form>
    )
}
export default forwardRef(Form);
