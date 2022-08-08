import React, {useState} from 'react';

const MyComponents = (props) => {
    const [textContent,setTextContent]=useState('');
    const [tabsList,setTabsList]=useState(props.tabs);

    const onClickHandler = (e,value,i) => {
        alert(value.label);
        setTextContent(value.content);
        setTabsList(tabsList.map((item,ind)=>i==ind?
        {label: item.label,
            content: item.content,
            bgColor: 'gray'}:
            {label: item.label,
                content: item.content,
                bgColor: 'white'}
        )
        );
        // console.log(tabsList);
    }

    const handleOnChange = (e)=> e.preventDefault();

    return(
        <div style={{display:"inline-block"}}>
            {
                tabsList.map((item,index) => {
                    return(
                        <button key={index} 
                        onClick={(e)=>onClickHandler(e,item,index)}
                        style={{backgroundColor: `${item.bgColor}`}}>{item.label}</button>
                    );
                })
            }
            <textarea onChange={handleOnChange} rows="4" cols="50" value={textContent} style={{display: "block"}} />

        </div>
    );
}

export default MyComponents