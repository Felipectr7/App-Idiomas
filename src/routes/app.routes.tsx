import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Slide1 } from '../screens/Slide1';
import { Slide2 } from '../screens/Slide2';
import { Slide3 } from '../screens/Slide3';

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
                 name="Slide1" component={Slide1} options={{
                    tabBarIcon: () =>{
                        return <Feather name='home' size={25} color={'#000'} />

                        
                    }
                 }} />
                <Screen name="Slide2" component={Slide2} options={{
                    tabBarIcon: () =>{
                        return <Feather name='airplay' size={25} color={'#000'} />

                        
                    }
                 }}/>
                <Screen name="Slide3" component={Slide3} options={{
                    tabBarIcon: () =>{
                        return <Feather name='user' size={25} color={'#000'} />

                        
                    }
                 }} />

            </Navigator>
        </NavigationContainer>
    )
}