declare module '*.scss';
declare module '*.sass';
declare module '*.json';

declare interface User {
	email: string | null | undefined;
	password: string | null | undefined;
}

declare interface Contact {
	number: string
	name: string
	lastCall: string
}
