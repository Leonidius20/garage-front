export function getAuthKey() {
    return window.localStorage.getItem('authKey');
}

export function setAuthKey(authKey) {
    return window.localStorage.setItem('authKey', authKey);
}

export function clearAuthKey() {
    return window.localStorage.removeItem('authKey');
}

export function authKeyExists() {
    return getAuthKey() != null;
}