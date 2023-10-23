import { useTheme } from '@/hooks';
import React from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';

const AppHeader = ({
  title,
  leftComponent,
  rightComponent,
  ...props
}: {
  title: String;
  leftComponent: View;
  rightComponent: View;
  props: ViewProps;
}) => {
  const { Fonts, Layout, MetricsSizes } = useTheme();

  return (
    <View style={[Layout.fill, style.containerHeight]} {...props}>
      {leftComponent}
      {title && (
        <Text style={[Fonts.textCenter, Fonts.textPrimary]}>{title}</Text>
      )}
      {rightComponent}
    </View>
  );
};

const style = StyleSheet.create({
  containerHeight: {
    height: 80,
  },
});

export default AppHeader;
