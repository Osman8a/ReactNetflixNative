import React, { Component } from 'react'
import { Dimensions, View, StyleSheet } from 'react-native'
import VideoPlayer from 'react-native-video-controls'
import Orientation from 'react-native-orientation'


const { width, height } = Dimensions.get('window')

class videoPlayerView extends Component {

    UNSAFE_componentWillMount() {
        Orientation.lockToLandscape();
    }

    _back() {
        Orientation.lockToPortrait();
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <VideoPlayer
                    source={require('../videos/video.mp4')}
                    title={'Designated Survivor'}
                    onBack={() => this._back()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default videoPlayerView;