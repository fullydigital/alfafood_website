import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import { AUTH_TOKEN } from '../constants.js';


const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $email: String!,
    $password: String!
  ) {
    tokenAuth(
      email: $email,
      password: $password,
    ) {
      token
    }
  }
`

const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $email: String,
    $password: String,
    $firstname: String,
    $lastname: String
  ) {
    createUser(
      email: $email,
      password: $password,
      firstName: $firstname,
      lastName: $lastname,
      username: $firstname
    ) {
      token
    }
  }
`





const LoginPage = () => {
  const navigate = useNavigate();
  const [formState] = useState({
    login: true,
    email: '',
    password: '',
    name: ''
  });

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password
    },
    onCompleted: (data) => {
      localStorage.setItem(AUTH_TOKEN, data.tokenAuth.token);
      navigate('/franchiseMember');
    }
  });

  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      name: formState.name,
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTH_TOKEN, signup.token);
      navigate('/');
    }
  });

  return (
    <>
      <section className="bg-white dark:bg-gray-900 mb-52">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Zum Franchise einloggen</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Hier können Sie auf Ihre Franchise Daten zugreifen</p>
          <div className="space-y-8">
            <div>
              <label for="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-Mail</label>
              <input type="email" id="Email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="name@email.com" required />
            </div>
            <div>
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Passwort</label>
              <input type="password" id="password" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Passwort" required />
            </div>
            <button onClick={formState.login ? login : signup}
              className="py-3 px-5 text-sm font-medium text-center text-white bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Einloggen</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;