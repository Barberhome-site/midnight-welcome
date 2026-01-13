const GlamroLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* House outline */}
      <path
        d="M60 10L15 45V110H105V45L60 10Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Scissors - left blade */}
      <ellipse
        cx="42"
        cy="85"
        rx="8"
        ry="12"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M42 73L58 50"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Scissors - right blade */}
      <ellipse
        cx="78"
        cy="85"
        rx="8"
        ry="12"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M78 73L62 50"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Scissors center pivot */}
      <circle
        cx="60"
        cy="55"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

export default GlamroLogo;
