const ProgressBar = () => {
  const data = [
    { label: "Completed", value: 84, color: "hsla(119, 99%, 32%, 1)" }, // green
    { label: "In Progress", value: 46, color: "hsla(232, 100%, 50%, 1)" }, // blue
    { label: "Not Started", value: 13, color: "hsla(0, 89%, 53%, 1)" }, // red
  ];

  const radius = 50; //độ to vòng tròn
  const stroke = 10; //độ rộng viền
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 xl:gap-1">
      {data.map((item) => {
        const offset = circumference - (item.value / 100) * circumference;

        return (
          <div
            key={item.label}
            className="flex gap-4 sm:gap-0 sm:flex-col flex-1 items-center relative"
          >
            <svg className="-rotate-90 size-40 lg:size-35">
              {/* Background circle */}
              <circle
                cx="65"
                cy="65"
                r={radius}
                fill="transparent"
                stroke="#e5e7eb"
                strokeWidth={stroke}
              />

              {/* Progress circle */}
              <circle
                cx="65"
                cy="65"
                r={radius}
                fill="transparent"
                stroke={item.color}
                strokeWidth={stroke}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                className="transition-all duration-700 ease-out"
              />
            </svg>

            {/* Percentage number */}
            <div className="absolute top-[45%] -translate-y-1/2 left-1/3 sm:left-1/2 -translate-x-1/2  text-xl font-semibold text-gray-900">
              {item.value}%
            </div>

            {/* Title */}
            <div className="flex items-center gap-2 mt-1">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <p className="text-inter-500">{item.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
