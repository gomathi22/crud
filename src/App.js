import React from 'react';  
import './App.css';
import ListItems from './listitems';

const TodoListArray = [];
class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items:TodoListArray,    // to store all inputs
      currentItem:{
        text:'',   
        text1:'',
        text2:'',
        key:'',
        key1:'',
        key2:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.handleInput1=this.handleInput1.bind(this);
    this.handleInput2=this.handleInput2.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.editItem=this.editItem.bind(this);
    console.log("items",this.state.item);
    console.log("current:", this.state.currentItem);
  }
  
  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  handleInput1(e){
    this.setState({
      currentItem:{
        text1:e.target.value,
        key1:Date.now()
      }
    })
  }
  handleInput2(e){
    this.setState({
      currentItem:{
        text2:e.target.value,
        key2:Date.now()
      }
    })
  }
  
  addItem(e){
   e.preventDefault();
   console.log("e:", e)
    const newItem = this.state.currentItem;
    console.log("new", newItem)
    console.log("addItem") 
    if(newItem.text!=="") {
      const items=[...this.state.items, newItem]
   
      this.setState({
        items,
        currentItem:{
          text:'',
          text1:'',
          text2:'',
          key:'',
          key1:'',
          key2:''
        }
      })
    }
  }

  editItem(text, key){ 
    console.log("edit")
    const items=this.state.items;
    items.map(item=>{
      if(item.key===key){
      item.text=text;
    }
    })
    this.setState({
      items
    })
  }
  deleteItem(key){
    console.log("delete")
    const filteredItems = this.state.items.filter(item=>item.key!==key);
    this.setState({
      items:filteredItems
    })
  }
  
  render(){
    console.log("state", this.state)
    const {currentItem, items} = this.state;  // means this.state.currentItem=currentItem
    return(
      <div className="todo-name">
        <header>
          <form id="todo-form">
            <input type="text" placeholder="Task Start" 
            value={currentItem.text} onChange={this.handleInput} />
            <input type="text" placeholder="Task end" 
            value={currentItem.text1} onChange={this.handleInput1} />
            <input type="text" placeholder="Priority" 
            value={currentItem.text2} onChange={this.handleInput2} />
            <button type="submit" onClick={this.addItem}>Add</button>
          </form>

        <ListItems items={items} 
       deleteItem={this.deleteItem}
       editItem={this.editItem}
        ></ListItems>
        </header>
      </div>   
    );
  }
}
  
export default TodoList;
