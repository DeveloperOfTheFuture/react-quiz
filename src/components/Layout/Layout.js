import React from "react";

import './Layout.scss';

const Layout = (props) => {
  return (
    <div className="Layout">

      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;