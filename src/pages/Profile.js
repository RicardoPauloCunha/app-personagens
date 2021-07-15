import React, { Component } from "react";

import { View, Text, Image, StyleSheet } from "react-native";

class Profile extends Component {
    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require("../assents/resume.png")}
                style={style.iconBar}
            />
        )
    };

    render() {
        return (
            <View style={style.main}>
                <View style={style.header}>
                    <Text style={style.titulo}>{"Informações Dev".toUpperCase()}</Text>
                </View>

                <View style={style.divImgProfile}>
                    <Image
                        source={require("../assents/reading.png")}
                        style={style.imgProfile}
                    />
                </View>

                <View style={style.dadosContainer}>
                    <Text style={style.dadosNome}>Ricardo Paulo da Cunha</Text>
                    <View>
                        <Text style={style.dadosInfo}>Email: Rpaulo1232@gmail.com</Text>
                        <Text style={style.dadosInfo}>Trello: ricardopaulodacunha</Text>
                        <Text style={style.dadosInfo}>GitHub: RicardoPauloCunha</Text>
                        <Text style={style.dadosInfo}>Pinterest: Ricardo Paulo</Text>
                        <Text style={style.dadosInfo}>LinkedIn: Ricardo Paulo</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    iconBar: {
        width: 25,
        height: 25,
        tintColor: "#FFFFFF"
    },
    main: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    header: {
        height: "auto",
        backgroundColor: "dodgerblue",
    },
    titulo: {
        color: "white",
        margin: 10,
        textAlign: "center",
        fontSize: 25,
    },
    dadosContainer: {
        // margin: 20,
        marginLeft: 50,
        marginRight: 50,
    },
    divImgProfile: {
        alignItems: "center",
        marginTop: 20,
        height: 200
    },
    imgProfile: {
        width: 170,
        height: 170,
    },
    dadosNome: {
        fontSize: 20,
        marginBottom: 20,
        color: "black",
        borderBottomColor: "#999999",
        borderBottomWidth: 0.9,
        textAlign: "center"
    },
    dadosInfo: {
        fontSize: 16,
        margin: 3
    }
})

export default Profile;