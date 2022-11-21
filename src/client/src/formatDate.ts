export default (date: Date): string => {
	return [Math.ceil(Math.random() * 13 + 9), date.getMinutes()].join(':');
};
