import React from 'react';


class SimpleSearch extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => { this.setState({ value }); };

render() {
  const { classes} = this.props;
  const { value } = this.state;

  return (
    <div className={classes.root}>
      Search for branch   11111
    </div>
);
}
}

export default withHocs(SimpleSearch);
