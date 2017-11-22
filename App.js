import React from "react";
import { Text, View, StatusBar, Platform } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { Constants } from "expo";
import { TabNavigator, StackNavigator, goBack } from "react-navigation";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { blue, white } from "./utils/colors";

import Header from "./components/Header";
import DeckList from "./components/DeckList";
import CreateDeck from "./components/CreateDeck";
import DeckDetails from "./components/DeckDetails";
import CreateCard from "./components/CreateCard";

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tabs = TabNavigator(
  {
    Decks: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="cards" size={30} color={tintColor} />
        )
      }
    },
    NewDeck: {
      screen: CreateDeck,
      navigationOptions: {
        tabBarLabel: "New Deck",
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="add-to-list" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      title: "UdaciCards",
      headerStyle: {
        backgroundColor: blue
      },
      headerTintColor: white
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? blue : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? white : blue,
        shadowColor: "rgba(0,0,0,0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

const MainNavigator = StackNavigator({
  Decks: {
    screen: Tabs
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      },
      headerBackTitle: "Decks"
    }
  },
  CreateCard: {
    screen: CreateCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  }
});
export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={blue} barStyle="light-content" />
          {/* <Header headerText={"UdaciCards"} /> */}
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
