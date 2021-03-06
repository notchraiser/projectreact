import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import "./Style.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment = () => {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => console.log("callback value : " + this.state.count)
    // );
    this.setState(prevState => ({
            count: prevState.count + 1
        }), () => console.log("callback value : " + this.state.count)
    )
    // this.setState(prevState => {
    //     return {
    //         count: prevState.count + 1
    //     }
    // })
    // this.setState((prevState, props) => ({
    //         count: prevState.count + 1
    //     }), () => console.log("callback value : " + this.state.count)
    // )
    console.log("synochronous value : " + this.state.count);
  }

  incrementFive() {
      for (let i = 1; i<=5; i++) {
        this.increment();
      }
  }
        
  render() {
    return (
      <div className="Counter">
        <h3>Counter - from class, setState is asynchronous, so use callback. Also use prev state as in incrementFive.</h3>
        <p>You have clicked {this.state.count} times</p>
        <Button variant="primary" onClick={this.increment}>Increment</Button>{' '}
        <Button variant="primary" onClick={() => this.setState({ count: this.state.count - 1 })}>Decrement</Button>{' '}
        <Button variant="primary" onClick={() => this.incrementFive()}>IncrementFive</Button>{' '}
      </div>
    );
  }
}

export default Counter;
