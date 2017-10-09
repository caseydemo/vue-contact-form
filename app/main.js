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
		]
	},

	methods : {

	}

});