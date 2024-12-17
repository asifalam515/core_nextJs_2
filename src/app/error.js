"use client";
const ErrorPage = (error, reset) => {
  return (
    <div>
      <h1 className="text-center text-4xl text-red-500">
        SomeThing went Wrong !!!
      </h1>
      <h1> {error.message} </h1>
      <button className="btn btn-warning" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
