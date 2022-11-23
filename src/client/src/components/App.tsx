import React, { useState } from 'react';
import { Box, Modal, Fade, Typography, Button } from '@mui/material';
import Scripts from './Scripts';
import { useTranslation } from 'react-i18next';

type Scripts = 1 | 2 | 3 | 4 | 5;

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

function App() {
	const [showFlag, setShowFlag] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);
	const { t } = useTranslation('flag');
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleToggle = () => setOpen(prev => !prev);

	return (
		<Box
			display="grid"
			gridTemplateColumns="1fr 2fr"
			sx={{ width: '100%', boxSizing: 'border-box' }}>
			<Box
				sx={{
					width: '90%',
					height: '300px',
					border: '1px solid darkgrey',
					p: 1,
					m: 1,
					boxSizing: 'border-box',
				}}>
				Тут должна быть гифка
				<Button onClick={handleToggle}>Open Modal</Button>
			</Box>
			<Box
				display="flex"
				alignItems="center"
				sx={{
					width: '100%',
					height: '100vh',
					// border: '1px solid darkgrey',
					boxSizing: 'border-box',
				}}>
				<Scripts
					openModal={handleOpen}
					showFlag={() => setShowFlag(true)}
				/>
				<Modal
					open={open}
					onClose={handleClose}
					// closeAfterTransition
					// BackdropComponent={Backdrop}
					// BackdropProps={{
					// 	timeout: 500,
					// }}>
				>
					<Fade in={open}>
						<Box display='flex' flexDirection='column' justifyContent='center' alignItems='flexStart' sx={style}>
							<Typography
								id="transition-modal-title"
								variant="h6"
								component="h2">
								{showFlag ? t('good') : t('bad')}
							</Typography>
							<Typography
								id="transition-modal-description"
								sx={{ mt: 2 }}>
								{showFlag ? t('flag') : t('no_flag')}
							</Typography>
							{!showFlag && (
								<Button
									variant='outlined'
									sx={{alignSelf: 'center'}}
									onClick={() => window.location.reload()}>
									Restart
								</Button>
							)}
						</Box>
					</Fade>
				</Modal>
			</Box>
		</Box>
	);
}

export default App;
