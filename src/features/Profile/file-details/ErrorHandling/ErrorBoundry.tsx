import { Card } from "react-bootstrap";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { MyFileError } from "@/features/Profile/file-details/ErrorHandling/MyFileError";
import CopyToClipboardButton from "@/components/buttons/CopyToClipboardButton";

const MyFileErrorBoundray = () => {
  const error: unknown = useRouteError();
  console.error(error);

  let name: string = "Unknown Error!";
  let message: string | null = "Unfortunately, this is an Uncaught error";
  let stack: string | undefined = undefined;
  let details: string | null = null;

  if (isRouteErrorResponse(error)) {
    throw error;
  }
  if (error instanceof MyFileError) {
    name = error.name;
    stack = error.stack;
    message = error.message;
    details = error.details;
  } else if (error instanceof Error) {
    name = error.name;
    stack = error.stack;
    details = error.message;
  }

  return (
    <Card className="py-5 px-3 myfile-error text-center">
      <h1>عذراً، حصل أمر ما خاطئ</h1>
      {/* this is my message describing the error */}
      <h2 className="text-danger">{message}</h2>
      <div className="error-details">
        <CopyToClipboardButton
          className="copy"
          msg="تم النسخ بنجاح. شكرا لتعاونك"
          text={`message:${message}\nName:\n${name}\nDetails:\n${details}\nStack:\n${stack}`}
          title="الرجاء نسخ الخطأ والتواصل مع الفريق لحل المشكلة"
        />
        <h3 className="h4">Name</h3>
        <p>{name}</p>
        <h3 className="h4">Details</h3>
        <p>{details}</p>
        <h3 className="h4">Stack</h3>
        <p>{stack}</p>
      </div>
    </Card>
  );
};

export default MyFileErrorBoundray;
