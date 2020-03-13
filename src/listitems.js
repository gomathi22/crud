import React from 'react';
import './listitems.css';
function ListItems(props){
    const items = props.items;
    const listItems=items.map(item=>  

        {   return <div className="list"> 
                        <p><input type="text" id={item.key} value={item.text}
                        onChange={
                            (e) => {props.editItem(e.target.value, item.key) 
                        }
                        }
                        />
                        <input type="text" id={item.key1} value={item.text1}
                        onChange={
                            (e) => {props.editItem(e.target.value, item.key1) 
                        }
                        }
                        />
                        <input type="text" id={item.key2} value={item.text2}
                        onChange={
                            (e) => {props.editItem(e.target.value, item.key2) 
                        }
                        }
                        />
                        <button onClick={() =>props.deleteItem(item.key)}>Delete</button>
                        </p>
            </div>
        }
        )
    return(
    <div>{listItems}</div>
    )
}
export default ListItems;