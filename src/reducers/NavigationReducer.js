import { FAVOURITE_SCREEN, CONTINENT_SCREEN, HOME_SCREEN } from '../utility/screenConstants';

const initialState = {
    screenTapped: HOME_SCREEN
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FAVOURITE_SCREEN:
        console.log("reducer: ", action.type);
        return {
            screenTapped: FAVOURITE_SCREEN
        }
        case CONTINENT_SCREEN:
        console.log("reducer: ", action.type);
        return {
            screenTapped: CONTINENT_SCREEN
        }
        default:
        console.log("reducer: ", action.type);

        return {
            screenTapped: HOME_SCREEN
        }

    }

};

export default reducer;