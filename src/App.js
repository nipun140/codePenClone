import React, { useEffect } from "react";
import Editor from "./components/Editor";
import { useState } from "react";

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

  useEffect(() => {
    localStorage.setItem("codePenData", JSON.stringify([html, css, js]));
  }, [html, css, js]);

  return (
    <>
      <div className="pane-container">
        <div className="pane top-pane">
          <Editor
            language="xml"
            displayTitle="HTML"
            value={html}
            onChange={setHtml}
          />
          <Editor
            language="css"
            displayTitle="CSS"
            value={css}
            onChange={setCss}
          />
          <Editor
            language="javascript"
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
