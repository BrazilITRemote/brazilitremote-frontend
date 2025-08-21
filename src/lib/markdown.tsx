import { Components } from "react-markdown";

// Markdown component definitions with proper typing
const markdownComponents: Components = {
  a: ({ node, href, children, ...props }) => {
    const isExternal = href?.includes("#targetBlank");
    return node ? (
      <a
        className="text-blue-700 dark:text-blue-500 hover:underline hover:text-blue-400 dark:hover:text-blue-300"
        href={href?.replace("#targetBlank", "")}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
        {...props}
      >
        {children}
      </a>
    ) : (
      <></>
    );
  },
  p: ({ node, children, ...props }) => {
    return node ? (
      <p {...props} className="text-left sm:text-justify mb-4 leading-relaxed">
        {children}
      </p>
    ) : (
      <></>
    );
  },
  ul: ({ node, children, ...props }) => {
    return node ? (
      <ul {...props} className="list-disc pl-6 mb-4 space-y-2">
        {children}
      </ul>
    ) : (
      <></>
    );
  },
  ol: ({ node, children, ...props }) => {
    return node ? (
      <ol {...props} className="list-decimal pl-6 mb-4 space-y-2">
        {children}
      </ol>
    ) : (
      <></>
    );
  },
  li: ({ node, children, ...props }) => {
    return node ? (
      <li
        {...props}
        className="text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        {children}
      </li>
    ) : (
      <></>
    );
  },
  h1: ({ node, children, ...props }) => {
    return node ? (
      <h1
        {...props}
        className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4 mt-6 first:mt-0"
      >
        {children}
      </h1>
    ) : (
      <></>
    );
  },
  h2: ({ node, children, ...props }) => {
    return node ? (
      <h2
        {...props}
        className="text-xl font-semibold text-blue-800 dark:text-blue-400 mb-3 mt-5 first:mt-0"
      >
        {children}
      </h2>
    ) : (
      <></>
    );
  },
  h3: ({ node, children, ...props }) => {
    return node ? (
      <h3
        {...props}
        className="text-lg font-medium text-blue-700 dark:text-blue-500 mb-2 mt-4 first:mt-0"
      >
        {children}
      </h3>
    ) : (
      <></>
    );
  },
  h4: ({ node, children, ...props }) => {
    return node ? (
      <h4
        {...props}
        className="text-base font-medium text-gray-800 dark:text-gray-200 mb-2 mt-3 first:mt-0"
      >
        {children}
      </h4>
    ) : (
      <></>
    );
  },
  strong: ({ node, children, ...props }) => {
    return node ? (
      <strong
        {...props}
        className="font-semibold text-green-800 dark:text-green-400"
      >
        {children}
      </strong>
    ) : (
      <></>
    );
  },
  em: ({ node, children, ...props }) => {
    return node ? (
      <em {...props} className="italic text-gray-700 dark:text-gray-300">
        {children}
      </em>
    ) : (
      <></>
    );
  },
  code: ({ node, children, ...props }) => {
    return node ? (
      <code
        {...props}
        className="bg-gray-100 dark:bg-gray-700 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-sm font-mono"
      >
        {children}
      </code>
    ) : (
      <></>
    );
  },
  pre: ({ node, children, ...props }) => {
    return node ? (
      <pre
        {...props}
        className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4 border border-gray-200 dark:border-gray-600"
      >
        {children}
      </pre>
    ) : (
      <></>
    );
  },
  blockquote: ({ node, children, ...props }) => {
    return node ? (
      <blockquote
        {...props}
        className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 bg-blue-50 dark:bg-slate-800 py-2 mb-4 rounded-r"
      >
        {children}
      </blockquote>
    ) : (
      <></>
    );
  },
  hr: ({ node, ...props }) => {
    return node ? (
      <hr {...props} className="my-6 border-gray-300 dark:border-gray-600" />
    ) : (
      <></>
    );
  },
};

export default markdownComponents;
