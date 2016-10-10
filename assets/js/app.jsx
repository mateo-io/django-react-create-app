import React from 'react'

class Hello extends React.Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="well col-md-8">
            <h1 className="center">Hello, world.</h1>
            <h6>Create your first react app</h6>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    )
   }
}

export default Hello
