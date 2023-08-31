const React = require('react');

const New = (props) => {
  return(
    <div>
     <h1>Create a New Flight</h1>
  <form action="/flights" method="POST"/>
  <label for="airline">Airline:</label>
  <select name="airline" id="airline">
    <option value="American">American</option>
    <option value="Southwest">Southwest</option>
    <option value="United">United</option>
  </select>
  <br/>
  <label for="flightNo">Flight Number:</label>
  <input type="number" name="flightNo" id="flightNo" min="10" max="9999" required/>
  <br/>
  <label for="departs">Departure Date and Time:</label>
  <input type="datetime-local" name="departs" id="departs" required/>
  <br/>
  <button type="submit">Create Flight</button>
<form/>
    </div>
  )
}
module.exports = New;