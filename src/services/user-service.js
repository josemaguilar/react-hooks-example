const BASE_URL_API = 'https://reqres.in/api/users';

const getUsers = () => {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL_API}`)
            .then(res => resolve(res.json()), reject)
            .catch(err => reject(err.json()));
    });
};

const getSingleUser = ({ id }) => {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL_API}/${id}`)
            .then(res => resolve(res.json()), reject)
            .catch(err => reject(err.json()))
    })
};

export { getUsers, getSingleUser };
