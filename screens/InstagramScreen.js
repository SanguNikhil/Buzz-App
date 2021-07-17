import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class InstagramScreen extends React.Component {
    render(){
        return(
            <View>
                <Text style={styles.text}>Instagram</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        fontSize:20,
        fontStyle:'italic',
        paddingTop:250
    },
})
