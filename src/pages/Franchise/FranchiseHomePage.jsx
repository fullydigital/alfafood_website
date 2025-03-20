import React, { useState, useEffect } from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import background from '../../assets/aboutUsImage.jpg';
import { gql, useMutation, useQuery } from '@apollo/client';

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 }
};

const MARK_FILE_AS_VIEWED = gql`
    mutation MarkFileAsViewed($fileId: String!, $fileType: String!, $fileTitle: String!, $userId: Int!) {
      markFileAsViewed(fileId: $fileId, fileType: $fileType, fileTitle: $fileTitle, userId: $userId) {
        fileId
        userId
        fileTitle
        fileType
      }
    }
  `;

const ME_QUERY = gql`
  query Me {
    me {
      id
    }
  }
`;

export default function FranchiseHomePage() {
  const [open, setOpen] = useState(0);
  const [data, setData] = useState(null);
  const [divOpen, setDivOpen] = useState('');
  const [categories, setCategories] = useState([]);
  const [newsletters, setNewsletters] = useState([]);
  const [openNewsletter, setOpenNewsletter] = useState(null);
  const [markAsViewed] = useMutation(MARK_FILE_AS_VIEWED);
  const { data: meData } = useQuery(ME_QUERY);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const handleDivOpen = (value) => setDivOpen(divOpen === value ? 0 : value);
  const handleNewsletterOpen = (index) => setOpenNewsletter(openNewsletter === index ? null : index);
  const handleVideoStart = (fileId, fileTitle) => {
    markAsViewed({ variables: { fileId: fileId, fileType: 'Video', fileTitle: fileTitle, userId: meData.me.id } });
  }

  const handlePdfOpen = (fileId, fileTitle) => {
    markAsViewed({ variables: { fileId: fileId, fileType: 'PDF', fileTitle: fileTitle, userId: meData.me.id } });
  }

  const handleImageClick = (fileId, fileTitle) => {
    markAsViewed({ variables: { fileId: fileId, fileType: 'Bild', fileTitle: fileTitle, userId: meData.me.id } });
  }

  const query = `
    {
      franchiseCollection {
        items {
          id
          headline
          category
          contentCollection {
            items {
              url
              title
              contentType
              sys {
                id
              }
            }
          }
        }
      }
        newsletterCollection {
          items {
            heading
            content
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
        let frCategories = categories.concat(data.franchiseCollection.items.map(({category}) => (category)));
        let unique = [...new Set(frCategories)];
        setCategories(unique);
        setData(data.franchiseCollection.items);
        setNewsletters(data.newsletterCollection.items);
        console.log(data);
      })
  }, []);

  if (!data) {
    return 'Loading ...';
  }

  return (
    <div>
      <div className="w-full h-72 text-white flex bg-cover" style={{ backgroundImage: `url(${background})` }}>
        <h1 className='text-6xl font-semibold mx-auto my-auto'>Alfafood Franchise</h1>
      </div>
      <div className='flex flex-row gap-10 mt-20 mx-auto max-w-screen-xl flex-wrap justify-center lg:justify-start'>
        {categories.map((category, index) => {
          return (
            <div className='h-48 w-48 bg-red-600 rounded-lg' key={index} onClick={() => handleDivOpen(category)}>
              <p className='my-20 font-semibold text-white'>{category}</p>
            </div>
          )
        })}
      </div>


      <div className='w-3/4 mx-auto mt-12 mb-20 max-w-screen-2xl'>
        {
          data.map((item) => {
            return (
              item.category === divOpen ?
              <Accordion open={open === item.id} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(item.id)}>{item.headline}</AccordionHeader>
                <AccordionBody className="flex flex-row justify-center gap-4">
                  {
                    item.contentCollection.items.map((item, key) => {
                      return (
                        <div>
                          {
                              item.contentType === 'video/mp4' ? <video className="w-5/6 lg:h-300" controls
                                onPlay={() => handleVideoStart(item.sys.id, item.title)}>
                                <source src={item.url} type="video/mp4" />
                              </video> :
                              item.contentType === 'video/quicktime' ? <video className="w-5/6 lg:h-300 mx-auto" controls onPlay={() => handleVideoStart(item.sys.id, item.title)}>
                                <source src={item.url} type="video/mp4" />
                              </video>
                              :
                                item.contentType === 'application/pdf' ?
                                  <iframe src={item.url} className='h-300 w-200 mx-auto' title={key}
                                    onClick={() => handlePdfOpen(item.sys.id, item.title)}
                                  /> :
                                item.contentType === 'image/jpeg' || 'image/png' ? <img src={item.url} className='lg:h-[700px] mx-auto' alt=''
                                  onClick={() => handleImageClick(item.sys.id, item.title)}
                                />
                                : null
                          }
                        </div>
                      )
                    })
                  }
                </AccordionBody>
              </Accordion> : null
            )
          })
        }
      </div>

      <div className='w-3/4 mx-auto mt-12 mb-20 max-w-screen-2xl'>
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">Newsletter</h2>
        <div className="space-y-8">
        {newsletters.map((newsletter, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 cursor-pointer" onClick={() => handleNewsletterOpen(index)}>
                {newsletter.heading}
              </h3>
              {openNewsletter === index && (
                <>
                  <p className="text-gray-700 dark:text-gray-300 text-left">{newsletter.content}</p>
                  <hr className="my-4 border-gray-300 dark:border-gray-700" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
