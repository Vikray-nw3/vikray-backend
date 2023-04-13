import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || '3000';
export const FIREBASE_APIKEY = process.env.FIREBASE_APIKEY || '';
export const FIREBASE_AUTHDOMAIN = process.env.FIREBASE_AUTHDOMAIN || '';
export const FIREBASE_PROJECTID = process.env.FIREBASE_PROJECTID || '';
export const FIREBASE_STORAGEBUCKET = process.env.FIREBASE_STORAGEBUCKET || '';
export const FIREBASE_MESSAGINGSENDERID = process.env.FIREBASE_MESSAGINGSENDERID || '';
export const FIREBASE_APPID = process.env.FIREBASE_APPID || '';
export const FIREBASE_MEASUREMENTID = process.env.FIREBASE_MEASUREMENTID || '';
