import { AlertState, hiddenAlert } from '@/store/alert';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '../../hooks';

const AlertMessage: FC = () => {
  const message = useSelector(
    (state: { alert: AlertState }) => state.alert.message,
  );
  const dispatch = useDispatch();

  const { Layout, Fonts, Common } = useTheme();

  const renderMessage = (): JSX.Element => {
    return (
      <View style={[Layout.fill, Layout.center]}>
        <Text style={Fonts.textSmall}>{message}</Text>
      </View>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
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
    );
  };

  const onTapCancel = () => {
    dispatch(hiddenAlert());
  };

  const onTapConfirmed = () => {
    dispatch(hiddenAlert());
  };

  return (
    <View style={Common.alertMessage.main}>
      <View style={Common.alertMessage.view}>
        {renderMessage()}
        {renderButton()}
      </View>
    </View>
  );
};

export default AlertMessage;
