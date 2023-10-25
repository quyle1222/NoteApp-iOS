import { AppHeader } from '@/components';
import { useTheme } from '@/hooks';
import { CONST } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const Home = () => {
  const title = 'Home';
  const { Layout, Fonts } = useTheme();
  const [data, setData] = useState([]);
  const { navigate } = useNavigation();
  const renderItem = () => {
    return <View></View>;
  };

  const renderRightButton = (): JSX.Element => {
    return <Icon name={'edit'} />;
  };

  const renderListItem = (): JSX.Element => {
    return (
      <FlatList
        keyExtractor={(item, index) => `${index}`}
        data={data}
        renderItem={() => renderItem()}
      />
    );
  };

  const renderEmpty = (): JSX.Element => {
    return (
      <View>
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
        {data.length > 0 ? renderListItem() : renderEmpty()}
      </View>
    </View>
  );
};

export default Home;
