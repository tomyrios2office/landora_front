"use client";

import Script from "next/script";

const CalScript = () => {
  return (
    <Script
      src="https://app.cal.com/embed/embed.js"
      strategy="afterInteractive"
    />
  );
};

export default CalScript;
