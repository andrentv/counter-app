import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  render() {
    console.log('Counters - Rendered');
    
    const {onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button
          onClick={onReset}
           className="btn btn-primary btn-sm m-2">Reset</button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            /* For group all properties use counter ={counter}
            set other places in children too
            value={counter.value}
            id={counter.id}
            selected={counter.selected} */
          />
        ))}
      </div>
    );
  }
}

export default Counters;
