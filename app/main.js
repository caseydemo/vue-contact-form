Vue.component( 'contactLine', {
	template : '<th>\
				<tbody> <td><button v-on:click="removeContact( id )" >X</button></td> \
	 			<td > {{ name }} </td> \
	 			<td >{{ phoneNumber }}</td>\
	 			<td >{{ email }}</td>\
	 			</tbody></th>',

	props : [ 'id', 'name', 'phoneNumber', 'email', 'removeContact' ]
});


var contactList = new Vue( {

	el : '#contactList',

	data : {
		newName : '',
		newPhoneNumber : '',
		newEmail : '',
		contacts : [
			{
				id : 1,
				name : 'Albus Dumbledore',
				phoneNumber : '859-123-4567',
				email : 'bigdog@hotmail.com'
			},
			{
				id : 2,
				name : 'Minerva McGonagall',
				phoneNumber : '606-234-9876',
				email : 'bigdog@hotmail.com'
			},
			{
				id : 3,
				name : 'Severus Snape',
				phoneNumber : '502-444-1010',
				email : 'bigdog@hotmail.com'
			},
		],
		nextContactId : 4
	},

	methods : {
		addContact : addContact,
		removeContact : removeContact,
		findContact : findContact,
		validatePhoneNumber : validatePhoneNumber
	}

});

function validatePhoneNumber() {
	var phoneRe = /^[0-9\-\+\s\(\)]*$/;

	var isValid = phoneRe.test( this.newPhoneNumber );

	console.log( 'validatePhoneNumber-isalid:', isValid );

	return isValid;
}

function addContact() {
	if ( ! this.validatePhoneNumber( this.newPhoneNumber ) ) {
		return;
	}
	else {
		
		this.contacts.push(
			{
				id : this.nextContactId++,
				name : this.newName,
				phoneNumber : this.newPhoneNumber,
				email : this.newEmail
			}
		);

		this.newName = '';
		this.newPhoneNumber = '';
		this.newEmail = '';
	}

	
}

function removeContact( id ) {
	var contactIndex = this.findContact( id );
	this.contacts.splice( contactIndex, 1 );
}

function findContact( id ) {
	return this.contacts.findIndex( 
		function( contact ) { 
			return ( id === contact.id ); 
		} 
	);
}