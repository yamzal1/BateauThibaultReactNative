import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import navigation from '../navigation';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function CustomButton({ path, img, title }) {
  return (
    // <Pressable style={styles.button}
    //   onPress={() => navigation.navigate(path)}>
    //   <Image
    //     source={img}

    //     style={styles.icon} />
    //   <Text style={styles.btnLabel}>      {title}
    //   </Text>
    // </Pressable>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
  },
  image: {
    position: 'relative',
    height: 50,
    width: 50,

  },
});
