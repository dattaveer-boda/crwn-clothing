import React from "react";
import { connect } from "react-redux";

import MenuItem from "../menu-item/menu-item.component";
import { selectSections } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";

function Directory(props) {
  return (
    <div className="directory-menu">
      {props.sections.map((section) => (
        <MenuItem key={section.id} section={section} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sections: selectSections(state),
  };
};
export default connect(mapStateToProps)(Directory);
