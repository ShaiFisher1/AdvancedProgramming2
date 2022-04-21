export const usersData = new Map();

export function addUser(username, password, nickname, image) {
    usersData.set(username, {username, password, nickname, image});
}

export function getUser(username) {
    return usersData.get(username);
}

export function validateUser(username, password) {
    if(usersData.has(username)) {
        return usersData.get(username).password === password;
    }
    return false;
}

