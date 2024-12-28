/* eslint-disable react/prop-types */
export default function ButtonCta({ children }) {
  return (
    <button className="inline-block bg-orange-600 text-white py-4 px-8 rounded-full font-medium">
      {children}
    </button>
  );
}
