import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
//Styles
import {category_item} from '../styles/component_styles';
import {useNavigation} from '@react-navigation/native';

/*{
"idCategory": "1",
"strCategory": "Beef",
"strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
"strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
},
*/

function CategoryItem({data}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={category_item.container}
      onPress={() =>
        navigation.navigate('List', {categoryName: data.strCategory})
      }>
      <View style={category_item.imageContainer}>
        <Image
          source={{uri: data.strCategoryThumb}}
          resizeMode="contain"
          style={category_item.image}
        />
      </View>
      <View style={category_item.footer}>
        <Text style={category_item.itemText}>{data.strCategory}</Text>
      </View>
    </TouchableOpacity>
  );
}

export {CategoryItem};
