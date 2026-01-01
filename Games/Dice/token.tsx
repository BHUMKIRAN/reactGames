export default function Token({ color, position, onMove }) {
  return (
    <div
      onClick={onMove}
      className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer text-white ${
        color === "red" ? "bg-red-500" : "bg-green-500"
      }`}
    >
      {position}
    </div>
  );
}
