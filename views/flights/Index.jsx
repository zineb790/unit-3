const React = require('react');


class Index extends React.Component {
  render() {
        const { flights } = this.props;
        return (
            <div>
                <h1>List of Flights</h1>
            <ul>
              {
                flights.map((flight, i) => {
                  return (
                    <li key={i}>
                        <a href={`/flights/${i}`}>
                                    {flight.airline}
                                    </a>
                    </li>)
                })}
            
        
            </ul>
              <nav>
                        <a href="/flights/new">Create a flight</a>
                    </nav>
            </div>
        );
    }
}

module.exports = Index;