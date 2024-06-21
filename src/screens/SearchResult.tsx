import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation';

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Colors from '../Colors';

type Props = NativeStackScreenProps<RootStackParamList, 'SearchResult'>;

export default function SearchResultScreen({navigation, route}: Props) {
  const text: string = route.params.text;
  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.searchHeaderText}>Arama Sonucu : {text}</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  scrollContainer: {
    backgroundColor: Colors.background,
  },
  searchHeaderText: {
    color: Colors.headerText,
    fontSize: 22,
  },
  backButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: Colors.darkBackground,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.secondaryText,
    fontSize: 25,
  },
});
