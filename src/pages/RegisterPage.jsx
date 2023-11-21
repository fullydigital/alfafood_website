import React, { useState } from 'react'
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const REGISTER_MUTATION = gql`
  mutation SignupMutation(
    $email: String,
    $password: String,
    $firstname: String,
    $lastname: String
    $username: String
  ) {
    createUser(
      email: $email,
      password: $password,
      firstName: $firstname
      lastName: $lastname
      username: $username
    ) {
      token
    }
  }
`

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const username = "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] && 15 >> c / 4).toString(16)
    );

  const [register] = useMutation(REGISTER_MUTATION, {
    variables: {
      email: email,
      password: password,
      firstname: firstName,
      lastname: lastName,
      username: username
    },
    onCompleted: (data) => {
      navigate('/');
    }
  });
  
  return (
    <>
    <section className="bg-white dark:bg-gray-900 mb-52">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Zum Franchise registrieren</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Hier können Sie sich registrieren und anschließend auf die Franchise Inhalte zugreifen</p>
        <div className="space-y-8">
          <div>
            <label for="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-Mail</label>
            <input onChange={(value) => setEmail(value.target.value)} type="email" id="Email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="name@email.com" required />
          </div>
          <div>
            <label for="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vorname</label>
            <input onChange={(value) => setFirstName(value.target.value)} type="text" id="firstname" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="name@email.com" required />
          </div>
          <div>
            <label for="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nachname</label>
            <input onChange={(value) => setLastName(value.target.value)} type="text" id="lastname" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="name@email.com" required />
          </div>
          <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Passwort</label>
            <input onChange={(value) => { setPassword(value.target.value) }} type="password" id="password" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Passwort" required />
          </div>
          <button onClick={register}
            className="py-3 px-5 text-sm font-medium text-center text-white bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Registrieren</button>
        </div>
      </div>
    </section>
    </>
  )
}
