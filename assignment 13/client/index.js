// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'



fetch("http://127.0.0.1:5000/products")
.then(response => response.json())
.then(response => {
    response.forEach(item => {
        var node = document.createElement("li");
        var textnode = document.createTextNode(item.name);
        node.appendChild(textnode);
        document.getElementById("products").appendChild(node);
        
         })
        })

fetch("http://127.0.0.1:5000/products/fruits")
.then(response => response.json())
.then(response => {
     response.forEach(item => {
     var node = document.createElement("li");
     var textnode = document.createTextNode(item.name);
     node.appendChild(textnode);
     document.getElementById("fruList").appendChild(node);
                    
     })
     })

                    
fetch("http://127.0.0.1:5000/products/vegetables")
.then(response => response.json())
.then(response => {
    response.forEach(item => {
    var node = document.createElement("li");
    var textnode = document.createTextNode(item.name);
    node.appendChild(textnode);
    document.getElementById("vegList").appendChild(node);
                            
    })
    })

 
    // ReactDOM.render(<App />, document.getElementById('root'))                  