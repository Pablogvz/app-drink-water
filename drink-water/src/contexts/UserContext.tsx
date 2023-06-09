
import React, { useState, useEffect, createContext } from 'react';
import { IUser } from '../types/UserInterface';

interface IUserContext {
    user?: IUser;
    goal: number;
    setGoal: React.Dispatch<React.SetStateAction<number>>;
}

const GOAL = 2000;
const USER = {
    name: 'Pablo Martinez',
    foto: 'https://pbs.twimg.com/profile_images/1631349976218451968/5jaF0VyR_400x400.png',
}

export const UserContext = createContext<IUserContext>({
  goal: GOAL,
  setGoal: () => {},
  user: USER,
});

interface UserProviderProps{
    children: React.ReactNode;
}



export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {

const [user] = useState<IUser>(USER);
const [goal, setGoal] = useState<number>(GOAL)

return(

<UserContext.Provider value={{goal, setGoal, user}}>
    {children}
</UserContext.Provider>



);



};