import { cn } from '@/utils';

interface LabelProps {
  size?: 'sm' | 'lg';
  label: string;
}

const Label: React.FC<LabelProps> = ({ label, size = 'lg' }) => {
  const sizeClass = size === 'lg' ? 'min-w-[120px] h-[32px]' : 'min-w-[144px] h-[24px]';
  return (
    <h4
      className={cn(
        'text-white text-[15px] flex items-center bg-yellow-default px-2 absolute bottom-0 left-0 font-inter',
        sizeClass,
      )}
    >
      {label}
    </h4>
  );
};

export default Label;
