import { AppHeader } from '@/components';
import { useTheme } from '@/hooks';
import { NoteState } from '@/store/notes';
import { CONST } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

const Home = () => {
  const title = 'Home';
  const { Layout, Fonts } = useTheme();
  const [data, setData] = useState([]);
  const { navigate } = useNavigation();
  const store = useSelector(state => state);

  const listData = useSelector(
    (state: { notes: NoteState }) => state.notes.data,
  );

  console.log('store', store);
  console.log('data', listData);

  const renderItem = (item: String) => {
    return (
      <View>
        <Text numberOfLines={1} style={{ color: 'white' }}>
          {item}
        </Text>
      </View>
    );
  };

  const renderRightButton = (): JSX.Element => {
    return <Icon name={'edit'} />;
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
      <View style={[Layout.fill,Layout.center]}>
        <Text style={[Fonts.textCenter, Fonts.textLarge]}>Empty</Text>
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
