import accountQueries from "@/API/account/queries";
import Error from "@/components/feedback/Error";
import { pointsFormater } from "@/utils/transform";
import classNames from "classnames";
import { Placeholder } from "react-bootstrap";
const MyBalance = () => {
  const { isLoading, data, error, isError } = accountQueries.useInfoQuery();
  if (isError) return <Error error={error} />;
  const balance = data?.points ?? 0;
  const variant = balance === 0 ? "orange" : "success";
  return (
    <>
      <h4 className="mb-4 mt-0 h3">رصيدك الحالي:</h4>
      {isError && <Error error={error} />}
      {data && (
        <h2
          className={classNames(
            "bg-soft-" + variant,
            "icon-with-bg",
            "rounded-3",
            "p-3",
            "w-fit",
            "h1"
          )}
        >
          {pointsFormater(balance)}
        </h2>
      )}
      {isLoading && (
        <Placeholder
          animation="wave"
          className="bg-soft-secondary rounded-3 w-fit"
          as="div"
        >
          <Placeholder
            sx={12}
            style={{
              fontSize: "4rem",
              width: "150px",
              borderRadius: "10px",
              backgroundColor: "inherit",
            }}
          />
        </Placeholder>
      )}
    </>
  );
};

export default MyBalance;
