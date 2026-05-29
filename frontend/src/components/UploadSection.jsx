import { useState } from "react";
import API from "../services/api";

export default function UploadSection() {

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [message, setMessage] = useState("");

    const handleUpload = async () => {

        if (selectedFiles.length === 0) {
            setMessage("Please select PDF files");
            return;
        }

        try {

            for (let file of selectedFiles) {

                const formData = new FormData();
                formData.append("file", file);

                await API.post(
                    "/documents/upload",
                    formData,
                    {
                        headers: {
                            "Content-Type":
                                "multipart/form-data"
                        }
                    }
                );
            }

            if (selectedFiles.length >= 4) {
                setMessage(
                    `${selectedFiles.length} files uploaded successfully. Bulk upload notification triggered.`
                );
            } else {
                setMessage(
                    `${selectedFiles.length} file(s) uploaded successfully.`
                );
            }

        } catch (error) {

            console.error(error);
            setMessage("Upload failed");
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow mt-6">

            <h2 className="text-xl font-semibold mb-4">
                Upload Documents
            </h2>

            <input
                type="file"
                accept=".pdf"
                multiple
                onChange={(e) =>
                    setSelectedFiles(
                        Array.from(e.target.files)
                    )
                }
            />

            <button
                onClick={handleUpload}
                className="ml-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
                Upload
            </button>

            <p className="mt-3 text-green-600">
                {message}
            </p>

        </div>
    );
}