import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Colors from '../Colors';
import BarcodeInput from '../common/BarcodeInput';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

interface ScanerProps {
  data: string;
  type: string;
}

export default function BarcodeScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  const [text, setText] = useState('');

  //What happens when we scan the bar code
  const handleBarcodeScanned = ({type, data}: ScanerProps) => {
    setScanned(true);
    setText(data);
  };

  return (
    <View style={styles.headContainer}>
      <View style={styles.barcodeBox}>
        <QRCodeScanner
          cameraProps={{captureAudio: false}}
          onRead={({data}) => setText(data)}
          flashMode={RNCamera.Constants.FlashMode.auto}
        />
      </View>
      <BarcodeInput barcodeText={text} />
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
  scannerContainer: {
    width: 300,
    height: 600,
  },
  barcodeBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 500,
    marginTop: 60,
    overflow: 'hidden',
    borderRadius: 50,
  },
  text: {
    fontSize: 16,
    color: Colors.secondaryText,
  },
  container: {
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: Colors.listBackground,
    borderRadius: 16,
    flexDirection: 'row',
  },
  icon: {
    marginStart: 10,
  },
  barcodeContainer: {},
  barcodeText: {
    color: Colors.primaryText,
    fontSize: 22,
    paddingTop: 10,
  },
});
