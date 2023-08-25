const React = require('react');
const DefaultLayout = require('../Default');

class Edit extends React.Component {
  render() {
    const snack = this.props.snack;
    return (
      <DefaultLayout>
        <form action={`/snacks/${snack._id}?_method=PUT`} method="POST">
          <fieldset>
            <legend>Edit {snack.name}</legend>
            <label>
              NAME:<input
                type="text"
                name="name"
                placeholder="enter snack name"
                value={snack.name}
              />
            </label>
            <label>
              COST:<input
                type="text"
                name="cost"
                placeholder="enter snack cost"
                value={snack.cost}
              />
            </label>
            <label> CALORIES:<input
              type="number"
              name="calories"
              placeholder="enter snack calories"
              value={snack.calories}
            /> </label>
          </fieldset>
          <input type="submit" value="EDIT SNACK" />
        </form>
      </DefaultLayout>
    )
  }
};

module.exports = Edit;