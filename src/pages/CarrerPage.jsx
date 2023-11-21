import React from 'react';
import Select from 'react-select';
import {BLOCKS, MARKS} from '@contentful/rich-text-types';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';


const Bold = ({ children }) => <span className="font-bold">{children}</span>;

const Text = ({ children }) => <p className="mb-6">{children}</p>;

const options = {
        renderMark: {
                [MARKS.BOLD]: (text) => <Bold>{text}</Bold>
        },
        renderNode: {
                [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>
        }
};

export default function CarrerPage({ data, locations }) {

        const optionss = [
                { value: '1', label: 'Verkäufer' },
                { value: '2', label: 'Kaufmann/-frau im Großhandel' },
                { value: '3', label: 'Fachlagerist' }
        ]

        const filialen = locations.map((filiale, index) => ({ value: index, label: filiale.name }))

        return (
                <div className="w-10/12 lg:w-11/12 mx-auto flex flex-col lg:flex-row lg:justify-center">
                        <div className="lg:basis-1/2 xl:basis-1/3 my-8 lg:my-16 text-left lg:pr-10">
                                <h2 className="text-3xl font-bold mb-6 uppercase">{data.headline}</h2>
                                <h3 className="text-xl mb-10 font-semibold uppercase">{data.subline}</h3>
                                {documentToReactComponents(data.text.json, options)}
                        </div>
                        <div className="xl:basis-1/2">
                                <section class="bg-gray-200 dark:bg-gray-900 mb-10 mt-8 lg:mt-16">
                                        <div class="py-8 lg:py-16 px-4 mx-auto text-left max-w-screen-md">
                                                <h2 class="mb-4 xl:mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Bewerbung</h2>
                                                <form action="../formScripts/career_email.php" method="post" class="space-y-8">
                                                        <div>
                                                                <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vorname</label>
                                                                <input type="text" id="firstname" name="firstname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Vorname" required />
                                                        </div>
                                                        <div>
                                                                <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nachname</label>
                                                                <input type="text" id="lastname" name="lastname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Nachname" required />
                                                        </div>
                                                        <div>
                                                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-Mail</label>
                                                                <input type="email" id="email" name="email" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="name@email.com" required />
                                                        </div>
                                                        <div>
                                                                <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Filiale</label>
                                                                <Select options={filialen} id="location" name="location" />
                                                        </div>
                                                        <div>
                                                                <label for="professional" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stelle</label>
                                                                <Select options={optionss} id="professional" name="professional" />
                                                        </div>
                                                        <div class="sm:col-span-2">
                                                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Nachricht</label>
                                                                <textarea id="message" name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Nachricht..."></textarea>
                                                        </div>
                                                        <div>
                                                                <label for="letter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Anschreiben</label>
                                                                <input type="file" id="letter" name="letter" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" required />
                                                        </div>
                                                        <div>
                                                                <label for="cv" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lebenslauf</label>
                                                                <input type="file" id="cv" name="cv" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" required />
                                                        </div>
                                                        <div>
                                                                <label for="zeugnisse" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Zeugnisse</label>
                                                                <input type="file" id="zeugnisse" name="zeugnisse" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" required />
                                                        </div>
                                                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Nachricht senden</button>
                                                </form>
                                        </div>
                                </section>
                        </div>
                </div>
        )
}
