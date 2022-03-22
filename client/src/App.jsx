import React, { useState } from "react";

export default function App() {
  const [timestamp, setTimestamp] = useState("");
  const [header, setHeader] = useState({});

  function handleRequest() {
    fetch("/microservices")
      .then((res) => res.json())
      .then((data) => {
        setTimestamp(data.timestamp);
        setHeader(data.headers);
      });
  }

  const HeaderTable = Object.entries(header).map(([key, val]) => (
    <tr key={key + val} className="w-auto">
      <td className="py-1 px-2 font-bold">{key}</td>
      <td className="max-w-sm py-1 px-2 w-auto">{val}</td>
    </tr>
  ));

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const timeOptions = { timeZoneName: "short" };

  return (
    <div className="flex flex-col items-center justify-around bg-radial min-h-screen text-white">
      <div className="flex flex-col items-center px-4">
        <h1 className="my-8 text-3xl text-center">Microservices</h1>
        <p className="mb-6 text-center">
          Get fast and easy some info about you and your request.
        </p>
        <button
          type="button"
          onClick={handleRequest}
          className="mb-8 bg-gray-100 text-black py-2 px-4 rounded border-2 border-transparent
          hover:bg-black hover:text-white hover:border-white"
        >
          Get info
        </button>
      </div>
      <div className=" max-w-screen-sm w-full mb-8 px-4">
        <div className="mb-8">
          <h2 className="mb-2 font-bold">Timestamp</h2>
          <div className="bg-gray-100 text-black h-20 flex flex-col justify-center items-center rounded-lg">
            {timestamp && (
              <>
                <p>
                  {new Date(timestamp).toLocaleTimeString("en-gb", timeOptions)}
                </p>
                <p>
                  {new Date(timestamp).toLocaleDateString("en-gb", dateOptions)}
                </p>
              </>
            )}
          </div>
        </div>
        <div>
          <h2 className="mb-2 font-bold">Header info</h2>
          <div className="bg-gray-100 text-black min-h-60 flex justify-center items-center rounded-lg py-4">
            {Object.keys(header).length > 0 && (
              <table>
                <tbody>{HeaderTable}</tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <div className="text-xs my-4 text-center px-4">
        Created by Alejandro Aburto S. for a freeCodeCamp challenge
      </div>
    </div>
  );
}
