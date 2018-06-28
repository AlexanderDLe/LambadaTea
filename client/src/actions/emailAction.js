import axios from 'axios';

export const GET_ERRORS = 'GET_ERRORS';

export const sendEmail = emailData => dispatch => {
  axios
    .post('/', emailData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
