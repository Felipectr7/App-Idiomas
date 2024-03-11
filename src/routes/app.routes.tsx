import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { slide1 } from '../screens/slide1';
import { slide2 } from '../screens/slide2';
import { slide3 } from '../screens/slide3';

import {Feather} from '@expo/vector-icons'
const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, tabBarShowLabel:false,tabBarStyle:{
                position:'absolute',
                backgroundColor:'#83C696'
            }}}>
                <Screen
                 name="slide1" component={slide1} options={{
                    tabBarIcon: () =>{
                        return <Feather name='home' size={25} color={'#000'} />

                        
                    }
                 }} />
                <Screen name="slide2" component={slide2} options={{
                    tabBarIcon: () =>{
                        return <Feather name='airplay' size={25} color={'#000'} />

                        
                    }
                 }}/>
                <Screen name="slide3" component={slide3}options={{
                    tabBarIcon: () =>{
                        return <Feather name='user' size={25} color={'#000'} />

                        
                    }
                 }} />

            </Navigator>
        </NavigationContainer>
    )
}