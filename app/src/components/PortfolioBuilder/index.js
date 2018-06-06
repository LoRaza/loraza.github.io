/**
 *NPM import
 */
import React from 'react';
import ReactDOM from 'react-dom';
/**
 * Local import
 */
import datas from './portfoliosDatas';
/*
 * Code
 */
const Test = { ...datas };
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

   imageClick = () => {
     console.log(Test);
     this.setState({
       clicked: true,
     });
   }

   render() {
     return (
       <div>
         <img src={ this.props.url } onClick={this.imageClick} />
         {
           this.state.clicked &&
           <div>You clicked me!</div>
         }
       </div>
     );
   }
}

ReactDOM.render(<MyComponent url={Test[0]} />, document.body);
/**
 * Export
 */
