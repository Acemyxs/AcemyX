/* eslint-disable react/prop-types */
export default function ButtonCta({ children, className }) {
  return (
    <button
      className={`inline-block bg-orange-600 text-white py-4 px-8 rounded-full font-medium ${className}`}
    >
      {children}
    </button>
  );
}
