import React from "react";
import { Text, View, StatusBar } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { Constants } from "expo";
import { blue } from "./utils/colors";
import Header from "./components/Header";
import DeckList from "./components/DeckList";

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={blue} barStyle="light-content" />
          <Header headerText={"UdaciCards"} />
          <DeckList />
        </View>
      </Provider>
    );
  }
}
