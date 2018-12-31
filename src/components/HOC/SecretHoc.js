import React, { Component } from 'react';


const withSecretToLife = (WrappedComponent) => {
    class SecretHoc extends Component {
     
        render() {
          return (
            <WrappedComponent {...this.props} secretToLife={48} />
          )
        }
      }
      return SecretHoc;
}


export default withSecretToLife;
