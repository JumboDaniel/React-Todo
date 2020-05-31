//require  
var React = require("react"); 
var createReactClass = require("create-react-class");
require( "./css/todoItem.css")

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
        this.props.onDelete(this.props.item );
 
    }
});
//export module
module.exports= TodoItem;