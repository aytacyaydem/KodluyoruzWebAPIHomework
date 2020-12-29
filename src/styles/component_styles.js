import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const category_item = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  imageContainer: {
    width: '100%',
    backgroundColor: '#ffecb3',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    width: WIDTH / 3,
    height: HEIGHT / 3,
  },
  footer: {
    height: HEIGHT / 8,
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText : {
      fontWeight:"700",
      textTransform:"uppercase",
      fontSize:17,
      fontFamily:"notoserif",
      letterSpacing:2
  }
});

const meal_item = StyleSheet.create({

  container : {
    width:WIDTH *0.8,
    marginVertical:50,
    margin:10,
  },
  imageContainer : {
    position:"relative",
    alignItems:"center"
  },
  image : {
    width:WIDTH *0.8,
    height:HEIGHT * 0.6,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    
  },
  footerContainer : {
    flex:1,
    paddingVertical:50,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    padding:20
  },
  mealText : {
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center"
  },
  icon: {
    position:"absolute",
    bottom:10,
  }
})

export {category_item,meal_item};
