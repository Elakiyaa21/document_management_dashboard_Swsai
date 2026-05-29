import { useEffect, useState } from "react";import API from "../services/api";

function DocumentTable() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await API.get("/documents");
        setDocuments(response.data);
      } catch (error) {
        console.error("Error fetching documents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  if (loading) {
    return (
      <div className="bg-white mt-6 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">
          Document Library
        </h2>
        <p>Loading documents...</p>
      </div>
    );
  }

  return (
    <div className="bg-white mt-6 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">
        Document Library
      </h2>

      {documents.length === 0 ? (
        <p>No documents found.</p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">File Name</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Size</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Upload Date</th>
            </tr>
          </thead>

          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td className="border p-2">{doc.fileName}</td>
                <td className="border p-2">{doc.fileType}</td>
                <td className="border p-2">{doc.fileSize}</td>
                <td className="border p-2">{doc.status}</td>
                <td className="border p-2">{doc.uploadDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DocumentTable;