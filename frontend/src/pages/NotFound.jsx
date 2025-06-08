import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 text-center p-8 animate-fade-in">
      <h1 className="text-6xl font-bold text-red-500 mb-4 animate-bounce">
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-2 animate-slide-in">
        Page Not Found
      </h2>
      <p className="mb-6 text-gray-600 animate-fade-in-delay">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-transform transform hover:scale-110 animate-pop-in"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;

/* Add the following to your CSS (e.g., index.css):
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 1s ease-in;
}
@keyframes fade-in-delay {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in-delay {
  animation: fade-in-delay 2s ease-in;
}
@keyframes slide-in {
  from { transform: translateY(-40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-in {
  animation: slide-in 1s cubic-bezier(0.4,0,0.2,1);
}
@keyframes pop-in {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
.animate-pop-in {
  animation: pop-in 0.7s cubic-bezier(0.4,0,0.2,1);
}
*/
