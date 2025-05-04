const OkayIcon = () => {
  return (
    <>
      <svg
        style={{ width: "8rem", height: "8rem", color: "#079b33" }}
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        >
          <path
            strokeDasharray="64"
            strokeDashoffset="64"
            d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.6s"
              values="64;0"
            />
          </path>
          <path strokeDasharray="14" strokeDashoffset="14" d="M8 12l3 3l5 -5">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.6s"
              dur="0.2s"
              values="14;0"
            />
          </path>
        </g>
      </svg>
    </>
  );
};
export default OkayIcon;
