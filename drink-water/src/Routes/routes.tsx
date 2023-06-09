import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Dashboard } from '../screens/Dashboard';
import { ProfileScreen } from '../screens/ProfileScreen';
import React, { useState, useEffect } from 'react';

type ITabRoutes = {
   Settings: undefined;
   Dashboard: undefined;
   User: undefined;
}


const Tab = createMaterialBottomTabNavigator<ITabRoutes>();

interface IMyTabs{

}

export const Routes: React.FunctionComponent<IMyTabs> = props => { 

  const [goal,setGoal] = useState<number>(2000)

  return (
    <NavigationContainer> 
     <Tab.Navigator>
      <Tab.Screen name="Settings" component={Screen} options={{
        title: 'Configurações',
        tabBarIcon: () => <Icon name='setting' size={20} color='blue' />
      }} />
      <Tab.Screen name="Dashboard" component={Dashboard} options={{
        title: 'Home',
        tabBarIcon: () => <Icon name='home' size={20} color='blue' />
      }} />
      <Tab.Screen name="User" component={ProfileScreen} options={{
        title: 'Perfil',
        tabBarIcon: () => <Icon name='user' size={20} color='blue' />
      }}  />
     </Tab.Navigator>
    </NavigationContainer>
  );
}

function generateRandomColorHexadecimal() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  const Screen = () => {
    return(
      <View style={{flex: 1, backgroundColor: generateRandomColorHexadecimal(), justifyContent: 'center', alignItems: 'center'}}>
        <Text>
           {Math.random()}
        </Text>
      </View>
    );
};
