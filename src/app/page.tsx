import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl">Hello world!</h1>
      <Link className="text-blue-500" href="/documents/123">
        Go to documents
      </Link>
    </div>
  );
};

export default page;
