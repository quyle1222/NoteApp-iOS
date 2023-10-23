import AppHeader from '@/components/AppHeader/AppHeader';
import { useTheme } from '@/hooks';
import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';

const Home = () => {
  const { Layout, Fonts } = useTheme();
  const [data, setData] = useState([]);

  const renderItem = () => {
    return <View></View>;
  };

  const renderListItem = () => {
    return (
      <FlatList
        keyExtractor={(item, index) => `${index}`}
        data={data}
        renderItem={() => renderItem()}
      />
    );
  };

  const renderEmpty = () => {
    return (
      <View>
        <Text style={[Fonts.textCenter, Fonts.textLarge]}>Empty</Text>
      </View>
    );
  };

  return (
    <View style={Layout.fill}>
      <AppHeader title={'Home'} />
      <View style={Layout.fill}>
        {data.length > 0 ? renderListItem() : renderEmpty()}
      </View>
    </View>
  );
};

export default Home;
