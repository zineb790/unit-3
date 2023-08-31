const React = require('react');


class Edit extends React.Component {
  render() {
    const snack = this.props.snack;
    return (
        <div>
            
             <form action={`/logs/${log._id}?_method=PUT`} method="POST">
          <legend>Edit {log.title}</legend>
            <label>
              TITLE:<input
                type="text"
                name="title"
                placeholder="enter a title"
                value={log.title}
              />
            </label>
            <label>
              ENTRY:<input
                type="text"
                name="entry"
                placeholder=" entry"
                value={log.entry}
              />
            </label>
            <label> ship Is Broken:<input
              type="checkbox"
              name="shipIsBroken"
              id="shipIsBroken"
              value={log.shipIsBroken}
                /> </label>
                
       
          <input type="submit" value="EDIT YOUR LOG" />
        </form>
      
      </div>
       
    )
  }
};

module.exports = Edit;