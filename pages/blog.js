import MetaHeaders from "../components/global/MetaHeaders";

export default function Blog() {
  return (
    <div className="container mx-auto">
      <MetaHeaders title="Blog" />
      <h1 className="w-full flex justify-center text-primary-dark dark:text-primary-light text-4xl font-medium h-screen">
        Coming soon...
      </h1>
      {/* TODO: Add blog posts here */}
    </div>
  );
}