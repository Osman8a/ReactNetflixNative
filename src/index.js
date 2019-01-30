import React, { Component } from 'react'
import Search from './components/Search';
import App from './App';
import Details from './components/Details';
import Video from './components/videoPlayerView';
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

