import React, {Component} from 'react';

class Userinput extends Component {

  onTextAreaChange = (event) => {
      // console.log(event.target.value)
      this.props.handleInput(event.target.value);
  };

  render(){
      return(
      <div>
        <input type="text" onChange={this.onTextAreaChange}/>
      </div>
    )   
  }
}
export default Userinput;
