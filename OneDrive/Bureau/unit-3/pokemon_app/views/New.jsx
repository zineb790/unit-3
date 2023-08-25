const React = require('react');

const New = (props) => {
  return(
    <div>
      <h1> New Route </h1>

      <form action="/pokemon" method="POST">
        <label>Name:</label>
        <input type="text" name="name" /><br/>
        <input type="submit" name="" value="Create a Pokemon!" />
      </form>
    </div>
  )
}
module.exports = New;