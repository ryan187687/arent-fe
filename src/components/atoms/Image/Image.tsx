import Image, { ImageProps } from 'next/image';

const ImageComponent: React.FC<ImageProps> = (props) => <Image priority {...props} />;

export default ImageComponent;
