import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableWithoutFeedback,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';
import TabsEpisodes from './TabsEpisodes';
import TextGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

class Details extends Component {
    render() {
        const { episodes } = this.props.item.details
        const { name } = this.props.item
        const { thumbnail, cast, description, year, creator, numOfEpisodes, season } = this.props.item.details
        return (
            <ScrollView style={styles.container}>
                <ImageBackground
                    style={styles.thumbnail}
                    source={{ uri: thumbnail }}
                >
                    <View style={styles.buttonPlay}>
                        <TouchableWithoutFeedback onPress={null}>
                            <View>
                                <Icon
                                    style={styles.iconPlay}
                                    name="play-circle"
                                    size={90}
                                    color="white"
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.nameContainer}>
                        <TextGradient colors={['transparent', '#181818', '#181818']}>
                            <Text style={styles.text, styles.titleShow}>{name}</Text>
                        </TextGradient>
                    </View>
                </ImageBackground>
            <View style={styles.descriptionContainer}>
                <View style={styles.subtitle}>
                    <Text style={[styles.text, styles.subTitleText]}>{year}</Text>
                    <Text style={[styles.text, styles.subTitleText]}>{numOfEpisodes}</Text>
                    <Text style={[styles.text, styles.subTitleText]}>{season} Temporadas</Text>
                </View>
            </View>
            <View style={styles.description}>
                <Text style={[styles.text, styles.light]}>{description}</Text>
            </View>
            <Text style={[styles.text]}>Emisión: {cast}</Text>
            <Text style={[styles.text]}>Creador: {creator}</Text>
            <View style={styles.shareListIcons}>
                <View style={styles.myListIcon}>
                    <IonIcons
                        style={styles.listIcon}
                        color="gray"
                        name="md-checkmark"
                        size={25}
                    />
                    <Text style={[styles.text]}>Mi Lista</Text>
                </View>
                <View style={styles.myShareIcon}>
                    <Icon
                        style={styles.shareIcon}
                        name="share-alt"
                        color="gray"
                        size={25}
                    />
                    <Text style={[styles.text]}>Compartir</Text>
                </View>
            </View>
            <TabsEpisodes data={episodes} />
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    nameContainer: {
        backgroundColor: 'transparent'
    },
    titleShow: {
        fontSize: 35,
        paddingLeft: 10,
        marginBottom: 10,
        color: 'white'
    },
    thumbnail: {
        width: width,
        height: 300
    },
    buttonPlay: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    iconPlay: {
        opacity: 0.7
    },
    descriptionContainer: {
        paddingHorizontal: 20
    },
    subtitle: {
        flexDirection: 'row'
    },
    subTitleText: {
        marginRight: 20
    },
    text: {
        color: '#b3b3b3',
        fontSize: 16
    },
    shareListIcons: {
        flexDirection: 'row',
        marginVertical: 30
    },
    listIcon: {
        height: 25
    },
    shareIcon: {
        height: 25
    },
    myListIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40
    },
    myShareIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        marginVertical: 10
    },
    light: {
        fontWeight: '200'
    }
})

export default Details