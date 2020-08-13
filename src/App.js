import React, { Component } from 'react'
import TodoInput from './Component/TodoInput'
import Todolist from './Component/Todolist'
import 'bootstrap/dist/css/bootstrap.min.css'
import {v4 as uuid } from 'uuid'

export class App extends Component {

  state = {
    items:[],
    id:uuid(),
    item:"",
    editItem:false
  }

  handleChange = (e) =>{
    this.setState({
      item:e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    const newItem = {
      id: this.state.id,
      title:this.state.item
    }

    //console.log(newItem)

    const updatedItems = [...this.state.items, newItem];
    
    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    })
  }

  clearList = () =>{
    this.setState({
      items:[]
    })
  }

  deleteEach = (id) =>{
    const filteredItems = this.state.items.filter(item =>
      item.id !== id)
      this.setState({
        items:filteredItems
      })
  }

  editItem = (id) => {
    const filteredItems = this.state.items.filter(item =>
      item.id !== id)

    const selectedItem = this.state.items.find(item => item.id ===id)

    console.log(selectedItem)
      this.setState({
        items:filteredItems,
        item:selectedItem.title,
        editItem:true,
        id:id
})

  }
  
  render() {
    return (
     <div>
        <div className="container mt-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
          <Todolist items={this.state.items} clearList={this.clearList} deleteEach={this.deleteEach} editItem={this.editItem}/>
          </div>
        </div>
      </div>
     </div>
     );
  }
}

export default App
