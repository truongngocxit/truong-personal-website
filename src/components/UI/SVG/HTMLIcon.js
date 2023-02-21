export default function HTMLIcon({ className, color = "#E44D26" }) {
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
        d="M0 0L6.54375 74.2125L35.9062 84L65.4563 74.2125L72 0H0ZM57.7875 23.9813H23.325L24.0938 33.2438H57.0188L54.4688 61.0688L36.1125 66.1313V66.1875H35.9062L17.4 61.0688L16.275 46.8563H25.2188L25.875 54L35.9062 56.7188L45.975 54L47.1 42.3375H15.8063L13.4062 15.0375H58.6125L57.7875 23.9813Z"
        fill={color}
      />
    </svg>
  );
}
