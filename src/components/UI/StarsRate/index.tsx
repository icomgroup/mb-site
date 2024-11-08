import FeatherIcon from "feather-icons-react";

const StarsRate = ({
  className,
  rate,
}: {
  className?: string;
  rate: number;
}) => {
  if (isNaN(rate)) rate = 0;
  const arr = new Array(rate).fill(0);
  return (
    <div className={className}>
      {arr.map((_, idx) => (
        <FeatherIcon
          key={idx}
          icon="star"
          className="icon icon-xxs icon-fill-warning text-warning"
        />
      ))}
    </div>
  );
};

export default StarsRate;
