import React from "react";
import { useState } from "react";
import "./Admin.css";

export function Admin(props) {
  const [podcastName, setPodcastName] = useState("");
  const [speakerName, setSpeakerName] = useState("");
  const [podcastDescription, setPodcastDescription] = useState("");
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [fileType, setFileType] = useState("audio");
  // const [file, setFile] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0]);
  // };

  return (
    <>
      <div>
        <h1>+Add Podcast+</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <div className="namediv">
            <label className="Name">Enter Podcast Name: </label>
            <input
              className="pName"
              id="pName"
              type="text"
              placeholder="Podcast Name"
              value={podcastName}
              size="20"
              onChange={(e) => setPodcastName(e.target.value)}
            />
          </div>
          <div className="descdiv">
            <label className="Description">Enter Description: </label>
            <textarea
              className="pDescription"
              id="pDescription"
              placeholder="Description"
              value={podcastDescription}
              onChange={(e) => setPodcastDescription(e.target.value)}
            />
          </div>
          <div className="speakdiv">
            <label className="Speaker">Enter Speaker: </label>
            <input
              className="pSpeakerName"
              value={speakerName}
              type="text"
              id="pSpeakerName"
              placeholder="Speaker Name"
              onChange={(e) => setSpeakerName(e.target.value)}
            />
          </div>
          <div className="catediv">
            <label className="Category">Select Category: </label>
            <select
              className="pCategory"
              id="pCategory"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">~</option>
              <option value="Technology">Technology </option>
              <option value="Sci-Fi">Sci-Fi </option>
              <option value="Comedy">Comedy </option>
              <option value="Spiritual">Spiritual </option>
              <option value="Horror">Horror </option>
              <option value="Other">Other...</option>
            </select>
          </div>
          <div className="langdiv">
            <label className="Language">Select Language: </label>
            <select
              className="pLanguage"
              id="pLanguage"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Tamil">Tamil</option>
              <option value="Telugu">Telugu</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="Japanese">Japanese</option>
              
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="typediv">
            <label className="Type">Choose Podcast Type: </label>
            <radio>
              <span>
                <label>Audio</label>
                <input
                  type="radio"
                  name="fileType"
                  value="audio"
                  className="pAType"
                  id="pAType"
                  checked={fileType === "audio"}
                  onChange={(e) => setFileType(e.target.value)}
                />
              </span>
              <span>
                <label>Video</label>
                <input
                  type="radio"
                  name="fileType"
                  value="video"
                  className="pVType"
                  id="pVType"
                  checked={fileType === "video"}
                  onChange={(e) => setFileType(e.target.value)}
                />
              </span>
            </radio>
          </div>
          <div className="views">
            <label className="viewlabel">Views: </label>
            <input type="text" placeholder="Views" className="viewcount" id="viewcount"/>
          </div>
          <div>
            <label className="Thumbnail">thumbnail (Link): </label>
            <input type="url" className="pThumbnail" id="pThumbnail" placeholder="Thumbnail link"></input>
          </div>
          {/* <div>
            <label>Choose File:</label>
            <input
              type="file"
              accept={fileType === "audio" ? "audio/*" : "video/*"}
              onChange={handleFileChange}
            />
          </div> */}
          <div className="submitdiv">
            <input className="submit" id="submit" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}
export default Admin;
