/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import Modal from '@kalwani/react-native-modal';
import {Provider as PaperProvider} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import {tailwind} from '../tailwind';

const App = () => {
  const [modal, setModal] = useState(false);
  const [text, setText] = useState('');
  return (
    <PaperProvider>
      <SafeAreaView style={tailwind('h-full items-center justify-center')}>
        <Modal isVisible={modal} onModalHide={() => setModal(false)}>
          <View
            style={tailwind(
              'h-1/2 bg-red-200 w-4/5 self-center justify-center',
            )}>
            <TextInput
              label="Email"
              value={text}
              onChangeText={(val) => setText(val)}
            />
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => setModal(true)}
          style={tailwind('py-2 px-6 bg-indigo-200 rounded-md')}>
          <Text>Aloha</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
