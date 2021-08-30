import React from 'react';
import {View, Text, Animated} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  useDrawerProgress,
} from '@react-navigation/drawer';
import StackDrawer from './StackDrawer';
import {useState} from 'react';
import CustomDrawer from '../components/CustomDrawer';
import {useEffect} from 'react';
import rootColor from '../constants/colors';
import dimensions from '../constants/dimensions';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => {
    console.log('close drawer');
    setIsOpen(false);
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <Drawer.Navigator
      drawerContent={(props: DrawerContentComponentProps) => {
        const {history} = props.state;
        const lastHistory = history[history.length - 1];
        if (lastHistory?.type === 'drawer') {
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
        return <CustomDrawer closeDrawer={closeDrawer} />;
      }}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        overlayColor: 'transparent',
        sceneContainerStyle: {backgroundColor: rootColor.secondaryColor},
        drawerStyle: {
          backgroundColor: rootColor.secondaryColor,
          width: (dimensions.w * 2) / 3,
        },
      }}>
      <Drawer.Screen name="StackDrawer">
        {props => <StackDrawer isOpen={isOpen} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default MainDrawer;
