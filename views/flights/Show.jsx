const React = require('react');

const Show = (props) => {
  return (
    <div>
      <h1> flight details</h1>
        The {props.flight.airline} flight number:{props.flight.flightNo}departs on 
        {props.flight.departs}
    </div>
  )
}

module.exports = Show;