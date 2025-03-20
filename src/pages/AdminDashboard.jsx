import { useQuery } from '@apollo/client';
import React from 'react';
import { gql } from '@apollo/client';

const GET_FILE_VIEWS = gql`
  query GetFileViews {
    allFileViews {
      user {
        id
        firstName
        lastName
      }
      fileId
      fileTitle
      fileType
      watchedAt
    }
  }
`;

export const AdminDashboard = () => {
  const { loading, error, data } = useQuery(GET_FILE_VIEWS);

  if (loading) return <p>Lade Daten...</p>;
  if (error) return <p>Fehler: {error.message}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Datei-Ansichten</h2>
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6">Nutzer</th>
              <th className="py-3 px-6">Datei</th>
              <th className="py-3 px-6">Typ</th>
              <th className="py-3 px-6">Angesehen am</th>
            </tr>
          </thead>
          <tbody>
            {
              data.allFileViews.map((view) => (
                <tr key={`${view.user.id}-${view.fileId}`} className="border-b border-gray-200">
                  <td className="py-3 px-6">{view.user.firstName} {view.user.lastName}</td>
                  <td className="py-3 px-6">{view.fileTitle}</td>
                  <td className="py-3 px-6">{view.fileType}</td>
                  <td className="py-3 px-6">{new Date(view.watchedAt).toLocaleString()}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
