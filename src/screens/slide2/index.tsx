import { ImageBackground, View, Text ,StyleSheet} from "react-native"
import React from 'react'

export function slide2(){
    return(
        <View style = {{ flex:1,backgroundColor:'blue'}}>
        <ImageBackground
            source ={require('../../assets/img2.png')} 
            style ={styles.ImageBackground}
            >
        </ImageBackground>
        </View>
    )
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column'
        },
        ImageBackground: {
            flex: 1,
        },
    });