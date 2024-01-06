import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./ProductCard.styles";

const Product_Card = ({products})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:products.imageUrl}}/>
            <View style = {styles.inner_container}>
                <Text style={styles.title}>{products.title}</Text>
                <Text style={styles.price}>{products.price}</Text>
                <Text style={styles.stock_text}>{products.inStock ?  "" : "STOKTA YOK"}</Text>
            </View>
        </View>
    );
}

export default Product_Card;