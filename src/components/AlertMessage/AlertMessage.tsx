import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../hooks';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { AlertState } from '@/store/alert';

const AlertMessage: FC = () => {
  const message = useSelector(
    (state: { alert: AlertState }) => state.alert.message,
  );
  const { Layout, Fonts, Common } = useTheme();

  const renderMessage = () => {
    return (
      <View style={Common.alertMessage.view}>
        <Text style={Fonts.textSmall}>{message}</Text>
      </View>
    );
  };

  return <View style={Common.alertMessage.main}>{renderMessage()}</View>;
};

export default AlertMessage;
