import React, {useState, useEffect} from 'react';
import {RootStackParamList} from '../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../Colors';

type Navigation = NativeStackNavigationProp<RootStackParamList, 'Barcode'>;

interface Props {
  barcodeText: string;
  navigation: Navigation;
}

export default function BarcodeInput({barcodeText, navigation}: Props) {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(barcodeText);
  }, [barcodeText]);

  return (
    <>
      <Text style={styles.label}>
        Kameraya barcode okutun veya bir barcode giriniz
      </Text>
      <View style={styles.btnContainer}>
        <TextInput value={text} onChangeText={setText} style={styles.input} />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.push('SearchResult', {text: text})}>
          <Text style={styles.submitText}>SEARCH</Text>
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
    fontSize: 15,
    paddingStart: 18,
    width: '100%',
    marginBottom: 5,
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
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
    paddingVertical: 16,
    backgroundColor: Colors.darkBackground,
    borderRadius: 16,
  },
  submitText: {
    fontSize: 16,
    color: Colors.secondaryText,
  },
});
