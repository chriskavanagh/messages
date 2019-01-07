import React, { Component } from 'react';


const withSecretToLife = (WrappedComponent) => {
    class SecretHoc extends Component {
     
        render() {
          return (
            <WrappedComponent {...this.props} secretToLife={"I'm from HOC"} />
          )
        }
      }
      return SecretHoc;
}


export default withSecretToLife;
