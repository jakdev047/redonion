import React from 'react';
import { FormGroup, Input } from 'reactstrap';

const InputItem = ({type,name,placeholder}) => {
  return (
    <FormGroup>
      <Input  type={type} name={name} placeholder={placeholder} />
    </FormGroup>
  );
};

export default InputItem; 