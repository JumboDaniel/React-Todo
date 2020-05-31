//require  
var React = require("react"); 
var createReactClass = require("create-react-class");
require("./css/addItem.css") 

var AddItem = createReactClass({
    render:function(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit} >
                <input type="text" ref="newItem" required/>
                <input type="submit" value="Add"/> 
            </form>

        );
    },
    //custom function
    handleSubmit: function(event){
        this.props.onAdd(this.refs.newItem.value)
        this.refs.newItem.value= "";
        event.preventDefault()
 
    } 
});
///export module
module.exports= AddItem;