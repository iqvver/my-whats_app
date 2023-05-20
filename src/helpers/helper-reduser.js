/**
 * @param {Error} now 
 */

//хелпер обраюлткт ошибок тулкит

export const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}