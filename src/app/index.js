//require
var React = require("react"); 
var ReactDOM = require("react-dom");
var createReactClass = require("create-react-class");
require("./css/index.css");
 

//Required Module  
let TodoItem = require("./todoitem") ;
let AddItem = require("./appitem");


//Create component
var TodoComponent = createReactClass({ 
    getInitialState: function(){
        return{  
            todos: ['clean','wash','bathe','buy soaps ']
        } 
    },

    render:function(){
        var todos = this.state.todos;
        todos= todos.map(function(item,index){
            return(
                <TodoItem item= {item} key={index} onDelete= {this.onDelete}/>
            );
        }.bind(this));

        return(
        <div id="todo-list">
            <p onClick={this.clicked}>Live, Love</p> 
            <ul>
                {todos}
            </ul>
             
            <AddItem onAdd= {this.onAdd}/>
        </div>
        ); 
    },///render

    //Custom functions
    onDelete:function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item!= val; 
        });
        this.setState({ 
            todos: updatedTodos
        });   
    }, 
    onAdd:function (item) {
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos:updatedTodos
        })
    } 
    });


// insert component 
ReactDOM.render(<TodoComponent/>, document.getElementById("todo-wrapper"))
