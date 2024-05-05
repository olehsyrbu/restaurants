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
  const iconClassName = `rounded-full bg-[#262638] w-8 h-8 p-[0.5rem] ${small ? 'h-[24px] w-[24px] !p-[4px]' : ''} ${className}`;
  return (
    <button onClick={onClick}>
      <img src={src} alt={alt} className={iconClassName} />
    </button>
  );
};

export default IconButton;
