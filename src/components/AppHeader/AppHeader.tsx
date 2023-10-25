import { useTheme } from '@/hooks';
import React from 'react';
import { ImageStyle } from 'react-native';
import { TextStyle } from 'react-native';
import { StyleProp } from 'react-native';
import {
  ColorValue,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

const AppHeader = ({
  title,
  leftComponent = undefined,
  rightComponent = undefined,
  onTapLeft,
  onTapRight,
}: {
  title: String;
  leftComponent: JSX.Element | undefined;
  rightComponent: JSX.Element | undefined;
  onTapLeft: ((event: GestureResponderEvent) => void) | undefined;
  onTapRight: ((event: GestureResponderEvent) => void) | undefined;
}) => {
  const { Common, Fonts, Layout, Colors } = useTheme();

  return (
    <View style={[style.containerHeight(Colors.white)]}>
      <TouchableOpacity style={[Common.button.base]} onPress={onTapLeft}>
        {leftComponent}
      </TouchableOpacity>
      {title && (
        <View style={[Layout.fill, style.textContainer]}>
          <Text style={[Fonts.textCenter, Fonts.textPrimary]}>{title}</Text>
        </View>
      )}
      <TouchableOpacity style={[Common.button.base]} onPress={onTapRight}>
        {rightComponent}
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create<ViewStyle | TextStyle | ImageStyle | any>({
  containerHeight: (color: ColorValue): StyleProp<ViewStyle> => ({
    flexDirection: 'row',
    height: 40,
    backgroundColor: color,
  }),
  textContainer: {
    justifyContent: 'center',
  },
});

export default AppHeader;
