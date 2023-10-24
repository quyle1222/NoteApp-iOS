import { useTheme } from '@/hooks';
import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';

const AppHeader = ({
  title,
  leftComponent = null,
  rightComponent = null,
  ...props
}: {
  title: String;
  leftComponent: FunctionComponent | null;
  rightComponent: FunctionComponent | null;
  props: ViewProps | null;
}) => {
  const { Fonts, Layout, MetricsSizes } = useTheme();

  return (
    <View style={[Layout.fill, style.containerHeight]} {...props}>
      {leftComponent}
      {title && (
        <Text style={[Layout.fill, Fonts.textCenter, Fonts.textPrimary]}>
          {title}
        </Text>
      )}
      {rightComponent}
    </View>
  );
};

const style = StyleSheet.create({
  containerHeight: {
    flexDirection: 'row',
    height: 80,
  },
});

export default AppHeader;
