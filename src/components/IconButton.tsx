interface IconButtonProps {
  src: string;
  alt?: string;
  className?: string;
  small?: boolean;
  onClick?: () => void;
}

const IconButton = ({
  src,
  alt,
  onClick,
  className,
  small,
}: IconButtonProps) => {
  const iconClassName = `rounded-full bg-[#262638] w-8 h-8 p-[0.5rem] ${small ? 'h-[1.5rem] w-[1.5rem] !p-[.025rem]' : ''} ${className}`;
  return (
    <button onClick={onClick}>
      <img src={src} alt={alt} className={iconClassName} />
    </button>
  );
};

export default IconButton;
