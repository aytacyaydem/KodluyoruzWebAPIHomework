import React, {useState} from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import axios from 'axios';
//Styles
import {main_styles} from '../styles/page_styles';
//Components
import {CategoryItem} from '../components';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const HEIGHT = Dimensions.get('window').height;

function Main() {
  const [categories, setCategories] = useState(null);
  async function fetchData() {
    const response = await axios.get(API_URL).catch((err) => console.log(err));
    setCategories(response.data.categories);
  }

  function renderItem({item}) {
    return <CategoryItem data={item} />;
  }
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={main_styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.idCategory.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        snapToInterval={HEIGHT / 4}
        decelerationRate="fast"
      />
    </View>
  );
}

export {Main};
