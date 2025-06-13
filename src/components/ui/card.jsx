export function Card({ children }) {
  return (
    <div className="border rounded-lg p-6 shadow-md bg-white mb-4 max-w-md text-center">
      {children}
    </div>
  );
}