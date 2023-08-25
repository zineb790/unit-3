const React = require('react');

const myStyle = {
color: '#ffffff',
backgroundColor: '#000000',
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
class Index extends React.Component {
    render() {
        return (
            <div>
                <div style={myStyle}><h1>See All The Pokemon!</h1></div>
                    <ul>
                    {this.props.pokemon?.map((pok, i) => {
                   return (
                   <li key={i}>{capitalizeFirstLetter(pok.name)}</li>)})}
                    </ul>
              
            </div>
        );
    }
}

module.exports = Index;