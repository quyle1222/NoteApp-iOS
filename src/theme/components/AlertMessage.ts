import { Dimensions, StyleSheet } from 'react-native';
import { CommonParams } from '../../../@types/theme';
const { width, height } = Dimensions.get('window');
export default function <C>({ Colors, Layout }: CommonParams<C>) {
  const button = {
    width: width * 0.35,
    height: width * 0.1,
    backgroundColor: Colors.white,
    ...Layout.center,
  };
  return StyleSheet.create({
    main: {
      position: 'absolute',
      backgroundColor: 'black',
      opacity: 0.6,
      ...Layout.fullSize,
      ...Layout.center,
      zIndex: 999,
    },
    view: {
      width: width * 0.7,
      minHeight: height * 0.2,
      maxHeight: height * 0.4,
      backgroundColor: 'red',
      borderRadius: 12,
      ...Layout.center,
    },
    footer: {
      marginTop: 'auto',
      ...Layout.fullWidth,
      ...Layout.row,
    },
    buttonRight: {
      marginLeft: 'auto',
      marginRight: 0,
      borderBottomRightRadius: 12,
      ...button,
    },
    buttonLeft: {
      marginLeft: 0,
      marginRight: 'auto',
      borderBottomLeftRadius: 12,
      ...button,
    },
  });
}
