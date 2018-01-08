import { createStore } from 'redux';
import reducers from './Reducers'

const cfgStore = () => {
    return createStore(
        reducers
    )
}

export default cfgStore