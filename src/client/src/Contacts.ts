import randomDate from './formatDate';
import byField from './byField';

const sortedArrayByLastCall = (contacts: Contact[]): Contact[] => {
	const withTime = contacts
		.filter(contact => contact.lastCall.split(':').length === 2)
		.sort(byField('lastCall'));
	const withYesterday = contacts.filter(
		contact => contact.lastCall === 'Yesterday',
	);
	const withDate = [...contacts]
		.filter(contact => contact.lastCall.split('/').length === 2)
		.sort(byField('lastCall', true));
	return [...withTime, ...withYesterday, ...withDate];
};

const contacts: Contact[] = [
	{
		name: 'Boss',
		number: '(663) 914-9128',
		lastCall: '13:37',
	},
	{
		name: 'Accountant',
		number: '(779) 913-1587',
		lastCall: randomDate(),
	},
	{
		name: 'Product Manager',
		number: '(122) 824-1298',
		lastCall: randomDate(),
	},
	{
		name: 'System Administrator',
		number: '(663) 854-2851',
		lastCall: randomDate(),
	},
	{
		name: 'Marketing',
		number: '(122) 235-6825',
		lastCall: randomDate(),
	},
	{
		name: 'Supply manager',
		number: '(097) 073-2311',
		lastCall: randomDate(),
	},
	{
		name: 'HR',
		number: '(122) 085-3454',
		lastCall: randomDate(),
	},
];

export const sortedByName = [...contacts].sort(byField('name'));
// export const sortedByLastCall = [...contacts].sort(byField('lastCall'));
export const sortedByLastCall = sortedArrayByLastCall([...contacts]);
console.log('Contacts', contacts);
console.log('sortedByName', sortedByName);
console.log('sortedByLastCall', sortedByLastCall);
export default contacts;
