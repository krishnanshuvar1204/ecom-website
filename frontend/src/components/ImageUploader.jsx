import React, { useState } from "react";

const API_URL = "http://3.110.131.5:3000";

export default function ImageUploader({ onUpload }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${API_URL}/api/upload`, { method: "POST", body: formData });
    const data = await res.json();
    onUpload(data.Location);
  };

  return (
    <div style={{ marginTop: 10 }}>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload} style={{ marginLeft: 10 }}>Upload Image</button>
    </div>
  );
}
