/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AmazingCropper from 'react-native-amazing-cropper';

export default class App extends React.Component {
  onDone = croppedImageUri => {
    console.log('croppedImageUri = ', croppedImageUri);
    // send image to server for example
  };

  onError = err => {
    console.log(err);
  };

  onCancel = () => {
    console.log('Cancel button was pressed');
    // navigate back
  };

  render() {
    return (
      <AmazingCropper
        onDone={this.onDone}
        onError={this.onError}
        onCancel={this.onCancel}
        imageUri="https://www.lifeofpix.com/wp-content/uploads/2018/09/manhattan_-11-1600x2396.jpg"
        imageWidth={1600}
        imageHeight={2396}
        NOT_SELECTED_AREA_OPACITY={0.3}
        BORDER_WIDTH={20}
      />
    );
  }
}
