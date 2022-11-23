import React, { type FC, useEffect, Fragment, useState } from 'react';

type Props = {
	children: string;
	speed?: number;
};

const Typewriter: FC<Props> = ({ children, speed = 500 }) => {
	const [text, setText] = useState<string>(children[0]);

	useEffect(() => {
		let i = 1;
		if (text === children[0]) {
			const ID = setInterval(() => {
				setText(prev => {
					i++;
					return prev + children.charAt(i - 1);
				});
				if (children.charAt(i) === '') clearInterval(ID);
			}, speed);
		}
	}, []);

	return <Fragment>{text}</Fragment>;
};

export default Typewriter;
