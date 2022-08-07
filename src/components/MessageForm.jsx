import React, { useState } from 'react';
import validateColor from 'validate-color';
    
    
const MessageForm = (props) => {
    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // qué debemos hacer con el mensaje?
        console.log(e);
        
        props.onNewColor( color );
        console.log(color)
    };

    const invalido = (e) => {
        e.preventDefault();
        alert('Color inválido')
    }
    
    return (
        <form onSubmit={(e) => validateColor(color)?handleSubmit(e):invalido(e) }>
            <h1>Color</h1>
            <textarea 
                rows="1"
                cols="50"
                placeholder="Enter your message here"
                onChange={ (e) => 
                    setColor(e.target.value)
                }
                value={ color }
            ></textarea>
            <input type="submit" value="Add Color Block" />
        </form>
    );
};
    
export default MessageForm;
