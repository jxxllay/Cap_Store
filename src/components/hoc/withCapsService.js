import React from 'react';
import { CapsServiceConsumer } from '../caps-context';


const withCapsService = (Wrapped) => {
  return (props) => {
    return (
      <CapsServiceConsumer>
        {
          (capsService) => {
            return (<Wrapped {...props}
                     capsService={capsService}/>);
          }
        }
      </CapsServiceConsumer>
    );
  };
};


export default withCapsService;