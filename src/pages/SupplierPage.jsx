import React, { useState } from 'react'

export default function SupplierPage() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [local, setLocal] = useState('');
  const [company, setCompany] = useState('');
  const [homepage, setHomepage] = useState('');
  const [branche, setBranche] = useState('');

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Werde Lieferant</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Noch heute</p>
          <form action="lieferant_form.php" method="post" className="space-y-8">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label for="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vorname</label>
                <input type="text" id="firstName" name="firstName" value={firstName} onChange={(value) => setFirstName(value.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Vorname" required />
              </div>
              <div className="w-1/2">
                <label for="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nachname</label>
                <input type="text" id="lastName" name="lastName" value={lastName} onChange={(value) => setLastName(value.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Nachname" required />
              </div>
            </div>
            <div>
              <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Firma</label>
              <input type="text" id="company" name="company" value={company} onChange={(value) => setCompany(value.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Firma" required />
            </div>
            <div>
              <label for="homepage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Webseite</label>
              <input type="text" id="homepage" name="homepage" value={homepage} onChange={(value) => setHomepage(value.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Webseite" required />
            </div>
            <div>
              <label for="branche" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Branche</label>
              <input type="text" id="branche" name="branche" value={branche} onChange={(value) => setBranche(value.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Branche" required />
            </div>
            <div>
              <label for="street" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Straße</label>
              <input type="text" id="street" name="street" value={street} onChange={(value) => setStreet(value.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Straße" required />
            </div>
            <div>
              <label for="local" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ort</label>
              <input type="text" id="local" name="local" value={local} onChange={(value) => setLocal(value.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Ort" required />
            </div>
            <div>
              <label for="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-Mail</label>
              <input type="email" id="Email" name="Email" value={email} onChange={(value) => setEmail(value.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="name@email.com" required />
            </div>
            <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Betreff</label>
              <input type="text" id="subject" name="subject" value={subject} onChange={(value) => setSubject(value.target.value)} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Lass uns wissen, wie wir Dir helfen können" required />
            </div>
            <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nachricht</label>
              <textarea id="message" name="message" value={message} onChange={(value) => setMessage(value.target.value)} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Schreibe Deine Nachricht hier..." required></textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Senden</button>
          </form>
        </div>
      </section>
    </>
  )
}
