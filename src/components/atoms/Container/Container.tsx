const Container: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="px-2 w-full">
    <div className="w-full max-w-container mx-auto">{children}</div>
  </div>
);

export default Container;
