import { cn } from '@/utils/cn';

type BadgeProps = {
  label: string;
  className?: string;
};
const Badge: React.FC<BadgeProps> = ({ label, className }) => {
  return (
    <div
      className={cn(
        'size-4 rounded-full text-white text-[10px] leading-[12px] flex items-center justify-center bg-[#EA6C00] font-inter',
        className,
      )}
    >
      {label}
    </div>
  );
};

export default Badge;
