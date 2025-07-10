type PageTitleProps = {
  title: string;
  description?: string;
};

export default function PageTitle({
  title,
  description,
}: Readonly<PageTitleProps>) {
  return (
    <div className="mb-12 text-center">
      <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">{title}</h1>
      {description ? (
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">{description}</p>
      ) : null}
    </div>
  );
}
