/* eslint-disable react/prop-types */
export default function ButtonCta({ children, className }) {
  return (
    <button
      className={`inline-block bg-secondary-90 text-neutral-white-10 py-4 px-8 rounded-full font-medium ${className}`}
    >
      {children}
    </button>
  );
}
