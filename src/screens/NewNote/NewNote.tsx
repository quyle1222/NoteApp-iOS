import React, { useRef } from 'react';
import {
  Keyboard,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
  ColorValue,
  TextInput,
} from 'react-native';
import { AppHeader } from '@/components';
import { useTheme } from '@/hooks';
import {
  actions,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor';
import { addNote } from '@/store/notes';
import { showAlert } from '@/store/alert';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const NewNote = (): JSX.Element => {
  const { t } = useTranslation(['common']);
  const richText = useRef<RichEditor | null>();
  const { Layout, Fonts, Gutters } = useTheme();
  const dispatch = useDispatch();
  const { goBack } = useNavigation();

  let title = 'NewNote';
  let text = '';

  const onSave = () => {
    let rawText = text.trim();
    if (rawText) {
      dispatch(addNote({ note: text }));
      goBack();
    } else {
      // eslint-disable-next-line prettier/prettier
      let message: string = t('alert.note_is_empty');
      dispatch(showAlert({ message: message }));
    }
  };

  const renderLeftComponent = (): JSX.Element => {
    return <Text style={Fonts.textTiny}>Back</Text>;
  };

  const handleHead = ({ tintColor }: { tintColor: ColorValue }) => (
    <View style={[Layout.fullHeight, Layout.center]}>
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
        {/* <View style={{ height: 40, backgroundColor: 'white' }}>
          <TextInput style={[Layout.fill, Gutters.smallHPadding]} />
        </View> */}
        <View>
          <RichToolbar
            editor={richText}
            actions={actionsArray}
            iconMap={{ [actions.heading1]: handleHead }}
          />
        </View>
        <RichEditor
          style={Layout.fill}
          ref={ref => (richText.current = ref)}
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
