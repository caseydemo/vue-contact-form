Vue.component( 'contactLine', {
	template : '<li>{{ name }} {{ phoneNumber }}</li>',

	props : [ 'id', 'name', 'phoneNumber' ]
});


var contactList = new Vue( {

	el : '#contactList',

	data : {
		newName : '',
		newPhoneNumber : '',
		contacts : [
			{
				id : 1,
				name : 'Albus Dumbledore',
				phoneNumber : '859-123-4567'
			},
			{
				id : 2,
				name : 'Minerva McGonagall',
				phoneNumber : '606-234-9876'
			},
			{
				id : 3,
				name : 'Severus Snape',
				phoneNumber : '502-444-1010'
			},
		],
		nextContactId : 4
	},

	methods : {
		addContact : addContact
	}

});

function addContact() {
	this.contacts.push(
		{
			id : this.nextContactId++,
			name : this.newName,
			phoneNumber : this.newPhoneNumber
		}
	);

	this.newName = '';
	this.newPhoneNumber = '';
}