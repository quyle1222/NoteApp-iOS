import { AppHeader } from '@/components';
import { useTheme } from '@/hooks';
import { NoteState } from '@/store/notes';
import { CONST } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { ApplicationStackParamList } from 'types/navigation';

const Home = () => {
  const { t } = useTranslation(['home']);

  const title = 'Home';
  const { Layout, Fonts } = useTheme();
  const { navigate } =
    useNavigation<StackNavigationProp<ApplicationStackParamList>>();

  const listData = useSelector(
    (state: { notes: NoteState }) => state.notes.data,
  );

  const renderItem = (item: String) => {
    return (
      <View>
        <Text numberOfLines={1} style={Fonts.textSmall}>
          {item}
        </Text>
      </View>
    );
  };

  const renderRightButton = (): JSX.Element => {
    return <Icon size={20} name={'edit'} />;
  };

  const renderListItem = (): JSX.Element => {
    return (
      <FlatList
        keyExtractor={(item, index) => `${index}`}
        data={listData}
        renderItem={({ item }) => renderItem(item)}
      />
    );
  };

  const renderEmpty = (): JSX.Element => {
    return (
      <View style={[Layout.fill, Layout.center]}>
        <Text style={[Fonts.textCenter, Fonts.textLarge]}>
          {t('home:list_is_empty')}
        </Text>
      </View>
    );
  };

  const onTapCreateNew = () => {
    navigate(CONST.NEW_NOTE);
  };

  return (
    <View style={Layout.fill}>
      <AppHeader
        title={title}
        rightComponent={renderRightButton()}
        onTapRight={onTapCreateNew}
      />
      <View style={Layout.fill}>
        {listData?.length > 0 ? renderListItem() : renderEmpty()}
      </View>
    </View>
  );
};

export default Home;
