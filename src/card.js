export const Card = ({ children }) => {
  const cardBorder = "rounded-3xl";
  return (
    <div className={`${cardBorder}  m-3 p-3 bg-black/10 w-full`}>
      <div className={`${cardBorder} bg-pureBlack shadow min-h-full`}>
        {children}
      </div>
    </div>
  );
};
