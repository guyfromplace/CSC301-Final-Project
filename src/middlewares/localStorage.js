import {SAVE_BUILD_ACTION_TYPES, SIGN_IN_ACTION_TYPES} from '../helpers/actionTypes';

export default function ({ dispatch }) {
    return next => action => {
        switch (action.type) {
            case SIGN_IN_ACTION_TYPES.success:
            case SAVE_BUILD_ACTION_TYPES.updateUser.success:
                localStorage.setItem('userInfo', JSON.stringify(action.payload));
                break;
        }
        next(action);
    };
}
