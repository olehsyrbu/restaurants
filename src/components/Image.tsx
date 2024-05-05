const Image = ({
  src,
  name,
  className,
  containerClassName,
  defaultIcon,
}: {
  src: string;
  name?: string;
  className?: string;
  containerClassName?: string;
  defaultIcon: string;
}) => (
  <figure className={`${containerClassName}`}>
    <img
      src={src}
      className={className}
      alt={name}
      onError={({ currentTarget }) => {
        currentTarget.src = defaultIcon;
        currentTarget.onerror = null;
      }}
    />
  </figure>
);

export default Image;
