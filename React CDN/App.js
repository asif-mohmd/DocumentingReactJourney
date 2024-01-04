
import React from "react"
import ReactDOM from "react-dom/client"

// normal React Element

const heading = (
    <h1 className="head" tabIndex="5">
        Hello World
    </h1>
)

// React Functional Component
 const HeadingComponent = () =>(
    <h1 className="heading">Function Component in React</h1>
 )

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)


