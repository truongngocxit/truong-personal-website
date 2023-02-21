export default function FirebaseIcon({ className, color = "#FFCB2B" }) {
  return (
    <svg
      width="128"
      height="174"
      viewBox="0 0 128 174"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.35704 113.515L22.5021 3.64565C23.0946 -0.101324 28.1207 -0.986578 29.8948 2.36293L48.3226 36.8517L5.35704 113.515ZM127.779 139.032L110.89 39.0197C110.768 38.3048 110.452 37.6371 109.977 37.0888C109.502 36.5405 108.886 36.1327 108.196 35.9093C107.506 35.686 106.768 35.6558 106.062 35.8219C105.356 35.988 104.709 36.3441 104.191 36.8517L0.591125 139.032L58.1724 172.241C59.9394 173.21 61.9221 173.718 63.9374 173.718C65.9526 173.718 67.9354 173.21 69.7024 172.241L127.779 139.032ZM80.936 51.9263L67.7331 26.7996C67.4048 26.1541 66.9043 25.612 66.287 25.2334C65.6697 24.8548 64.9596 24.6544 64.2355 24.6544C63.5113 24.6544 62.8012 24.8548 62.1839 25.2334C61.5666 25.612 61.0661 26.1541 60.7378 26.7996L2.69767 130.266L80.936 51.9263Z"
        fill={color}
      />
    </svg>
  );
}
