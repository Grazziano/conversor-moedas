import React from 'react';

import {Picker} from '@react-native-picker/picker';

export default function Dropdown() {
  return (
    <Picker style={{fontSize: 20, color: '#000'}}>
      <Picker.Item key={0} label="teste" value="teste" />
    </Picker>
  );
}
