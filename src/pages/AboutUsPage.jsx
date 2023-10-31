import React, {useState, useEffect} from 'react'
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

export default function AboutUsPage() {
  const [data, setData] = useState(null);

  const query = `
    {
      aboutUsCollection {
      items {
        headline
        text {
          json
        }
        image {
          url
        }
        video {
          url
        }
        heroImage {
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
        setData(data.aboutUsCollection.items[0])
      })
  }, [query]);

  if (!data) return 'Loading...'

  return (
    <>
      {/* Hero Start */}
      <div>
        <img className='md:h-200 2xl:h-300 w-screen object-cover' src={data.heroImage.url} alt="Familie Burcak" />
      </div>
      {/* Hero End */}
      {/* About Family start */}
      <div className='flex flex-col-reverse 2xl:flex-row mt-12 lg:mt-20 mb-20 lg:w-10/12 xl:w-9/12 mx-auto'>
        <div className='basis-1/2 lg:basis-full my-auto'>
          <img className='object-cover h-80 w-80 lg:h-3/5 lg:w-3/5 mx-auto lg:ml-20' src={data.image.url} alt="Familie Burcak" />
        </div>
        <div className='basis-5/6 w-5/6 lg:w-full flex flex-col items-start mx-auto align-middle mb-12 lg:mb-0 2xl:my-auto'>
          <h3 className='text-4xl lg:text-5xl text-left mx-auto lg:mx-0 font-bold mb-8'>{data.headline ? data.headline : 'Familie Burcak'}</h3>
          <p className='text-left mx-auto lg:mr-20 leading-7'>{documentToReactComponents(data.text.json, options)}</p>
        </div>
      </div>
      {/* About Family end */}
      <div className="w-full bg-gray-400 p-12 mb-20">
        <div className="w-11/12 flex justify-center mx-auto">
          <video className="w-5/6 lg:h-300" controls>
            <source src={data.video.url} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  )
}
