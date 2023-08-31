const React = require('react');
const DefaultLayout = require('./layout/Default');

class Show extends React.Component {
  render() {
    const  fruit  = this.props;
    return (
      <DefaultLayout title="Fruits Show Page">
        
            <h3>The {fruit.name} is {fruit.color} and {fruit.readyToEat ? 'It is ready to eat!' : 'It is not ready to eat!'}</h3>
      
      </DefaultLayout>
    )
  }
}

module.exports = Show