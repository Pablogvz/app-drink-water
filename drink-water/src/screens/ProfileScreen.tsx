import React, { useState, useEffect, useContext } from 'react';
import {Text, VStack, HStack, Button, useToast, Box, Divider} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from 'native-base';
import { Slider } from "native-base";
import { UserContext } from '../contexts/UserContext';


interface ProfileScreenProps{
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ }) => { 
  
    const {goal, setGoal, user} = useContext(UserContext);

  return(
     
     <SafeAreaView>
        
        <Avatar bg="blue.500" alignSelf="center" size="2xl" source={{
        uri: user?.foto || undefined
      }}>
          {user?.name.substring(0,1)}
        </Avatar>

         <Text fontSize='2xl' textAlign='center' mt={4}>
             
           {user?.name}
           
         </Text>
         
         <Divider my={20}/>

        <Box mx={20}>
          <Text fontSize='xl' textAlign='center' mt={4}>
           Meta de Água
          </Text>
          <Text fontSize='xl' textAlign='center' mt={4}>
           {goal}ml/dia
          </Text>

         <Slider  defaultValue={goal}
          value={goal}
          minValue={0}
          maxValue={4000} 
          onChange={(value) => setGoal(value)}
          step={100}>
          <Slider.Track>
             <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
         </Slider>
        </Box>

     </SafeAreaView>

  );

};
