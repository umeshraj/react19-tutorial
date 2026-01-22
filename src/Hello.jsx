import React from "react"

export const Hello = () => {
  return (
    <div id="container">
        <h1>Hello, Umesh</h1>
    </div>
  )
}

export const HelloWithoutJSX = () => {
    return React.createElement("div", {id: "container"},
        React.createElement("h1", null, "Hello, Umesh without JSX"))
}