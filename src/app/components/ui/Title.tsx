type PageTitleProps = {
  title: string;
  description?: string;
};

export default function PageTitle({
  title,
  description,
}: Readonly<PageTitleProps>) {
  return (
    <div className="mb-6">
      <h1 className="text-4xl font-bold text-primary">{title}</h1>
      {description ? (
        <p className="italic text-gray-700">{description}</p>
      ) : null}
    </div>
  );
}
