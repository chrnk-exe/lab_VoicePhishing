import React, { type FC } from 'react';
import { Box, ClickAwayListener, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

type Props = {
	handleCallOn(): void;
	nextStep(): void;
};

const Finish: FC<Props> = ({ handleCallOn, nextStep }) => {
	const { t } = useTranslation();

	const onClickAway = () => {
		nextStep();
		handleCallOn();
	};

	return (
		<ClickAwayListener onClickAway={onClickAway}>
			<Box onClick={onClickAway}>
				<Typography variant="h4" sx={{ color: '#FFFFF1' }}>
					{t('talk_ended')}
				</Typography>
			</Box>
		</ClickAwayListener>
	);
};

export default Finish;
