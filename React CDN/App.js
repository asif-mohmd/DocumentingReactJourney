
import React from "react"
import ReactDOM from "react-dom/client"

// normal React Element

const heading2 =  (
    <h1 className="head" tabIndex="5">
        Hello World
    </h1>
)

const number = 1000

// React Functional Component
 const HeadingComponent = () =>(
    <div className="container">
        {number}

        {heading2}

        <h1 className="heading">Function Component in React</h1>
    </div>
 )

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>)


