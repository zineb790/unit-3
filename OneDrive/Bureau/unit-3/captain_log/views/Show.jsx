const React = require('react');


class Show extends React.Component {
  render() {
    const snack = this.props.log
    return (
     
        <div>
          
            <h2>
              the ship { log.title } captained by {`$${log.entry}`}  is { log.shipIsBroken }!
            </h2>
            
        </div>
      
    )
  }
}

module.exports = Show;