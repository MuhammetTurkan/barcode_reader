import React, {useState, useEffect} from 'react';
import {RootStackParamList} from '../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import Colors from '../Colors';
import BarcodeInput from '../common/BarcodeInput';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

type Navigation = NativeStackNavigationProp<
  RootStackParamList,
  'Barcode',
  undefined
>;

interface Props {
  navigation: Navigation;
}

export default function BarcodeScreen({navigation}: Props) {
  const [isTrue, setTrue] = useState(false);
  const [text, setText] = useState('');

  return (
    <View style={styles.headContainer}>
      <View style={styles.barcodeBox}>
        {isTrue ? (
          <QRCodeScanner
            cameraProps={{captureAudio: false}}
            onRead={({data}) => {
              setText(data);
              setTrue(!isTrue);
              ToastAndroid.showWithGravity(
                'Tarama gerçekleşti...',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              );
            }}
            flashMode={RNCamera.Constants.FlashMode.auto}
          />
        ) : (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => setTrue(!isTrue)}>
            <Text style={styles.buttonText}>Open Camera</Text>
          </TouchableOpacity>
        )}
      </View>
      <BarcodeInput barcodeText={text} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  headContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  barcodeBox: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: 300,
    width: 500,
    marginTop: 60,
  },
  text: {
    fontSize: 16,
    color: Colors.secondaryText,
  },

  barcodeText: {
    color: Colors.primaryText,
    fontSize: 22,
    paddingTop: 10,
  },

  buttonContainer: {
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.listBackground,
    borderRadius: 10,
  },
  button: {},
  buttonText: {
    color: Colors.secondaryText,
    fontSize: 17,
  },
});
