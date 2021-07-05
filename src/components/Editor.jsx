import React from "react";
import "codemirror/lib/codemirror.css"; //import the style sheet
import "codemirror/theme/material.css"; //import the theme css sheet
import "codemirror/mode/xml/xml"; //import the languages features for all 3
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

export default function Editor(props) {
  const { language, displayTitle, value, onChange, customStyle } = props;

  function handleChange(editor, data, value) {
    //calling the sethyml/css/js functions on App.jsx via the props
    onChange(value);
  }

  const [isExpand, setisExpand] = useState(false);

  //toggle class
  function handleClick() {
    setisExpand((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <>
      <div
        style={customStyle}
        className={`editor-container ${isExpand ? "expanded" : ""}`}
      >
        <div className="editor-title">
          <span>{displayTitle}</span>
          <button onClick={handleClick}>
            <FontAwesomeIcon icon={isExpand ? faCompressAlt : faExpandAlt} />
          </button>
        </div>
        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          className="code-mirror-wrapper"
          options={{
            lineWrapping: true,
            lint: true,
            lineNumbers: true,
            autoCloseTags: true,
            matchBrackets: true,
            extraKeys: { "Ctrl-Space": "autocomplete" },
            mode: language,
            theme: "material",
            keyMap: "sublime",
          }}
        />
      </div>
    </>
  );
}
