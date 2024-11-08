import Loading from "@/components/feedback/Loading";

const SectionLoading = ({ className }: { className?: string }) => {
  return (
    <div className={`w-fit mx-auto my-2 ${className ?? ""}`}>
      <Loading />
    </div>
  );
};

export default SectionLoading;
