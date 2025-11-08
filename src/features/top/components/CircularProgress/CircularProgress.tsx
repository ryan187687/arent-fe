type CircularProgressProps = {
  percent: number;
  date: string;
};
const CircularProgress: React.FC<CircularProgressProps> = ({ percent, date }) => {
  const size: number = 181;
  const strokeWidth: number = 3;
  const radius: number = size / 2 - strokeWidth / 2;
  const circumference: number = 2 * Math.PI * radius;
  const offset: number = circumference - (percent / 100) * circumference;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
      style={{
        width: size,
        height: size,
        backgroundColor: 'transparent',
        filter: 'drop-shadow(0 0 6px #FC7400)',
      }}
    >
      <svg className="rotate-[-90deg]" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.3)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#fff"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>

      <div className="absolute text-white font-inter flex items-center justify-center">
        <span className="text-[18px]">{date}</span>
        <span className="text-[25px]">{percent}%</span>
      </div>
    </div>
  );
};

export default CircularProgress;
