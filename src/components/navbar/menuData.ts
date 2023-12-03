export type TMenuTitles = "home" | "tutorial" | "chat" | "blog";
// export type TMenupaths = "/" | "/home" | "/tutorial" | "/chats" | "/blog";

export const menuData = {
  home: { title: "home" as const, path: `/` as const },
  tutorial: { title: "tutorial" as const, path: `/tutorial` as const },
  chat: { title: "chat" as const, path: `/chats` as const },
  blog: { title: "blog" as const, path: `/blog` as const },
  //   { title: "temp", path: `/temp/${"home"}` as const },
};

// export const routerPaths = {
//   "/": { title: "home", path: `/` as const },
//   "/tutorial": { title: "tutorial", path: `/tutorial` as const },
//   "/chat": { title: "chat", path: `/chat` as const },
//   "/blog": { title: "blog", path: `/blog` as const },
// };

// type TRoutePaths = keyof typeof routerPaths;
