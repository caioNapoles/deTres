import React from "react";

const SettingsMenu = ({
  visibility,
  highPrecision,
  togglePrecision,
  dynamicX,
  toggleDynamicX,
}) => {
  if (visibility) {
    return (
      <div>
        <h2>Settings</h2>
        <input
          type="checkbox"
          defaultChecked
          name="highPrecision"
          checked={highPrecision}
          onChange={togglePrecision}
        />
        <label for="highPrecision">High Precision</label>
        <input
          type="checkbox"
          defaultChecked
          name="dynamicX"
          checked={dynamicX}
          onChange={toggleDynamicX}
        />
        <label for="dynamicX">Dynamic X</label>
        {/* <input type="checkbox">Dynamic X adjustments</input> */}
      </div>
    );
  }
};

export default SettingsMenu;
