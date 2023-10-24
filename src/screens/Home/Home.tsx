import AppHeader from '@/components/AppHeader/AppHeader';
import { useTheme } from '@/hooks';
import React, { useState, Component, FunctionComponent } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Home = () => {
  const title = 'Home';
  const { Layout, Fonts } = useTheme();
  const [data, setData] = useState([]);

  const renderItem = () => {
    return <View></View>;
  };

  const renderRightButton = (): FunctionComponent => {
    return (
      <TouchableOpacity>
        <Icon name="edit" />
      </TouchableOpacity>
    );
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
      <AppHeader title={title} rightComponent={renderRightButton} />
      <View style={Layout.fill}>
        {data.length > 0 ? renderListItem() : renderEmpty()}
      </View>
    </View>
  );
};

export default Home;
