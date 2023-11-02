import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

export type MainParamsList = {
  Home: undefined;
};

export type ApplicationStackParamList = {
  Startup: undefined;
  Main: NavigatorScreenParams<MainParamsList>;
  HomeScreen: undefined;
  NewNote: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;

export type NavProp<T extends keyof ApplicationStackParamList> = {
  navigation: StackNavigationProp<ApplicationStackParamList, T>;
  route: RouteProp<ApplicationStackParamList, T>;
};
