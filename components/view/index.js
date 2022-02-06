import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';



function Counter(counter) {


    return (
        <View style={desStyles.styleContactor}>

            <TouchableOpacity style={desStyles.stBtn}>
                <Text style={desStyles.stBtnTxt}>-</Text>
            </TouchableOpacity>
            <View style={desStyles.txtCounter}>
                <Text style={desStyles.txtC}>{counter.number}</Text>
            </View>
            <TouchableOpacity style={desStyles.stBtn}>
                <Text style={desStyles.stBtnTxt} onPress={this.App.constructor.handleUp}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const desStyles = StyleSheet.create({
    styleContactor: {height: 50, width: '100%', backgroundColor: 'green',paddingHorizontal:10,flexDirection:'row'},
    stBtn: {width:50,height:'100%',backgroundColor:'black',alignItems:'center',justifyContent:'center'},
    stBtnTxt:{fontSize:18,color:'white',fontWeight:'bold'},
    txtCounter: {flex: 1,justifyContent:'center',alignItems:'center'},
    txtC:{fontSize:40,color:'white',fontWeight:'bold'}
});

export default Counter;
