import { Dimensions, StyleSheet } from 'react-native';
import { CommonParams } from '../../../@types/theme';
const { width, height } = Dimensions.get('window');
export default function <C>({ Colors, Layout }: CommonParams<C>) {
  const button = {
    // width: width * 0.35,
    height: width * 0.1,
    backgroundColor: Colors.white,
    ...Layout.fill,
    ...Layout.center,
  };
  return StyleSheet.create({
    main: {
      position: 'absolute',
      ...Layout.fullSize,
      ...Layout.center,
      zIndex: 999,
    },
    view: {
      backgroundColor: '#F5F5F5',
      borderWidth: 1,
      width: width * 0.7,
      minHeight: height * 0.2,
      maxHeight: height * 0.4,
      borderRadius: 12,
      ...Layout.center,
    },
    footer: {
      overflow: 'hidden',
      borderBottomRightRadius: 12,
      borderBottomLeftRadius: 12,
      backgroundColor: '#F5F5F5',
      borderTopWidth: 1,
      marginTop: 'auto',
      ...Layout.fullWidth,
      ...Layout.row,
    },
    buttonRight: {
      marginLeft: 'auto',
      marginRight: 0,
      ...button,
    },
    buttonLeft: {
      borderRightWidth: 1,
      marginLeft: 0,
      marginRight: 'auto',
      ...button,
    },
  });
}
