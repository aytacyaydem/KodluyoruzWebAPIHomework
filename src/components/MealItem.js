import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import {meal_item} from '../styles/component_styles';
import {useNavigation} from '@react-navigation/native';
/*
{
"strMeal": "Baked salmon with fennel & tomatoes",
"strMealThumb": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
"idMeal": "52959"
}
*/
function MealItem({data}) {
  console.log(data);
  const navigation = useNavigation();
  return (
    <Pressable
      style={meal_item.button}
      onPress={() => navigation.navigate('Detail', {id: data.idMeal})}>
      <View style={meal_item.container}>
        <View style={meal_item.imageContainer}>
          <Image
            source={{uri: data.strMealThumb}}
            style={meal_item.image}
            resizeMethod="auto"
            resizeMode="cover"
          />
        </View>

        <View style={meal_item.footerContainer}>
          <Text style={meal_item.mealText}>{data.strMeal}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export {MealItem};
