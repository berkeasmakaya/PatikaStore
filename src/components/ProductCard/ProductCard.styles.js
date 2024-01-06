import { StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"#f8f8ff",
        margin:10,
        padding:10,
        flex:1,
        alignItems:"center",
        borderRadius:10,
    },

    image:{
        height:Dimensions.get("window").height/4,
        width:Dimensions.get("window").width/3,
        resizeMode:"contain",
    },

    title:{
        fontWeight:"bold",
        fontSize:20,
    },
    price:{
        fontStyle:'italic',
        fontSize:20,
    },
    inner_container:{
        backgroundColor:"#f8f8ff",
        padding:20,
    },
    stock_text:{
        color:"red",
        fontSize:15,
        fontWeight:"bold",
    }
})