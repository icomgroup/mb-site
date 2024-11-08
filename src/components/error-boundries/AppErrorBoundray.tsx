import CopyToClipboardButton from "@/components/buttons/CopyToClipboardButton";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const AppErrorBoundray = () => {
  const error: unknown = useRouteError();
  console.error(error);

  let title: string = "Oops! Error!";
  let message: string | null = "Error!";
  let statusCode: number | null = null;

  let stack: undefined | string;
  if (isRouteErrorResponse(error)) {
    statusCode = error.status;
    if (statusCode === 404) {
      // this is an extra check we don't have to do,
      // unless we didn't use "no match route" approach when creating the routes.
      // here we can redirect to NotFoundPage, or to home, or update message variable with some appropriate content....
      message = "Page Not Found!";
    } else {
      // Check for other possible status codes..
      // Other status codes may occur when a response is thrown from an "action" or "loader".
      message =
        error.data?.message || error.data || "A Response has been thrown.";
    }
    title = `Oops! ${statusCode}`;
  } else if (error instanceof Error) {
    // Unexpected Error, errors that occur in rendered components
    message = error.message;
    title = `Oops! Unexpected Error`;
    stack = error.stack;
  }

  return (
    <div className="error-page">
      <h1>{title}</h1>
      <p>{statusCode ? statusCode : "حصل أمر ما خاطئ!"}</p>
      <Link to="/" className="btn btn-primary">
        عودة للرئيسية
      </Link>
      <div className="error-details my-0">
        <CopyToClipboardButton
          className="copy"
          msg="تم النسخ بنجاح. شكرا لتعاونك"
          text={`Message:\n${message}\nDetails:${stack ?? "no Stack"}`}
          title="الرجاء نسخ الخطأ والتواصل مع الفريق لحل المشكلة"
        />
        <h3 className="h4">Message</h3>
        <p>{message}</p>
        {stack && (
          <>
            <h3 className="h4">Stack</h3>
            <p className="stack">{stack}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default AppErrorBoundray;
