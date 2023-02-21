export default function ExternalLinkIcon({ className, color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 11V5V3H19H13V5H17V7H15V9H13V11H11V13H9V15H11V13H13V11H15V9H17V7H19V11H21ZM11 5H5H3V7V19V21H5H17H19V19V13H17V19H5V7H11V5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.2}
      />
    </svg>
  );
}
