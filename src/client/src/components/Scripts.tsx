import React, { type FC, useEffect } from 'react';
import { Box, Typography, IconButton, Button, Avatar } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
	nextStep,
	incrementResult,
	setCallState,
} from '../store/slices/scriptSlice';
import { useTranslation } from 'react-i18next';
import Typewriter from './Typewriter';
import CallIcon from '@mui/icons-material/Call';

const rightAnswers: (0 | 1)[] = [0, 1, 0, 1, 0];

type Props = {
	openModal(): void;
	showFlag(): void;
};

const Scripts: FC<Props> = ({ openModal, showFlag }) => {
	const step = useAppSelector(state => state.script.step);
	const result = useAppSelector(state => state.script.result);
	const callState = useAppSelector(state => state.script.callState);
	const dispatch = useAppDispatch();
	const handleCallOff = () => dispatch(setCallState(false));
	const handleCallOn = () => dispatch(setCallState(true));

	const answerHandler = async (choice: 0 | 1) => {
		if (choice === rightAnswers[step - 1]) dispatch(incrementResult());
		setTimeout(() => {
			dispatch(nextStep());
			handleCallOn();
		}, Math.random() * 1000 + 500);
	};

	useEffect(() => {
		if (step === 6) {
			openModal();
			if (result === 5) {
				showFlag();
			}
		}
	}, [step, result]);

	const { t } = useTranslation('scripts');
	if (step !== 6)
		return (
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="space-evenly"
				alignItems="center"
				sx={{
					widht: '90%',
					height: '94%',
					textAlign: 'center',
					bgcolor: 'primary.light',
					borderRadius: '20px',
					flexGrow: 1,
					mx: 3,
				}}>
				{callState ? (
					<React.Fragment>
						<Box>
							<Typography variant="h3">{t('call')}</Typography>
							<Typography variant="h5">
								{t(`${step}.number`)}
							</Typography>
						</Box>
						<Box>
							<IconButton
								onClick={handleCallOff}
								sx={{
									width: '100px',
									height: '100px',
									bgcolor: '#00FF00',
									'&:hover': {
										bgcolor: '#00FF00',
									},
								}}>
								<CallIcon
									sx={{ fontSize: '60px' }}
									htmlColor="#FFFFFF"
								/>
							</IconButton>
						</Box>
					</React.Fragment>
				) : (
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="space-between"
						sx={{ height: '100%', width: '100%' }}>
						<Box
							display="flex"
							flexDirection="column"
							justifyContent="center"
							alignItems="center"
							gap={2}
							padding={3}>
							<Avatar alt="avatar" />
							<Typography variant="h5" sx={{ color: '#FFFFF1' }}>
								{t(`${step}.number`)}
							</Typography>
						</Box>
						<Box
							display="flex"
							justifyContent="flex-start"
							alignItems="flex-start"
							padding={2}
							gap={2}
							sx={{
								textAlign: 'left',
							}}>
							<Avatar alt="avatar" />
							<Typography
								variant="h6"
								sx={{
									position: 'relative',
									bgcolor: '#FFFFF1',
									borderRadius: '0 20px 20px 20px',
									p: 2,
									mt: 2,
									zIndex: '1',
									'&:before': {
										content: '\'\'',
										position: 'absolute',
										left: '-12px',
										top: '0px',
										border: '15px solid transparent',
										borderRight: '10px solid #FFFFFF',
										borderTop: '16px solid #FFFFFF',
										zIndex: '0',
									},
								}}>
								<Typewriter speed={50}>{t(`${step}.message`)}</Typewriter>
							</Typography>
						</Box>
						<Box
							display="flex"
							flexDirection="column"
							justifyContent="center"
							alignItems="flex-start"
							gap={2}
							padding={2}>
							<Typography variant="h6" sx={{ color: '#FFFFF1' }}>
								{t('variants')}
							</Typography>
							<Button
								onClick={() => answerHandler(1)}
								variant="contained"
								color="secondary"
								sx={{
									bgcolor: '#FFFFF1',
									color: '#000',
									'&:hover': {
										bgcolor: 'lightgrey',
									},
									width: '100%',
								}}>
								{t(`${step}.answers.True`)}
							</Button>
							<Button
								onClick={() => answerHandler(0)}
								variant="contained"
								color="secondary"
								sx={{
									bgcolor: '#FFFFF1',
									color: '#000',
									'&:hover': {
										bgcolor: 'lightgrey',
									},
									width: '100%',
								}}>
								{t(`${step}.answers.False`)}
							</Button>
						</Box>
					</Box>
				)}
			</Box>
		);
	else
		return (
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="space-evenly"
				alignItems="center"
				sx={{
					widht: '90%',
					height: '94%',
					textAlign: 'center',
					bgcolor: 'primary.light',
					borderRadius: '20px',
					flexGrow: 1,
					mx: 3,
				}}>
				Web App for IP Telephony
			</Box>
		);
};

export default Scripts;
