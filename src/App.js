import React, { useEffect } from "react";
import Editor from "./components/Editor";
import { useState, useRef } from "react";

function App() {
  let initialHtml, initialCss, initialJs;
  if (localStorage.getItem("codePenData") !== null) {
    initialHtml = JSON.parse(localStorage.getItem("codePenData"))[0];
    initialCss = JSON.parse(localStorage.getItem("codePenData"))[1];
    initialJs = JSON.parse(localStorage.getItem("codePenData"))[2];
  } else {
    initialHtml = "";
    initialCss = "";
    initialJs = "";
    localStorage.setItem(
      "codePenData",
      JSON.stringify([initialHtml, initialCss, initialJs])
    );
  }

  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [js, setJs] = useState(initialJs);
  const [srcDoc, setSrcDoc] = useState("");
  const [htmlDisplay, setHtmlDisplay] = useState(true);
  const [cssDisplay, setCssDisplay] = useState(true);
  const [jsDisplay, setJsDisplay] = useState(true);

  const htmlRef = useRef(true);
  const cssRef = useRef(true);
  const jsRef = useRef(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //update the ref values of html,css,js according to resize condition
  if (windowWidth >= 768) {
    htmlRef.current = true;
    cssRef.current = true;
    jsRef.current = true;
  } else {
    htmlRef.current = true;
    cssRef.current = false;
    jsRef.current = false;
  }

  //track the change in ref of html,css,js and fire dom-re-render when ref values change
  useEffect(() => {
    console.log(" ref change riggered");
    setHtmlDisplay(htmlRef.current);
    setCssDisplay(cssRef.current);
    setJsDisplay(jsRef.current);
  }, [htmlRef.current, cssRef.current, jsRef.current]);

  //window width
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //update the bottom-panel to display the the html,css,js changes after a delay of 250s
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setSrcDoc(
        `<html><head><style>${css}</style></head><body>${html}</body><script>${js}</script></html>`
      );
    }, 250);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [html, css, js]);

  //update the Local Stroge when any of these values changes
  useEffect(() => {
    localStorage.setItem("codePenData", JSON.stringify([html, css, js]));
  }, [html, css, js]);

  //toggle functions when buttons are clicked
  function toggleHtml() {
    setHtmlDisplay(true);
    setCssDisplay(false);
    setJsDisplay(false);
  }
  function toggleCss(e) {
    setHtmlDisplay(false);
    setCssDisplay(true);
    setJsDisplay(false);
  }
  function toggleJs(e) {
    setHtmlDisplay(false);
    setCssDisplay(false);
    setJsDisplay(true);
  }

  return (
    <>
      <div className="pane-container">
        <div className="pane top-pane">
          <div className="buttons">
            <button
              style={{ color: htmlDisplay ? "red" : "black" }}
              onClick={toggleHtml}
            >
              HTML
            </button>
            <button
              style={{ color: cssDisplay ? "red" : "black" }}
              onClick={toggleCss}
            >
              CSS
            </button>
            <button
              style={{ color: jsDisplay ? "red" : "black" }}
              onClick={toggleJs}
            >
              JS
            </button>
          </div>
          <Editor
            language="xml"
            customStyle={{ display: htmlDisplay ? "flex" : "none" }}
            displayTitle="HTML"
            value={html}
            onChange={setHtml}
          />
          <Editor
            language="css"
            customStyle={{ display: cssDisplay ? "flex" : "none" }}
            displayTitle="CSS"
            value={css}
            onChange={setCss}
          />
          <Editor
            language="javascript"
            customStyle={{ display: jsDisplay ? "flex" : "none" }}
            displayTitle="JS"
            value={js} //control the components
            onChange={setJs}
          />
        </div>
        <div className="pane bottom-pane">
          <iframe
            srcDoc={srcDoc}
            title="output "
            frameBorder="0"
            sandbox="allow-scripts"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default App;
