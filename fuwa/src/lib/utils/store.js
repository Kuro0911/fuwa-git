import { writable } from 'svelte/store';

export const current_user = writable('');
export const current_user_otp = writable(-1);
