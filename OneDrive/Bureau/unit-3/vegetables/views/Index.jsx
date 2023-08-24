 const React = require('react');

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Vegetables Index Page</h1>
        <ul>
          {
            this.props.vegetables?.map((vegetable, i) => {
              return (
                <li key={i}>
                  The { vegetable.name } is { vegetable.color } and { vegetable.readyToEat ? 'It is ready to eat!' : 'It is not ready to eat!' }
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Index