import React, { useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { AppHeader } from '@/components';
import { useTheme } from '@/hooks';
import {
  actions,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor';

const NewNote = (): JSX.Element => {
  const richText = useRef();
  const { Layout } = useTheme();
  let title = 'NewNote';

  const handleHead = ({ tintColor }) => (
    <View style={{ height: '100%', justifyContent: 'center' }}>
      <Text style={{ color: tintColor }}>H1</Text>
    </View>
  );

  return (
    <SafeAreaView style={Layout.fill}>
      <AppHeader title={title} />
      <View>
        <RichToolbar
          editor={richText}
          actions={[
            actions.setBold,
            actions.setItalic,
            actions.setUnderline,
            actions.heading1,
          ]}
          iconMap={{ [actions.heading1]: handleHead }}
        />
      </View>
      <RichEditor
        style={{ height: 500 }}
        ref={richText}
        onChange={descriptionText => {
          console.log('descriptionText:', descriptionText);
        }}
      />
    </SafeAreaView>
  );
};

export default NewNote;
