const BASE_URL = 'http://localhost:7890'; //change to

export async function signUpUser(userInfo) {
    const res = await fetch(`${BASE_URL}/api/v1/users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userInfo),
    });
    const data = await res.json();
    if (res.ok) {
        location.replace('./tasks');
    } else {
        console.error(data.message);
    }
}
// export async function getUser() {
//     const resp = await fetch(`${BASE_URL}/api/v1/users/me`, {
//         method: 'GET',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//     });
//     if (resp.ok) {
//         const user = await resp.json();
//         return user;
//     }
// }
export async function redirectIfLoggedIn() {
    const res = await fetch(`${BASE_URL}/api/v1/users/me`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    if (res.ok) {
        location.replace('./tasks');
    }
}
export async function logoutUser() {
    const resp = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
        method: 'DELETE',
        credentials: 'include',
    });
    if (resp.ok) {
        location.replace('../');
    }
}
