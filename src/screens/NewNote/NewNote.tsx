import React, { useRef } from 'react';
import {
  Keyboard,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
  ColorValue,
} from 'react-native';
import { AppHeader } from '@/components';
import { useTheme } from '@/hooks';
import {
  actions,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor';
import { addNote } from '@/store/notes';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const NewNote = (): JSX.Element => {
  const richText = useRef();
  const { Layout, Fonts } = useTheme();
  const dispatch = useDispatch();
  const { goBack } = useNavigation();

  let title = 'NewNote';
  let text = '';

  const onSave = () => {
    dispatch(addNote({ note: text }));
    goBack();
  };

  const renderLeftComponent = (): JSX.Element => {
    return <Text style={Fonts.textTiny}>Back</Text>;
  };

  const handleHead = ({ tintColor }: { tintColor: ColorValue }) => (
    <View style={{ height: '100%', justifyContent: 'center' }}>
      <Text style={{ color: tintColor }}>H1</Text>
    </View>
  );

  const renderRight = (): JSX.Element => {
    return <Text style={Fonts.textTiny}>Save</Text>;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={Layout.fill}>
        <AppHeader
          title={title}
          leftComponent={renderLeftComponent()}
          rightComponent={renderRight()}
          onTapLeft={goBack}
          onTapRight={onSave}
        />
        <View>
          <RichToolbar
            editor={richText}
            actions={actionsArray}
            iconMap={{ [actions.heading1]: handleHead }}
          />
        </View>
        <RichEditor
          style={{ flex: 1 }}
          ref={richText}
          onChange={descriptionText => {
            text = descriptionText;
          }}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const actionsArray = [
  actions.setBold,
  actions.setItalic,
  actions.setUnderline,
  actions.heading1,
  actions.checkboxList,
];

export default NewNote;
