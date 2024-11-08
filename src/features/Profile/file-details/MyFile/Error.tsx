import Error from "@/components/feedback/Error";

const MyFileError = ({
  error,
  refetch,
  className,
}: {
  error?: unknown;
  refetch?: () => void;
  className?: string;
}) => {
  return (
    <div className={`error-element py-3 ${className}`}>
      <Error
        retry={refetch}
        msg404="الملف غير موجود أو رقم الصفحة غير صحيح"
        className="justify-content-center"
        error={error}
      />
    </div>
  );
};

export default MyFileError;
