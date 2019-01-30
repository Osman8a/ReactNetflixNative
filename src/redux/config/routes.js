import Search from '../../components/Search';
import App from '../../App';
import Details from '../../components/Details';
import Video from '../../components/videoPlayerView';

const Routes = {
    Home: { screen: App },
    Details: { screen: Details },
    Search: { screen: Search },
    Video: { screen: Video }
}

export default Routes