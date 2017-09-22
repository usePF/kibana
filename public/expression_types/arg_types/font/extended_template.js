import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, FormControl } from 'react-bootstrap';
//import { get } from 'lodash';
//import { set, del } from 'object-path-immutable';
//import { LabeledInput } from '../../../components/labeled_input';
import { FontPicker } from '../../../components/font_picker';
import { fontSizes } from './font_sizes';

export const extendedTemplate = (/*props*/) => {
  //const { typeInstance, onValueChange, labels, argValue } = props;
  //const chain = get(argValue, 'chain.0', {});
  //const chainArgs = get(chain, 'arguments', {});

  // TODO: Validate input

  return (
    <div>
      <div>
        <div style={{ display: 'inline-block', width: 60 }}>
          <FormControl componentClass="select" placeholder="select">
            {fontSizes.map(size => (
              <option key={ size } value={size}>{ size }</option>
            ))}
          </FormControl>
        </div>
        <FontPicker
          value="'Gill Sans', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, Helvetica, Arial, sans-serif"
          onSelect={console.log}
        />
      </div>
      <div>
        <ButtonGroup bsSize="small">
          <Button><span style={{ fontWeight: 'bold' }}>B</span></Button>
          <Button><span style={{ fontStyle: 'italic' }}>I</span></Button>
          <Button><span style={{ textDecoration: 'underline' }}>U</span></Button>
        </ButtonGroup>

        <ButtonGroup bsSize="small">
          <Button><i className="fa fa-align-left"/></Button>
          <Button><i className="fa fa-align-center"/></Button>
          <Button><i className="fa fa-align-right"/></Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

extendedTemplate.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  argValue: PropTypes.any.isRequired,
  typeInstance: PropTypes.object,
  labels: PropTypes.array.isRequired,
  renderError: PropTypes.func,
};
