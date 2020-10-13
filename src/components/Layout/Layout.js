import React, {Component} from "react";

import MenuToggle from "../Navigation/MenuToggle/MenuToggle";
import Drawer from "../Navigation/Drawer/Drawer";

import './Layout.scss';

class Layout extends Component {
  state = {
    menu: false
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  menuCloseHandler = () => {
    this.setState({menu: false});
  }

  render() {
    return (
      <div className="Layout">
        <Drawer isOpen={this.state.menu} onClose={this.menuCloseHandler}/>
        <MenuToggle onToggle={this.toggleMenuHandler} isOpen={this.state.menu}/>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout;