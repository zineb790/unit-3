const React = require('react');

class Index extends React.Component {
    render() {
        const log = this.props.log
    return (
     
        <div>
           
            <h1>list of pirate ships</h1>
         
            
                <ul>
                    {this.props.logs.map((log, i) => (
                    <li key={i}>
                    <a href={`/logs/show ${log._id}`}>
                     The {log.title}
                    </a>
                    captained by {log.entry}.      
                   </li>))}  
            </ul> 
            
                 {/* <a href={`/logs/${log._id}/Edit`}><button>Edit</button></a>
            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
              <input type="submit" value="Delete" />
            </form> */}

             <div> <a href="/logs/new"><button>Create a New Log!</button></a>
            </div>
            </div>
                       
        
    )
  }
}

module.exports = Index;