import React, { useState } from 'react';

function ToDoList() {
    const [tasks,setTasks] = useState([]);
    const [text,setText] = useState('');
    const [selection,setSelection] = useState(false);
 
    function handleSubmit(event) {
        event.preventDefault();
        if (text==''){
            alert('Debe ingresar texto');
        } else {
            setTasks(
                [...tasks,
                    {
                        task: text,
                        textDecoration: 'none',
                        checkbox: false
                    }
                ]
            );
        }
    }

    function handleTextChange(e) {
        setText(e.target.value)
    }

    function handleDelete(e,i) {
        setTasks(
            tasks.filter((item,idx) => i!=idx)
        )
    }

    function handleCheckbox(e,i) {
        setTasks(tasks.map((item,idx)=>{
            if ((i==idx)&&(item.checkbox==false)) {
                return(
                    {
                        task: item.task,
                        textDecoration: 'line-through',
                        checkbox: true
                    }
                )
            }
            else if((i==idx)&&(item.checkbox==true)) {
                return(
                    {
                        task: item.task,
                        textDecoration: 'none',
                        checkbox: false
                    }
                )
            }
            else {
                return(
                    {
                        task: item.task,
                        textDecoration: item.textDecoration,
                        checkbox: item.checkbox
                    }
                )
            }
        })
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{display: 'block'}}>
                <textarea onChange={handleTextChange} rows='4' cols='60' placeholder='Ingresa nueva tarea'></textarea>
                <button>Add</button>
            </form>
            {tasks.map((item,index)=>{
                return(
                    <div key={index}>
                        <div style={{textDecoration: `${item.textDecoration}`}} >{item.task}</div>
                        <input type='checkbox' checked={item.checkbox} onChange={(e)=>handleCheckbox(e,index)}/>
                        <button onClick={(e)=>handleDelete(e,index)}>Delete</button>
                    </div>
                )

            })}

        </div>
    );
}


export default ToDoList
