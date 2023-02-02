import React, { useState, useEffect, createContext } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './AuthService';

import Login from '../pages/LoginPage';
import { LoginPage } from '../pages';


const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [ currentUser, setCurrentUser ] = useState(undefined);

	useEffect(() => {
		const checkLoggedIn = async () => {
			let cuser = isAuthenticated();
			if (cuser === null) {
				localStorage.setItem('user', '');
				cuser = '';
			}

			setCurrentUser(cuser);
		};

		checkLoggedIn();
	}, []);

	console.log('usercontext', currentUser);

	return (
		<UserContext.Provider value={[currentUser, setCurrentUser]}>
			{children}
		</UserContext.Provider>
	);
};


export default UserContext;