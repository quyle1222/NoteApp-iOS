import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../hooks';
import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AlertState, hiddenAlert } from '@/store/alert';

const AlertMessage: FC = () => {
  const message = useSelector(
    (state: { alert: AlertState }) => state.alert.message,
  );
  const dispatch = useDispatch();
  const { Layout, Fonts, Common } = useTheme();

  const renderMessage = () => {
    return (
      <View style={Common.alertMessage.view}>
        <Text style={Fonts.textSmall}>{message}</Text>

        <View style={Common.alertMessage.footer}>
          <TouchableOpacity
            onPress={onTapCancel}
            style={[Common.alertMessage.buttonLeft]}
          >
            <Text style={Fonts.textSmall}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onTapConfirmed}
            style={Common.alertMessage.buttonRight}
          >
            <Text style={Fonts.textSmall}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const onTapCancel = () => {
    dispatch(hiddenAlert());
  };

  const onTapConfirmed = () => {
    dispatch(hiddenAlert());
  };

  return <View style={Common.alertMessage.main}>{renderMessage()}</View>;
};

export default AlertMessage;
