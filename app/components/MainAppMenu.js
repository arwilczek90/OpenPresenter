/**
 * Created by awilczek on 1/22/17.
 */
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { white } from 'material-ui/styles/colors';
import React from 'react';

class MainAppMenu extends React.Component {

  navigateToProjects() {
    this.context.router.push('/editor/projects');
  }

  render() {
    return (
      <IconMenu
        {...this.props}
        iconButtonElement={<IconButton><MoreVertIcon color={white} /></IconButton>}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="Projects" onTouchTap={this.navigateToProjects.bind(this)} />
        <MenuItem primaryText="Settings" />

      </IconMenu>
    );
  }

}


MainAppMenu.contextTypes = {
  router: React.PropTypes.object
};

export default MainAppMenu;
