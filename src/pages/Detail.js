import React from 'react'
import { View, Text,Image,ScrollView,Linking} from 'react-native'
import axios from "axios"
import {detail_styles} from "../styles/page_styles"
import { TouchableOpacity } from 'react-native-gesture-handler'

const API_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="

const Detail = ({route}) => {
    const {id} = route.params
    const [meal,setMeal] = React.useState({})
    async function fetchOneMealWithId(){
        const response = await axios.get(`${API_URL}${id}`)
        setMeal(response.data.meals[0])
    }
    async function openURL(){
        await Linking.openURL(meal.strYoutube)
    }

    React.useEffect(() => {
        fetchOneMealWithId()
    },[])
    return (
        <ScrollView style={detail_styles.container} showsVerticalScrollIndicator={false}>
            <View style={detail_styles.imageContainer}>
                <Image source={{uri:meal.strMealThumb}} style={detail_styles.headerImage}/>
            </View>
            <View style={detail_styles.info}>
                <Text style={detail_styles.headerText}>{meal.strMeal}</Text>
                <View style={detail_styles.headerAltContainer}>
                <Text style={detail_styles.categoryText}>Category: {meal.strCategory}</Text>
                <Text style={detail_styles.categoryText}>Area: {meal.strArea}</Text>
                </View>
                <Text style={detail_styles.tags}>{meal?.strTags?.split(",").map(tag => `#${tag.toLowerCase()} `)}</Text>
            </View>
            <View style={detail_styles.description}>
                <Text style={detail_styles.descriptionText}>{meal.strInstructions}</Text>
                <TouchableOpacity onPress={openURL}>
                    <Text style={detail_styles.link}>Go To Youtube!</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export {Detail}


/*
"idMeal": "52772",
"strMeal": "Teriyaki Chicken Casserole",
"strDrinkAlternate": null,
"strCategory": "Chicken",
"strArea": "Japanese",
"strInstructions": "Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!",
"strMealThumb": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
"strTags": "Meat,Casserole",
"strYoutube": "https://www.youtube.com/watch?v=4aZr5hZXP_s",
*/