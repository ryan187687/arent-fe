import type { ImageProps } from 'next/image';
import Image from 'next/image';

const ImageComponent: React.FC<ImageProps> = (props) => <Image priority {...props} />;

export default ImageComponent;
