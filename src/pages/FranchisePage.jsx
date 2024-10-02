import React from 'react'

export default function FranchisePage({franchise}) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">{franchise.headline}</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">{franchise.subline}</p>
        <form action="franchise_email.php" method="post" class="space-y-8">
          <div className='flex flex-row justify-between'>
            <div>
              <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vorname</label>
              <input type="text" id="firstname" name="firstname" className="shadow-sm pl-4 pr-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Vorname" required />
            </div>
            <div>
              <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nachname</label>
              <input type="text" id="lastname" name="lastname" className="shadow-sm pl-4 pr-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Nachname" required />
            </div>
          </div>
          <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Firma</label>
            <input type="text" id="company" name="company" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Firmenname" required />
          </div>
          <div className='flex flex-row justify-between'>
            <div>
              <label for="street" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Straße</label>
              <input type="text" id="street" name="street"  class="shadow-sm pl-4 pr-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Musterstraße 34" required />
            </div>
            <div>
              <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">PLZ / Ort</label>
              <input type="text" id="location" name="location" class="shadow-sm pl-4 pr-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="000000 Ortsname" required />
            </div>
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-Mail</label>
            <input type="email" id="email" name="email" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="beispiel@adresse.com" required />
          </div>
          <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefon</label>
            <input type="number" id="phone" name="phone" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Telefonnummer" required />
          </div>
          <div class="sm:col-span-2">
            <label for="experience" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Welche Erfahrungen haben Sie im Bereich Lebensmittelgroßhandel und Selbstständigkeit?</label>
            <textarea id="experience" name="experience" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Nachricht..."></textarea>
          </div>
          <div>
            <label for="money" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Über wie viel Eigenkapital verfügen Sie zum Start in Ihre Selbstständigkeit?</label>
            <input type="number" id="money" name="money" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Verfügbares Eigenkapital" required />
          </div>
          <div class="sm:col-span-2">
            <label for="questions" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Haben Sie Fragen an uns?</label>
            <textarea id="questions" name="questions" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Nachricht..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Nachricht senden</button>
        </form>
      </div>
      <div className='w-full bg-black text-white h-auto'>
        <div className='md:text-6xl text-left lg:text-center mx-auto text-5xl w-3/4 md:w-1/2 py-10 uppercase flex flex-col font-bold justify-center leading-17 break-normal decoration-8'>
          <h3 className='mb-4'>Deine eigene Alfafood Filiale.</h3>
          <h3>Dein mega <span className='underline decoration-red-700'>Erfolg</span>.</h3>
        </div>
      </div>
    </section>
  )
}
