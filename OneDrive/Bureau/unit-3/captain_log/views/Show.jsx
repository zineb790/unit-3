const React = require('react');


class Show extends React.Component {
  render() {
    const log= this.props.log
    return (
     
        <div>
          
            <h2>
              the ship { log.title } captained by {log.entry}  is { log.shipIsBroken }!
            </h2>
            <a href="/logs/">back</a>
            
        </div>
      
    )
  }
}

module.exports = Show;