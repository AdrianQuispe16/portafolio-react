export default function LogoDefiniciones() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="aqTile" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0E1736" />
          <stop offset="1" stopColor="#070C1F" />
        </linearGradient>
        <linearGradient id="aqRim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22D3EE" />
          <stop offset=".55" stopColor="#6366F1" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="aqCode" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#22D3EE" />
          <stop offset="1" stopColor="#818CF8" />
        </linearGradient>
        <linearGradient id="aqGold" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#E0A93F" />
          <stop offset="1" stopColor="#F8DE9C" />
        </linearGradient>
        <linearGradient
          id="aqPin"
          gradientUnits="userSpaceOnUse"
          x1="4"
          y1="4"
          x2="60"
          y2="60"
        >
          <stop offset="0" stopColor="#22D3EE" />
          <stop offset=".55" stopColor="#6366F1" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <radialGradient id="aqGlowHead">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity=".95" />
          <stop offset=".3" stopColor="#7DEBFF" stopOpacity=".6" />
          <stop offset="1" stopColor="#6366F1" stopOpacity="0" />
        </radialGradient>
        <clipPath id="aqClip">
          <rect x="6" y="10" width="52" height="44" rx="9" />
        </clipPath>
        <symbol id="aq-logo" viewBox="0 0 64 64">
          <rect
            x="6"
            y="10"
            width="52"
            height="44"
            rx="9"
            fill="url(#aqTile)"
          />
          <path
            d="M6 21V19A9 9 0 0 1 15 10H49A9 9 0 0 1 58 19V21Z"
            fill="#FFFFFF"
            fillOpacity=".06"
          />
          <path
            d="M6 21H58"
            stroke="#FFFFFF"
            strokeOpacity=".12"
            strokeWidth="1"
            fill="none"
          />
          <rect
            x="6"
            y="10"
            width="52"
            height="44"
            rx="9"
            fill="none"
            stroke="url(#aqPin)"
            strokeWidth="2"
          />

          <circle cx="13" cy="15.500" r="1.700" fill="#22D3EE" />
          <circle cx="18.500" cy="15.500" r="1.700" fill="#818CF8" />
          <circle cx="24" cy="15.500" r="1.700" fill="#F0C674" />

          <path
            d="M12 41L18 25.500 24 41M14.200 36h7.600"
            fill="none"
            stroke="#F1F5FF"
            strokeWidth="2.800"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle
            cx="33.500"
            cy="33.200"
            r="7.200"
            fill="none"
            stroke="#F1F5FF"
            strokeWidth="2.800"
          />
          <path
            d="M38.500 38.500l4.500 4.500"
            fill="none"
            stroke="#F0C674"
            strokeWidth="2.800"
            strokeLinecap="round"
          />

          <path
            d="M47 29.500l5 3.700-5 3.700"
            fill="none"
            stroke="url(#aqCode)"
            strokeWidth="2.400"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M12 51l8-2 6 1.500 7-3 8 1.500 9-4"
            fill="none"
            stroke="#F0C674"
            strokeWidth="1.900"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="45" r="1.900" fill="#F8DE9C" />
        </symbol>
      </defs>
    </svg>
  );
}
