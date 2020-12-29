import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import axios from 'axios';
import {MealItem} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WIDTH = Dimensions.get('window').width;

const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

function List({route}) {
  const {categoryName} = route.params;
  const [meals, setMeals] = React.useState(null);
  async function fetchMealsWithCategoryName() {
    const response = await axios.get(`${API_URL}${categoryName}`);
    setMeals(response.data.meals);
  }

  function renderItem({item}) {
    return <MealItem data={item} />;
  }
  React.useEffect(() => {
    fetchMealsWithCategoryName();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cbba83',
      }}>
      <View>
        <FlatList
          data={meals}
          renderItem={renderItem}
          keyExtractor={(item) => item.idMeal.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export {List};
