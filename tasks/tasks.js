import { logoutUser } from '../fetch-utils.js';

const logout = document.getElementById('logout');

logout.addEventListener('click', async () => {
    await logoutUser();
});
