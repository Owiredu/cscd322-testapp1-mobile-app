import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Login() {
    return (
        <View style={styles.container}>
            <Image style={styles.iconImage} source={{ uri: require("../assets/unspash_icon0.jpg") }} />
            <Text style={styles.welcomeText}>
                Welcome to
            </Text>
            <Text style={styles.powerText}>
                Power Bike Shop
            </Text>
            <TouchableOpacity style={styles.touchableGmail}>
                <Text style={styles.gmailText}>Login with Gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableApple}>
                <Text style={styles.appleText}>Login with Apple</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconImage: {
        width: 200,
        height: 200,
        borderRadius: 20,
        marginBottom: 50,
        transform: [{ rotate: "45deg" }]
    },

    welcomeText: {
        color: "rgba(0, 0, 0, 0.6)",
        fontSize: 24
    },

    powerText: {
        color: "black",
        fontSize: 30,
        fontWeight: 600
    },

    touchableGmail: {
        backgroundColor: "#e3e3e3",
        padding: 10,
        paddingHorizontal: 60,
        borderRadius: 10,
        marginTop: 20
    },

    touchableApple: {
        backgroundColor: "black",
        padding: 10,
        paddingHorizontal: 60,
        borderRadius: 10,
        marginTop: 20
    },

    gmailText: {
        fontSize: 20
    },

    appleText: {
        fontSize: 17,
        color: "white"
    }
});