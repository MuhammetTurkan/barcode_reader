import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../Colors';

interface Props {
  barcodeText: string;
}

export default function BarcodeInput({barcodeText}: Props) {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(barcodeText);
  }, [barcodeText]);

  return (
    <>
      <Text style={styles.label}>Takip no, müşteri kodu yada adı girin</Text>
      <View style={styles.btnContainer}>
        <TextInput value={text} onChangeText={setText} style={styles.input} />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>ARA</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 0,
  },
  label: {
    marginTop: 10,
    color: '#333',
    fontSize: 18,
    paddingStart: 18,
    width: '100%',
    marginBottom: 2,
  },
  input: {
    color: Colors.primaryText,
    backgroundColor: Colors.whiteBackground,
    fontSize: 17,
    width: '70%',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 18,
    borderColor: Colors.inputBorder,
    borderWidth: 1,
  },

  submitButton: {
    marginStart: 10,
    width: '20%',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: Colors.darkBackground,
    borderRadius: 16,
  },
  submitText: {
    fontSize: 19,
    color: Colors.secondaryText,
  },
});
