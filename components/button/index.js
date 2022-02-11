import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class CustomButton extends Component {
  static propTypes = {
    label: PropTypes.string,
    action: PropTypes.func,
  };

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
  stBtn: {
    width: 50,
    height: '100%',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stBtnTxt: {
    fontSize: 18,
    color: '#2c3e50',
    fontWeight: 'bold',
    opacity: 2,
    backgroundColor: 'yellow',
  },
  btnTxt: {
    fontSize: 18,
    color: '#2c3e50',
    fontWeight: 'bold',
    opacity: 2,
    backgroundColor: 'yellow',
  },
  txtCounter: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  txtC: {fontSize: 40, color: 'white', fontWeight: 'bold'},
});

export default CustomButton;
