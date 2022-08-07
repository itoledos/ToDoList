import React, { useState } from 'react';
import validateColor from 'validate-color';
    
    
const MessageDisplay = (props) => {

    const newBlocks = props.message
    console.log(validateColor(newBlocks));

    return (
        <>
            <h1>Bloques</h1>
            {
                newBlocks.map((color, i) => {
                    return(
                        <div key={i} style={{height: "50px", 
                            width:"50px", 
                            background: `${color}`,
                            margin: "5px",
                            display: 'inline-block'
                            }}>
                            {color}
                        </div>
                        
                    )
                })
            }
        </>
    );
};
    
export default MessageDisplay;

