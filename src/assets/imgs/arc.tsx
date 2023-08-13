export const ArcSvg = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 283 141"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-32 lg:w-36 xl:w-56 2xl:w-[280px] h-auto  ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M186.907 141H282C282 63.128 218.872 0 141 0C63.1278 0 0 63.128 0 141H95.093C95.093 115.646 115.646 95.093 141 95.093C166.354 95.093 186.907 115.646 186.907 141Z"
        fill="#E5D54A"
      />
    </svg>
  );
};

export default ArcSvg;
