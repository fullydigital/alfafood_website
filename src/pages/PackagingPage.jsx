import React, { useState, useEffect } from 'react';

export default function PackagingPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [packaging, setPackaging] = useState(null);

  const query = `
    {
      packagingCollection {
        items {
            header
            underline
            solutionsHeader
            solutionsText
            imagesCollection {
                items {
                    url
                }
            }
            video {
                url
            }
        }
    }
    }
  `

  useEffect(() => {
      window
        .fetch(`https://graphql.contentful.com/content/v1/spaces/o2s4pnwpfyn0/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: "Bearer Bo8-88iNgEersBWGDGZXpY19H-VtlAwVGYnfj3Go6_k",
          },
          // send the GraphQL query
          body: JSON.stringify({ query }),
        })
        .then((response) => response.json())
        .then(({ data, errors }) => {
          if (errors) {
            console.error(errors);
          }
  
          // rerender the entire component with new data
          setPackaging(data.packagingCollection.items[0])
          console.log(packaging);
        })
    }, [query]);
  
    if (!packaging) {
      return "Loading...";
    }

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 mx-auto">
      <div className="max-w-screen-xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">{packaging.header}</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">{packaging.underline}</p>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{packaging.solutionsHeader}</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-7">
        {packaging.solutionsText}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {packaging?.imagesCollection?.items.map((image, index) => (
          <img key={index} src={image.url} alt={`Packaging Image ${index + 1}`} className="w-full h-72 object-cover rounded-lg shadow-md" />
        ))}
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Schaue unseren Verpackungsprozess an</h2>
        <video src={packaging.video.url} controls className="w-full mx-auto h-96 rounded-lg shadow-md"></video>
      </div>
      </div>
      <div className="w-screen bg-black py-16 mb-12">
        <div className="text-center text-white">
          <h2 className="text-4xl font-extrabold">
            Individuelle <span className="underline decoration-red-500">Verpackungslösungen</span> mit Alfafood
          </h2>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 py-8 lg:py-16 px-4 mx-auto max-w-screen-md mt-8">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Kontaktieren Sie uns</h2>
        <form action="packaging_form.php" method="post" className="space-y-8">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vorname</label>
              <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Vorname" required />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nachname</label>
              <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Nachname" required />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Firma</label>
            <input type="text" id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Firma" required />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Betreff</label>
            <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Lass uns wissen, wie wir Dir helfen können" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nachricht</label>
            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Schreibe Deine Nachricht hier..." required></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Senden</button>
        </form>
      </div>
    </section>
  )
}
