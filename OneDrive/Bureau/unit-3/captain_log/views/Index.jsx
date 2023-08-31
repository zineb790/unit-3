const React = require('react');

class Index extends React.Component {
  render() {
    return (
     
        <div>
           
            <h1>list of pirate ships</h1>
         
          {
            <ul>
        {this.props.logs.map((log, i) => (
            <li key={i}>
               The {log.title} captained by {log.entry}
            </li>
        ))}
      </ul>
            }
             <div> <a href="/logs/new"><button>Create a New Log!</button></a>
            </div>
            
        </div>
    )
  }
}

module.exports = Index;