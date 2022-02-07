import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

class Button extends Component {
  render() {
    const {label, action} = this.props;
    return (
      <TouchableOpacity style={styles.btn} onPress={action}>
        <Text style={styles.btnTxt}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  styleContactor: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  stBtn: {
    width: 50,
    height: '100%',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stBtnTxt: {fontSize: 18, color: '#2c3e50', fontWeight: 'bold', opacity: 2},
  txtCounter: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  txtC: {fontSize: 40, color: 'white', fontWeight: 'bold'},
});

export default Button;
