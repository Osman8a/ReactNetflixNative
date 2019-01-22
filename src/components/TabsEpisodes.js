import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    Platform
} from 'react-native'
import { TabView, TabBar, SceneMap, PagerScroll, PagerPan } from 'react-native-tab-view';
import Episodes from "./Episodes";
import Trailes from "./Trailers";


const FirstRoute = (data) => (<Episodes episodes={data} />)

const SecondRoute = () => (<Trailes />);

class TabsEpisodes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'Episodios' },
                { key: 'second', title: 'Trailers y Más' },
            ],
        }
    }

    _firstRoute = () => (<Episodes episodes={this.props.data} />)

    _renderPager(props) {
        return (Platform.OS === 'ios') ? <PagerScroll {...props} /> : <PagerPan {...props} />
    }


    _renderTabBar = props => (
        <TabBar
            {...props}
            tabStyle={{ backgroundColor: 'transparent' }}
            indicatorStyle={{ backgroundColor: 'red', height: 4, top: 0 }}
        />
    );

    render() {
        return (
            <TabView
                style={styles.container}
                navigationState={this.state}
                renderScene={SceneMap({
                    first: this._firstRoute.bind(this),
                    second: SecondRoute,
                })}
                renderTabBar={this._renderTabBar}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height
                }}
                renderPager={this._renderPager}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 1,
        borderColor: 'black'
    }
})

export default TabsEpisodes;

