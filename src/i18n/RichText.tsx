import { Fragment } from "react";

// Dictionary strings mark bold spans with **double asterisks** so translators
// never touch markup.
export default function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>
      )}
    </>
  );
}
