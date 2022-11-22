export default (): string => {
	const ch = Math.round(Math.random() * 2);
	switch (ch) {
	case 0:
		return 'Yesterday';
	case 1:
		return [
			Math.ceil(Math.random() * 11 + 1),
			Math.ceil(Math.random() * 30 + 1),
		].join('/');
	case 2: {
		const minutes = Math.ceil(Math.random() * 60).toString();
		return [
			Math.ceil(Math.random() * 13 + 9),
			minutes.length > 1 ? minutes : '0' + minutes,
		].join(':');
	}
	}
	return 'Date error';
};
