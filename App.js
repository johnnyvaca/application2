/**
 * Sample React Native App
 * https://github.com/facebook/ react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CustomButton from './components/button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }

  handleUp() {
    const {counter: ct} = this.state;
    this.setState({counter: ct + 1});
  }

  handleDown() {
    const {counter: ct} = this.state;
    this.setState({counter: ct - 1});
  }

  render() {
    const {counter} = this.state;
    return (
      <View style={desStyles.container}>
        <View style={desStyles.styleContactor}>
          <CustomButton label="-" action={this.handleDown} />
          <View style={desStyles.txtCounter}>
            <Text style={desStyles.txtC}>{counter}</Text>
          </View>
          <CustomButton label="+" action={this.handleUp} />
        </View>
      </View>
    );
  }
}

const desStyles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#2c3e50', justifyContent: 'center'},
  styleContactor: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },

  txtCounter: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  stBtnTxt: {fontSize: 18, color: '#2c3e50', fontWeight: 'bold', opacity: 2},

  txtC: {fontSize: 40, color: 'white', fontWeight: 'bold'},
});
export default App;
