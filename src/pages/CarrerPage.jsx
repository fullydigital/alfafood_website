import React from 'react';
import Select from 'react-select';
import locations from "../data/locations";

export default function CarrerPage() {

        const options = [
                { value: 'nueremberg', label: 'Verkäufer' },
                { value: 'augsburg', label: 'Kaufmann/-frau im Großhandel' },
                { value: 'ingolstadt', label: 'Fachlagerist' }
        ]

        const filialen = locations.map((filiale) => ({ value: filiale.id, label: filiale.name }))

        return (
                <div className="w-10/12 lg:w-11/12 mx-auto flex flex-col lg:flex-row lg:justify-center">
                        <div className="lg:basis-1/2 xl:basis-1/3 my-8 lg:my-16 text-left lg:pr-10">
                                <h2 className="text-3xl font-bold mb-6">WIR SUCHEN DICH</h2>
                                <h3 className="text-xl mb-10 font-semibold">FÜR DIE KÜCHE. FÜR DEN SERVICE. UND VIELLEICHT NOCH MEHR!</h3>

                                <p className="mb-6">Bist Du bona’me? Oder einfach Du selbst? Dann genau brauchen wir Dich als #Gastgeber #Glücklichmacher #Mezzestar #Supershaker. Wir wachsen und sind immer auf der Suche nach Talenten und neuen Familienmitgliedern in den Bereichen Service, Küche und Bar.</p>

                                <p className="mb-6 font-semibold">Was uns am Herzen liegt</p>

                                <p className="mb-6">Deine Leidenschaft, Deine Begeisterung und Deine Offenheit. Und dass Du wachsen möchtest, mit uns und über Dich hinaus. Wir wünschen uns keine Perfektionisten, wir suchen Menschen mit Herz und Motivation. Auch Quereinsteiger mit und ohne Gastro-Erfahrung sind herzlich willkommen.</p>

                                <p className="mb-6 font-semibold">Was wir bieten können?</p>

                                <p className="mb-6">Neben den selbstverständlichen Goodies vor allem ein Umfeld mit Kreativität und Potential. Wir verändern uns gerne, lernen, schmieden Pläne und haben dabei viel Spaß. Wir sind ein Unternehmen, das sich dynamisch entwickelt, es stehen Dir also viele Türen offen. Mit der Vision von „unserem Haus“ haben wir Großes vor. Sei auch Du ein Teil dieser Vision und lass‘ uns gemeinsam Deinen Platz in unserer Familie finden.</p>

                                <p>Nutze einfach das Kontaktformular und sende uns deine Daten zu, wir melden uns schnellstmöglich.</p>
                        </div>
                        <div className="xl:basis-1/2">
                                <section class="bg-gray-200 dark:bg-gray-900 mb-10 mt-8 lg:mt-16">
                                        <div class="py-8 lg:py-16 px-4 mx-auto text-left max-w-screen-md">
                                                <h2 class="mb-4 xl:mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Bewerbung</h2>
                                                <form action="#" class="space-y-8">
                                                        <div>
                                                                <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vorname</label>
                                                                <input type="text" id="firstname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Vorname" required />
                                                        </div>
                                                        <div>
                                                                <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nachname</label>
                                                                <input type="text" id="lastname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Nachname" required />
                                                        </div>
                                                        <div>
                                                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-Mail</label>
                                                                <input type="email" id="email" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="name@email.com" required />
                                                        </div>
                                                        <div>
                                                                <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Filiale</label>
                                                                <Select options={filialen} id="location" />
                                                        </div>
                                                        <div>
                                                                <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stelle</label>
                                                                <Select options={options} id="location" />
                                                        </div>
                                                        <div class="sm:col-span-2">
                                                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Nachricht</label>
                                                                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Nachricht..."></textarea>
                                                        </div>
                                                        <div>
                                                                <label for="letter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Anschreiben</label>
                                                                <input type="file" id="letter" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" required />
                                                        </div>
                                                        <div>
                                                                <label for="cv" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lebenslauf</label>
                                                                <input type="file" id="cv" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" required />
                                                        </div>
                                                        <div>
                                                                <label for="zeugnisse" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Zeugnisse</label>
                                                                <input type="file" id="zeugnisse" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" required />
                                                        </div>
                                                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Nachricht senden</button>
                                                </form>
                                        </div>
                                </section>
                        </div>
                </div>
        )
}
