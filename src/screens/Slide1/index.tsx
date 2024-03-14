import { ImageBackground, View, Text ,StyleSheet} from "react-native"
import React from 'react'

export function Slide1(){
    return(
        
        <View style = {{ flex:1}}>
            
        <ImageBackground 
            source ={require('../../assets/img1.png')} 
            
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
