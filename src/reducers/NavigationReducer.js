import { FAVOURITE_SCREEN, CONTINENT_SCREEN, HOME_SCREEN } from '../utility/screenConstants';

const initialState = {
    screenTapped: HOME_SCREEN
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FAVOURITE_SCREEN:
        console.log("reducer: ", action.type);
        return {
            screenTapped: action.type
        }
        case CONTINENT_SCREEN:
        console.log("reducer: ", action.type);
        return {
            screenTapped: action.type
        }
        default:
        console.log("reducer: ", action.type);

        return {
            screenTapped: action.type
        }

    }

};

export default reducer;