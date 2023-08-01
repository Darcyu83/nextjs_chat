import React from "react";

interface IProps {
  params: { slug: string };
}

function page(params: IProps) {
  const { slug } = params.params;

  return (
    <div style={{}}>
      <h1>page</h1>
      {slug}

      {JSON.stringify(params)}
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
