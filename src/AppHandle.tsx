import { useRef, useImperativeHandle } from "react";

import Form from './Form';
import { FormRef } from "./Form";

const AppHandle:React.FC = () => {
    const formRef = useRef<FormRef>(null);

    return (
        <div>
            <Form ref={formRef} />
        </div>
    )
}
export default AppHandle;
