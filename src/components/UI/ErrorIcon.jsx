const ErrorIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        style={{ width: "8rem", height: "8rem", color: "red" }}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
        >
          <path
            strokeDasharray={64}
            strokeDashoffset={64}
            d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.51s"
              values="64;0"
            ></animate>
          </path>
          <path
            strokeDasharray={8}
            strokeDashoffset={8}
            d="M12 12l4 4M12 12l-4 -4M12 12l-4 4M12 12l4 -4"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.51s"
              dur="0.17s"
              values="8;0"
            ></animate>
          </path>
        </g>
      </svg>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        strokeWidth={1}
        style={{ width: "8rem", height: "8rem", color: "red" }}
      >
        <path
         
          fill="currentColor"
          fillRule="evenodd"
          d="M8.6 1c1.6.1 3.1.9 4.2 2c1.3 1.4 2 3.1 2 5.1c0 1.6-.6 3.1-1.6 4.4c-1 1.2-2.4 2.1-4 2.4s-3.2.1-4.6-.7s-2.5-2-3.1-3.5S.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1m.5 12.9c1.3-.3 2.5-1 3.4-2.1c.8-1.1 1.3-2.4 1.2-3.8c0-1.6-.6-3.2-1.7-4.3c-1-1-2.2-1.6-3.6-1.7c-1.3-.1-2.7.2-3.8 1S2.7 4.9 2.3 6.3c-.4 1.3-.4 2.7.2 4q.9 1.95 2.7 3c1.2.7 2.6.9 3.9.6M7.9 7.5L10.3 5l.7.7l-2.4 2.5l2.4 2.5l-.7.7l-2.4-2.5l-2.4 2.5l-.7-.7l2.4-2.5l-2.4-2.5l.7-.7z"
          clipRule="evenodd"
        ></path>
      </svg> */}
    </>
  );
};
export default ErrorIcon;
