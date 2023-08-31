const React = require('react');

class New extends React.Component {
  render() {
      return (
          <div>
              <h1>NEW ENTRY PAGE</h1>
     
        <form action="/logs" method="POST">

            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" /><br></br><br></br>

             <label htmlFor="entry">Entry:</label>
                  <textarea id="entry" name="entry"></textarea>
                  <br></br><br></br>
            
             <label htmlFor="shipIsBroken">Ship is Broken:</label>
                  <input type="checkbox" id="shipIsBroken" name="shipIsBroken" value={true}/>
                  <br></br><br></br>
                  
            
            <input type="submit" value="Submit" />
            
        </form>
     
          </div>
        
    )
  }
}

module.exports = New;