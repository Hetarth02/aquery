import Home from "./routes/Home.svelte";
import Profile from "./routes/Profile.svelte";
import Educorner from "./routes/Educorner.svelte";
import Market from "./routes/Market.svelte";
import About from "./routes/About.svelte";
import Form from "./routes/Form.svelte";
import ForumView from "./components/ForumView.svelte";
import ThreadView from "./components/ThreadView.svelte";
import Error from "./routes/Error.svelte";
// [Home, Profile, Educorner, Market, About, Logout, Error]

export default {
  "/": Home,
  "/profile/:name": Profile,
  "/educorner": Educorner,
  "/market": Market,
  "/about": About,
  "/login": Form,
  "/forum/:id": ForumView,
  "/forum/:id/thread/:id": ThreadView,
  "*": Error
};
