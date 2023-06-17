import React from 'react';

import {Picker} from '@react-native-picker/picker';

export default function Dropdown(props) {
  return (
    <Picker
      style={{fontSize: 20, color: '#000'}}
      selectedValue={props.selected}
      onValueChange={(itemValue, itemIndex) => props.onChange(itemValue)}>
      <Picker.Item key={null} label="Escolha uma moeda" value={null} />
      {props.moedas.map(item => (
        <Picker.Item key={item.key} label={item.label} value={item.value} />
      ))}
    </Picker>
  );
}
