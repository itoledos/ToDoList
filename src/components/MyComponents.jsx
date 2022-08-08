import React, {useState} from 'react';

const MyComponents = (props) => {
    const [textContent,setTextContent]=useState('');

    const onClickHandler = (e,value) => {
        alert(value.label);
        setTextContent(value.content);

    }

    return(
        <div style={{display:"inline-block"}}>
            {
                props.tabs.map((item,index) => {
                    return(
                        <button key={index} onClick={(e)=>onClickHandler(e,item)}>{item.label}</button>
                    );
                })
            }
            <textarea rows="4" cols="50" value={textContent} style={{display: "block"}} />

        </div>
    );
}

export default MyComponents