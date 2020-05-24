var React = require("react"); 
var ReactDOM = require("react-dom");
var createReactClass = require("create-react-class");

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
    }
    });

//create todo item component
var TodoItem = createReactClass({
    render: function(){
        return(
            <li>
                <div className= "todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}>X</span>
                </div>
            </li>
        );
    },
    //custom functions
    handleDelete:function(){
        this.props.onDelete(this.props.item);
    }
});
// insert component 
ReactDOM.render(<TodoComponent/>, document.getElementById("todo-wrapper"))
