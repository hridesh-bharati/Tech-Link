// src/components/Ads/GoogleAd.jsx
import { useEffect, useRef } from "react";

const GoogleAd = ({ client, slot, style = {}, format = "auto" }) => {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Adsense Error:", err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", ...style }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      ref={adRef}
    />
  );
};

export default GoogleAd;
