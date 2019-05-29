import React from 'react'

const backdrop = (props) => {
    let style = null
    if (props.active) {
        style = {
            zIndex: 100,
            backgroundColor: rgba(0,0,0,.7),
        }
    }
    return (
        <div style={style}>

        </div>
    )
}

export default backdrop
