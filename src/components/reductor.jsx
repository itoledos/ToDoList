import { useReducer } from "react";

const initialState = {
    firstName: {
        value:'',
        error: null
    },
    lastName: {
        value:'',
        error: null
    },
    email: {
        value:'',
        error: null
    }
};

function reducer(state,action) {
    return(
        {
            ...state,[action.type]: action.payload 
        }
    )
};



export default () => {
    const [state,dispatch] = useReducer(reducer, initialState);
    
    function handleChange(e) {
        const {name, value} = e.target;
        dispatch({
            type: name,
            payload: {value: value, error: validateEmailTyping(value)}
        });
        if (validateEmailTyping(value)){
            return
        }
    }
    // muestra mensale de correo inválido mientras se escribe
    function validateEmailTyping(value) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            return(1)
            }
        return (null)
    }
// muestra mensaje de error al clickear botón
    function validateEmail(state,e) {
        e.preventDefault();
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email.value)) {
            return (
                state.email.error=1
            )
            }
        alert("You have entered an invalid email address!")
        console.log(state.email);
        console.log(state.firstName);
        return (
            state.email.value=null)
    }

    return(
        <div>
            {/* {JSON.stringify(state)} */}
             <form>
                <div>
                    <label>
                        <span>First Name: </span>{' '}
                        <input name='firstName' value={state.name} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Second Name: </span>{' '}
                        <input name='lastName' value={state.name} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Email: </span>{' '}
                        <input name='email' value={state.name} onChange={handleChange} />
                        {state.email.error===null&&(
                            <p className="error">Ingrese un email válido</p>
                        )}
                    </label>
                </div>
                <button onClick={(e)=>validateEmail(state,e)}>Submit</button>
            </form>
        </div>
    )
}