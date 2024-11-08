import { Placeholder } from "react-bootstrap";

const FAQSkeleton = () => {
  return new Array(6).fill(0).map((_, index) => (
    <div className="my-4 rounded-sm" key={index.toString()}>
      <Placeholder animation="wave" as="div">
        <Placeholder
          xs={12}
          style={{ fontSize: "4rem", borderRadius: "10px" }}
        />
      </Placeholder>
    </div>
  ));
};

export default FAQSkeleton;
