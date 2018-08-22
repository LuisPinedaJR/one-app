import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Toggle } from 'Utilities';
import { Modal } from 'Elements';
import User from './User';
import UserProvider from './UserProvider';


class App extends Component {
	render() {
		return (
			<UserProvider>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>

					<User>

					</User>

					<Toggle>
						{({on, toggle})=>(
							<Fragment>
								<button onClick={toggle}>LOGIN</button>
								<Modal on={on} toggle={toggle}>
									<h1>Still in a Modal!</h1>
								</Modal>
							</Fragment>
						)}
					</Toggle>
				</div>
			</UserProvider>
		);
	}
}

export default App;

