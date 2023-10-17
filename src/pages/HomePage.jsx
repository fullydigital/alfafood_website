import React, { useState, useEffect } from 'react'
import Hero from '../components/Home/Hero'
import MoreAbout from '../components/Home/MoreAbout'
import Choosing from '../components/Home/Choosing'
import Questions from '../components/Home/Questions'
import Career from "../components/Home/Career";
import Filialen from '../components/Home/Filialen'

export default function HomePage() {
  const [page, setPage] = useState(null);
  const [locationText, setLocationText] = useState(null);

  const query = `
  {
    aboutUsHomeTextCollection {
      items {
        headline
        text
        image {
          url
        }
      }
    }
    locationHomeTextCollection {
      items {
        headline
        subline
        text
      }
    }
  }
  `;

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
        setPage(data.aboutUsHomeTextCollection.items[0])
        setLocationText(data.locationHomeTextCollection.items[0])
      })
  }, [query]);

  if (!page) {
    return "Loading...";
  }

  return (
    <>
      <Hero />
      <MoreAbout data={page} />
      <Choosing />
      <Filialen data={locationText} />
      <Career />
      <Questions />
    </>
  )
}
