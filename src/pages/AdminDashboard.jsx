import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
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
  const [userFilter, setUserFilter] = useState('');
  const [fileTitleFilter, setFileTitleFilter] = useState('');

  if (loading) return <p>Lade Daten...</p>;
  if (error) return <p>Fehler: {error.message}</p>;

  const filteredData = data.allFileViews.filter(view => {
    const userFullName = `${view.user.firstName} ${view.user.lastName}`.toLowerCase();
    const fileTitle = view.fileTitle ? view.fileTitle.toLowerCase() : '';
    return userFullName.includes(userFilter.toLowerCase()) && fileTitle.includes(fileTitleFilter.toLowerCase());
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Datei-Ansichten</h2>
      <div className="w-full max-w-4xl mb-4">
        <input
          type="text"
          placeholder="Filter by user"
          value={userFilter}
          onChange={(e) => setUserFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Filter by file title"
          value={fileTitleFilter}
          onChange={(e) => setFileTitleFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full"
        />
      </div>
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
              filteredData.map((view) => (
                <tr key={`${view.user.id}-${view.fileId}`} className="border-b border-gray-200">
                  <td className="py-3 px-6">{view.user.firstName} {view.user.lastName}</td>
                  <td className="py-3 px-6">{view.fileTitle || 'No Title'}</td>
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
