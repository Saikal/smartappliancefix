import React, { Component } from 'react';

var style = {
    backgroundColor: "#ebfafa",
    borderTop: "1px solid #ebfafa",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
}

function Footer() {
    return (
        <div id="footer" style={style}>
            <h1>All rights reserved. Smart Appliance Fix</h1>
        </div>
    )
}

export default Footer