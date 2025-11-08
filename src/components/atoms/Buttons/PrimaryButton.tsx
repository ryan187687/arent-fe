import { cn } from '@/utils';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, className, ...props }) => (
  <button
    className={cn(
      'bg-[linear-gradient(32.95deg,_#FFCC21_8.75%,_#FF963C_86.64%)] text-white text-base lg:text-lg w-[200px] lg:w-[296px] h-10 lg:h-14 flex items-center justify-center rounded-md hover:opacity-80 transition-opacity',
      className,
    )}
    {...props}
  >
    {children}
  </button>
);

export default PrimaryButton;
