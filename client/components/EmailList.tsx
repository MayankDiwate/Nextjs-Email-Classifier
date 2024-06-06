import { useState } from "react";
import EmailCard from "./EmailCard";

const EmailList = () => {
  const [emailCount, setEmailCount] = useState(5);

  const emails = [
    {
      title: "Email 1",
      body: "Body 1",
    },
    {
      title: "Email 2",
      body: "Body 2",
    },
    {
      title: "Email 3",
      body: "Body 3",
    },
    {
      title: "Email 4",
      body: "Body 4",
    },
    {
      title: "Email 5",
      body: "Body 5",
    },
  ];

  const emailCountOptions = [5, 10, 15, 20];

  return (
    <div className="flex flex-col gap-4 px-3">
      <div className="flex items-center justify-between">
        <select
          className="border border-gray-400 rounded-sm"
          onChange={(e) => setEmailCount(Number(e.target.value))}
        >
          {emailCountOptions.map((count, index) => (
            <option key={index} value={count}>
              {count}
            </option>
          ))}
        </select>

        <button className="flex items-center gap-2 text-white font-bold py-2 px-4 bg-blue-600  cursor-pointer rounded">
          Classify
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {emails.map((email, index) => (
          <EmailCard key={index} email={email} />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
