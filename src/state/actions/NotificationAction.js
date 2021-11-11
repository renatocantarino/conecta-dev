import axios from '../../Utils/axios'

export const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS';


const getNotifications = () => {
    return async (dispatch) => {
        const notifications = await axios.get('/api/notifications');
        dispatch({
            type: GET_NOTIFICATIONS,
            payload: { notifications: notifications.data.notifications }
        })

    };
};


export { getNotifications };