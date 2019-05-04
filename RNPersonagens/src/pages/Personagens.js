import React, { Component } from "react";

import { View, Text, Image, ScrollView, StyleSheet, FlatList } from "react-native";
import api from "../services/api";

class Personagens extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assents/superhero.png")}
            style={style.iconBar}
          />
        )
      };

    constructor(props) {
        super(props);

        this.state = {
            listaPersonagens: []
        }
    }

    componentDidMount() {
        this.listarPersonagens();
    }

    listarPersonagens = async () => {
        const resposta = await api.get("/personagens");
        const data = resposta.data;
        this.setState({listaPersonagens: data});
    }

    render() {
        return (
            <View style={style.main}>
                <View style={style.header}>
                    <Text style={style.titulo}>{"Personagens".toUpperCase()}</Text>
                </View>
                <View>
                    <FlatList
                        contentContainerStyle={style.listaCoteudo}
                        data={this.state.listaPersonagens}
                        keyExtractor={item => item.id}
                        renderItem={this.renderizarItem}
                    />
                </View>
            </View>
        );
    }

    renderizarItem = ({ item }) => (
        <View style={style.itemListaContainer}>
            <View style={style.itemListaDados}>
                <Text style={style.itemListaDadosNome}>{item.nome}</Text>
                <Text style={style.itemListaDadosTitulo}>{item.lancamento}</Text>
            </View>
            <View style={style.itemListaImagem}>
                <View style={style.itemListaImagemTest}>
                    <Image
                        style={{width:70, height:70}}
                        source={{uri: item.urlImagem}}
                    />
                </View>
            </View>
        </View>
    );
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
    listaCoteudo: {
        
    },
    itemListaContainer: {
        flexDirection: "row",
        margin: 20,
        marginLeft: 50,
        marginRight: 50,
        borderBottomColor: "#999999",
        borderBottomWidth: 0.9
    },
    itemListaDados: {
        flex: 2,
    },
    itemListaDadosNome: {
        fontSize: 20,
        margin: 3,
        color: "black"
    },
    itemListaDadosTitulo: {
        fontSize: 16,
        margin: 5,
    },

    itemListaImagemTest: {
        // backgroundColor: "red",
        flex: 3,
        width: 70,
        margin: 5
    }
})

export default Personagens;