export default function Header({ title }) {
  return (
      <h1 className="text-center text-5xl">
        {title ? title : "Default title"}
      </h1>
  );
}
