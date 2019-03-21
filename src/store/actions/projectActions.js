export const createProject = project => {
    // dispatch -> dispatches action to reducer
    // getState -> gets the state
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database

        const firestore = getFirestore();

        firestore
            .collection('projects')
            .add({
                ...project,
                authorFirstName: 'Jason',
                authorLastName: 'Lee',
                authorId: '12345',
                createdAt: new Date()
            })
            .then(() => {
                dispatch({ type: 'CREATE_PROJECT', project });
            })
            .catch(err => {
                dispatch({ type: 'CREATE_PROJECT_ERROR', err });
            });
    };
};
