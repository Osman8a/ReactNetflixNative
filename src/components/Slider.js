import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window')//recalcula el ancho dependiendo de mi alto

const Slider = props => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={props.uri} />
        </View>
    )
}

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesSlider: [
                require('../images/1.jpg'),
                require('../images/2.jpg'),
                require('../images/3.jpg')
            ]
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Swiper
                    autoplay
                    height={240}
                >
                    {
                        this.state.imagesSlider.map((item, i) => {
                            return (
                                <Slider
                                    uri={item}
                                    key={i}
                                />
                            )
                        })
                    }

                </Swiper>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        width
    }
}


