import React from 'react'
import '../styles/styles.css'


const App = ({Component, pagesProps})=> {
    return (
        <div>
            <Component {...pagesProps} />
        </div>
    )
}

export default App