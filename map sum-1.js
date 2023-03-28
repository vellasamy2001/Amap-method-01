//map method first sum//
			
			
			const users = [
			  {
				first_name: 'Mike',
				last_name: 'Sheridan'
			  },
			  {
				first_name: 'Tim',
				last_name: 'Lee'
			  },
			  {
				first_name: 'John',
				last_name: 'Carte'
			  }
			  ];
			    const userslist=users.map(function (users){
				return users.first_name+users.last_name;
				});
				console.log(userslist);