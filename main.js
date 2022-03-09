import React from "react"
import ReactDom from "react-dom"

console.log('main.jsx')

ReactDom.hydrate(
	<div>rootroot</div>
	, document.getElementById('root')
)