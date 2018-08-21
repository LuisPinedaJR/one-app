import React, { Component } from 'react';
import { UserContext } from './UserContext';

export default class User extends Component {
	render() {
		return (
			<UserContext.Consumer>
				{(context) => (
					<div>
						<h1>User Info</h1>
						<h3>name: {context.user.name}</h3>
						<h3>email: {context.user.email}</h3>
						<h3>Id: {context.user.id}</h3>
						<button onClick={context.logout}>Logout</button>
					</div>
				)}
				
			</UserContext.Consumer>
			
		);
	}
}

