import { Dimensions, StyleSheet } from 'react-native';
import { CommonParams } from '../../../@types/theme';
const { width, height } = Dimensions.get('window');
export default function <C>({ Colors, Layout }: CommonParams<C>) {
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
  });
}
