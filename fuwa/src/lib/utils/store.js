import { writable } from 'svelte/store';

export const current_user = writable('');
export const current_user_otp = writable(-1);
export const final_chats = writable([]);
export const theme_url = writable('https://media.tenor.com/f0TnIjGwnCYAAAAC/night-aesthetic.gif');
