import Link from "next/link";

export function Heading({
  id,
  level = 2,
  children,
}: {
  id: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}) {
  const Tag = `h${level}` as const;
  return (
    <Tag id={id} className="scroll-mt-24 text-xl font-semibold group">
      <span>{children}</span>
      <Link
        href={`#${id}`}
        aria-label="Link to section"
        className="ml-2 opacity-0 group-hover:opacity-100 text-sm text-gray-400"
      >
        #
      </Link>
    </Tag>
  );
}
