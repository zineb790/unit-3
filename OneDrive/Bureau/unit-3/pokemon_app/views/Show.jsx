const React = require('react');

class Show extends React.Component {
  render() {
    const { name, img } = this.props.pokemon;
    return (
      <div>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{name}</h2>
        <img src={img} alt={name} />
        <a href="/pokemon">Back</a>
      </div>
    );
  }
}

module.exports = Show;