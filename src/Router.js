import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

//Pages
import {Detail,Main,List} from "./pages"

const ProductStack = createStackNavigator()
function ProductNavigation(){
  return (
    <ProductStack.Navigator screenOptions={{headerTitleAlign:"center",headerTitleStyle:{fontSize:17}}}>
      <ProductStack.Screen name="Main" component={Main} options={{title:"Kategoriler"}}/>
      <ProductStack.Screen name="List" component={List} options={{title:"Yemekler"}}/>
      <ProductStack.Screen name="Detail" component={Detail} options={{title:"Detay"}}/>
    </ProductStack.Navigator>
  )
}

function Router() {
  return (
    <NavigationContainer>
      <ProductNavigation />
    </NavigationContainer>
  );
};

export default Router;
