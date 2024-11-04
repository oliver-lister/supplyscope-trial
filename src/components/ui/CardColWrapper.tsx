const CardColWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-3 gap-4 min-w-[1000px]">{children}</div>
  );
};

export default CardColWrapper;
