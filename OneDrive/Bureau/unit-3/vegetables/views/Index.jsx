 const React = require('react');
const Index = (props) => {


  return (
    <div>
      <h1> Index Route </h1>


      <a href="/vegetables/new">Create a New Vegetable!</a>


      <ul>
        {
          props.vegetables.map((vegetable, index) => {
            return (
              <li key={index}>
                The <a href={`/vegetables/${index}`}>{vegetable.name}</a> is {vegetable.color} {vegetable.readyToEat ? " It's ready to eat!" : " It's not ready to eat!"}
              </li>
            )
          })
        }
      </ul>


    </div>
  )


}


module.exports = Index
