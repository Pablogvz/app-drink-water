
import {Text, VStack, HStack, Button, useToast, Box} from 'native-base';
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';


interface IDashboardProps{

}

export const Dashboard: React.FC<IDashboardProps> = () => {
  const {goal} = useContext(UserContext);
  const [water, setWater] = useState<number>(0);
  const [cupSize, setCupSize] = useState<number>(250);
  
  
  
  const toast = useToast();

  const handleWater = () => {

    setWater(water + cupSize);

     toast.show({
        description: `Você bebeu ${cupSize}ml de água!`
      })
    };

   const handleChangeCupSize = (size: number) => {
       setCupSize(size);
   };


    useEffect(() => {
        if (water >= goal) {
          alert(
             "Parabéns, Você atingiu sua meta de água!"
                )
        }
      }, [water]);

  return(
     
     <VStack  flex={1} width='100%' justifyContent='space-between' alignItems='center' p={4} my={30}>
        <Text  fontSize="sm">
            {' '} Recipiente de {cupSize} ml
        </Text>

      <VStack>
      <HStack alignItems="center" justifyContent="center">
        <Text fontSize="6xl">
           
           {water}

        </Text>

        <Text  fontSize="xl">
            {' '}/ {goal} ml
        </Text>
        
        </HStack>


        <Button
            mt={5}
            colorScheme="primary"
            onPress={()=>{
                handleWater();
            }}
        >
            Beber água!
        </Button>
      </VStack>


        <Box mt={10}>
        <Button.Group >
            <Button onPress= {() => handleChangeCupSize(200)} colorScheme="teal">Copo</Button>
            <Button onPress= {() => handleChangeCupSize(500)} colorScheme="teal">Garrafa</Button>
            <Button onPress= {() => handleChangeCupSize(250)} colorScheme="teal">Xícara</Button>
        </Button.Group>
        </Box>
     </VStack>

  );

};
