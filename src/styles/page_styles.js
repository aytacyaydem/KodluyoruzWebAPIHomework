import React from "react"
import {StyleSheet,Dimensions} from "react-native"

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const main_styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"#cbba83"
    }
})

const detail_styles = StyleSheet.create({
    container : {
        flex:1,
    },
    headerImage : {
        width:WIDTH,
        height:HEIGHT / 3   
    },
   headerText : {
       fontSize:20,
       fontWeight:"bold"
   },
   info : {
       paddingHorizontal:10,
       paddingVertical:20,
       backgroundColor:"white",
       borderBottomWidth:1,
       borderColor:"#aaa",
       shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,
   },
   headerAltContainer : {
    flexDirection:"row",
    marginBottom:10
   },
   categoryText : {
    fontSize:16,
    fontStyle:"italic",
    fontWeight:"700",
    fontVariant:["small-caps"],
    marginRight:10,
   },
   tags : {
       fontStyle:"italic",
       fontWeight:"600",
       fontSize:16
   },
   description : {
       padding:10,
        backgroundColor:"rgba(255,255,255,0.7)"
   },
   descriptionText : {
       fontSize:16,
       lineHeight:16*1.5
   },
   link : {
       fontSize:20,
       marginTop:10,
       alignSelf:"center",
       color:"#0288d1",
       fontWeight:"bold"
   }
})

export {main_styles,detail_styles}