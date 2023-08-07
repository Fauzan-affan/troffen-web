import React from "react";
import Link from "next/link";

const Anjay = () => {
  return (
    <div>
      <h1>Anjay Index</h1>
      <Link href={`/anjay/${11}`}>Klik ke 1</Link>
    </div>
  );
};

export default Anjay;
