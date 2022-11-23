declare module '*.scss';
declare module '*.sass';
declare module '*.json';

declare interface User {
	email?: string;
	password?: string;
}

declare interface Contact {
	number: string
	name: string
	lastCall: string
}
