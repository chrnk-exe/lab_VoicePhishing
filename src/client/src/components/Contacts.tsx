import React from 'react';
import { Box, TableContainer, Table, TableRow, TableCell, Paper, TableHead } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import {useTranslation} from 'react-i18next';


const Contacts = () => {
	const { t } = useTranslation('translation', {keyPrefix: 'contacts'});

	return (
		<Box
			display="flex"
			justifyContent="flex-start"
			alignItems="flex-start"
			flexDirection="column">
			<Box
				display="flex"
				justifyContent="flex-start"
				alignItems="center"
				gap={2}
				sx={{
					width: '100%',
					bgcolor: 'primary.main',
					color: '#FFFFF1',
					fontSize: '3em',
					height: '60px',
					p: 2,
					boxSizing: 'border-box'
				}}>
				<ContactsIcon />
				{t('Contacts')}
			</Box>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>{''}</TableCell>
							<TableCell>{}</TableCell>
						</TableRow>
					</TableHead>
				</Table>
			</TableContainer>

		</Box>
	);
};

export default Contacts;
