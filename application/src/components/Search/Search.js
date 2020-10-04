import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import CameraIcon from '@material-ui/icons/Camera';

import Movies from '../Movies/Movies';
import Directors from '../Directors/Directors';

import withHocs from './TabsHoc';

const TabContainer = ({ children, dir }) => (
<Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
{children}
</Typography>
);

class SimpleSearch extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => { this.setState({ value }); };
handleChangeIndex = index => { this.setState({ value: index }); };

render() {
  const { classes, theme } = this.props;
  const { value } = this.state;

  return (
    <div className={classes.root}>
      Search for branch   11111
    </div>
);
}
}

export default withHocs(SimpleSearch);
