/**
 * Created by awilczek on 1/22/17.
 */
import AppBar from 'material-ui/AppBar';
import React from 'react';
import MainAppMenu from './MainAppMenu';

class PageWrapper extends React.Component {

  render() {
    return (
      <div>
        <AppBar className="AppBar" showMenuIconButton={false} title="OpenPresenter" iconElementRight={<MainAppMenu />} />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

PageWrapper.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default PageWrapper;
