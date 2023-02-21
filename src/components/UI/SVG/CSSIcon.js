export default function CSSIcon({ className, color = "#2759EA" }) {
  return (
    <svg
      width="72"
      height="84"
      viewBox="0 0 72 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 0L6.90729 78.3354L38 88.6667L69.0927 78.3354L76 0H0ZM61.9677 15.8333L61.0177 25.1948L38.1979 34.9521L38.1385 34.9719H60.2063L57.6729 63.9865L38.2375 69.6667L18.6833 63.8875L17.4167 49.2615H27.0948L27.7281 56.8417L38.1385 59.474L48.9646 56.426L49.6969 44.2344L16.7833 44.1354V44.1156L16.7437 44.1354L16.0312 34.9719L38.2177 25.7292L39.5042 25.1948H15.1802L14.0323 15.8333H61.9677Z"
        fill={color}
      />
    </svg>
  );
}