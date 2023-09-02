import React from "react";

interface IProps {
  params: { slug: string };
}

function page(props: IProps) {
  const { slug } = props.params;

  return (
    <div>
      <h1>page</h1>
      {slug}
    </div>
  );
}

export default page;

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const posts = await new Promise<string[]>((res, rej) => {
//     setTimeout(() => {
//       res(["dog", "cat"]);
//     }, 2000);
//   });

//   const arr = posts.map((post) => ({
//     slug: post,
//   }));

//   console.log("arr ====   , ", arr);

//   return arr;
// }
