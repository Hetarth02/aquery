import { writable } from "svelte/store";

export let user_data = writable({
  name: sessionStorage.getItem("name"),
  password: sessionStorage.getItem("password"),
  is_logged: sessionStorage.getItem("is_logged")
});

export let data = writable([
  {
    forum_id: 1,
    title: "Title1",
    author: "Aquery1",
    created_at: "2022-03-01",
    members: 1200,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis asperiores, qui etus."
  },
  {
    forum_id: 2,
    title: "Title2",
    author: "Aquery2",
    created_at: "2022-02-01",
    members: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis asperiores, qui etus."
  },
  {
    forum_id: 3,
    title: "Title3",
    author: "Aquery3",
    created_at: "2022-03-01",
    members: 1040,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis asperiores, qui etus."
  },
  {
    forum_id: 4,
    title: "Title4",
    author: "Aquery4",
    created_at: "2022-04-01",
    members: 11100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis asperiores, qui etus."
  },
  {
    forum_id: 4,
    title: "Title4",
    author: "Aquery4",
    created_at: "2022-05-01",
    members: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis asperiores, qui etus."
  },
  {
    forum_id: 4,
    title: "Title4",
    author: "Aquery4",
    created_at: "2022-06-01",
    members: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis asperiores, qui etus."
  },
  {
    forum_id: 4,
    title: "Title4",
    author: "Aquery4",
    created_at: "2022-07-01",
    members: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis asperiores, qui etus."
  },
  {
    forum_id: 4,
    title: "Title4",
    author: "Aquery4",
    created_at: "2022-08-01",
    members: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis asperiores, qui etus."
  }
]);
