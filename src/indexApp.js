import React, { Component } from 'react'
import { Navigator } from 'react-native-deprecated-custom-components'

import Search from './components/Search';
import App from './App';
import Details from './components/Details';
import Video from './components/videoPlayerView';

import buildStyleInterpolator from 'buildStyleInterpolator'
import { createStackNavigator, createAppContainer } from 'react-navigation'


const IndexApp = createStackNavigator({
    Home: { screen: App },
    Details: { screen: Details },
    Search: { screen: Search },
    Video: { screen: Video }
}, {
        initialRouteName: "Home"
    })

export default createAppContainer(IndexApp);

