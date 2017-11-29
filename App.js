import React from "react";
import { Text, View, StatusBar, Platform } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { Constants } from "expo";
import { TabNavigator, StackNavigator, goBack } from "react-navigation";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { ublue, white } from "./utils/colors";
import { setLocalNotification } from "./utils/helpers";

import DeckList from "./components/DeckList";
import CreateDeck from "./components/CreateDeck";
import DeckDetails from "./components/DeckDetails";
import CreateCard from "./components/CreateCard";
import Quiz from "./components/Quiz";

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
      title: "Decks",
      headerStyle: {
        backgroundColor: ublue
      },
      headerTintColor: white
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? ublue : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? white : ublue,
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
  Home: {
    screen: Tabs
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: ublue
      },
      headerBackTitle: "Decks"
    }
  },
  CreateCard: {
    screen: CreateCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: ublue
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: ublue
      }
    }
  }
});
export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={ublue} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
