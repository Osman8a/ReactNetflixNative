import React, { Component } from 'react'
import { Navigator } from 'react-native-deprecated-custom-components';
import Search from './src/Search';
import App from './src/App';
import Details from './src/Details';
import buildStyleInterpolator from 'buildStyleInterpolator';

const NoTransition = {
    opacity: {
        from: 1,
        to: 1,
        min: 1,
        max: 1,
        type: 'linear',
        extrapolate: false,
        round: 100
    }
}

class indexApp extends Component {

    _renderScene(route, navigator) {
        var navigator = {
            navigator
        }

        switch (route.ident) {
            case 'App':
                return (
                    <App {...navigator} />
                )
            case 'Search':
                return (
                    <Search {...navigator} />
                )
            case 'Details':
                return (
                    <Details {...navigator} {...route.passProps} />
                )
        }
    }

    _configureScene(route, routeStack) {
        switch (route.ident) {
            case 'Search':
                return {
                    ...Navigator.SceneConfigs.FloatFromLeft,
                    gestures: null,
                    defaultTransitionVelocity: 100,
                    animationInterpolators: {
                        into: buildStyleInterpolator(NoTransition),
                        out: buildStyleInterpolator(NoTransition)
                    }
                }
            case 'Details':
                return {
                    ...Navigator.SceneConfigs.FloatFromLeft,
                    gestures: null,
                    defaultTransitionVelocity: 100,
                    animationInterpolators: {
                        into: buildStyleInterpolator(NoTransition),
                        out: buildStyleInterpolator(NoTransition)
                    }
                }
        }
    }
    render() {
        return (
            <Navigator
                initialRoute={{ ident: 'App' }}
                renderScene={this._renderScene}
                configureScene={this._configureScene}
            />
        )
    }
}

export default indexApp