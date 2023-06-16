import React from 'react';

import {Picker} from '@react-native-picker/picker';

export default function Dropdown(props) {
  return (
    <Picker style={{fontSize: 20, color: '#000'}}>
      {props.moedas.map(item => (
        <Picker.Item key={item.key} label={item.label} value={item.value} />
      ))}
    </Picker>
  );
}
