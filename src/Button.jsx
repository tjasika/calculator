export default function Button({ value, bg = "bg-indigo-100", text = "text-zinc-700", type="button", onClick }) {
  return (
    <input
      type={type}
      value={value}
      onClick={onClick}
      className={`h-15 rounded-xl text-2xl hover:cursor-pointer ${bg} ${text}`}
    />
  );
}
