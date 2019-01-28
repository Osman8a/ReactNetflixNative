import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableWithoutFeedback,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Dimensions,
    Share
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';
import TabsEpisodes from './TabsEpisodes';
import * as Animatable from 'react-native-animatable';
import TextGradient from 'react-native-linear-gradient';
import Orientation from 'react-native-orientation';



const { width, height } = Dimensions.get('window');



class Details extends Component {

    constructor(props) {
        super(props)
        this.state = {
            measures: 0,
            header: false,
            animation: ''
        }
    }

    UNSAFE_componentWillMount() {
        Orientation.lockToPortrait();
    }

    openVideo() {
        const { name } = this.props.item

        Orientation.lockToLandscape();
        this.props.navigator.push({
            ident: 'Video',
            passProps: {
                title: name
            }
        })
    }

    onShare({ name }) {
        Share.share({
            title: `${name}`,
            url: 'www.youtube.com',
            message: `Una increible película para tí llamada ${name}`
        }, {
                dialogTitle: 'Compartir este increíble contenido'
            })
    }

    handleScroll(event) {
        if (event.nativeEvent.contentOffset.y > this.state.measure) {
            this.setState({
                header: true,
                animation: 'slideInDown'
            })
        } else {
            this.setState({
                header: false
            })
        }
    }
    render() {
        const { episodes } = this.props.item.details
        const { name } = this.props.item
        const { thumbnail, cast, description, year, creator, numOfEpisodes, season } = this.props.item.details
        return (
            <View style={{ flex: 1 }}>
                {this.state.header ? <Animatable.View animation={this.state.animation} style={styles.header}>
                    <Text style={styles.headerText}>{name}</Text>
                </Animatable.View> : null}
                <ScrollView onScroll={this.handleScroll.bind(this)} style={styles.container}>
                    <ImageBackground
                        style={styles.thumbnail}
                        source={{ uri: thumbnail }}
                    >
                        <View style={styles.buttonPlay}>
                            <TouchableWithoutFeedback onPress={() => this.openVideo}>
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
                        <View style={styles.nameContainer}
                            onLayout={({ nativeEvent }) => {
                                this.setState({
                                    measures: nativeEvent.layout.y
                                })
                            }}
                        >
                            <TextGradient colors={['transparent', '#181818', '#181818']}>
                                <Text style={[styles.text, styles.titleShow]}>{name}</Text>
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
                        <TouchableWithoutFeedback onPress={() => this.onShare(this.props.item)}>
                            <View style={styles.myShareIcon}>
                                <Icon
                                    style={styles.shareIcon}
                                    name="share-alt"
                                    color="gray"
                                    size={25}
                                />
                                <Text style={[styles.text]}>Compartir</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <TabsEpisodes data={episodes} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    header: {
        backgroundColor: '#181818',
        paddingVertical: 10,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 0
    },
    headerText: {
        color: 'white',
        fontSize: 20
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