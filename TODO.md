General Things

- Make Aquery Logo
- Add Favicon
- Download all assests and minimise and/or compress them
- Optimise the build size further if possible
- Design Point System
- Select factors affecting Conversion of Point into Qcoin
- Add point system
- Add point reward system
- Gamify User-Website Interaction
- Add user tagging func.
- Make Website responsive

Login Page

- Add Form Validation
- Replace Placeholder Images with respective images
- Add Email functionality for Forgot Password

Home Page

- Update Home in Nav component with Aquery Logo
- Add types of forum(Public and Private)
- Add share func. for forum(public, private invite link)
- Add Pagination

Educorner Page

- Add list of educational materials(Notesbooks, Blogs in Markdown)
- Add interactive Notebooks(ML models, etc.)

Market Page

- Revamp Market UI Layout
- Make Graphs more interactive
- Add place for buying custom things(For example, Avatar Frames, etc.)
- Add place to convert/redeem points for Qcoins
- Add refresh button to refresh Graph data(Maybe two refresh types, Global and Graph specific)
- Connect it to provide real time updates(Server Sent Events)

Profile Page

- Update Profile Page UI
- Add level Bar
- Add daily activity time graph
- Add follows, following, bookmarks
- Add activity history(Liked,Disliked threads)
- Notify when tagged somewhere
- Make user info like password editable through timed email verification(Only editable if user is logged in.)
- Replace Placholder images with respective trophy images

About Page

- Revamp About Page UI (Done)

Forum Threads View

- Add different filters(Solved, Unsolved, Latest, Oldest, Most Comments, Most Popular[By upvotes])
- Add Pagination

Thread View

- Select comment as Best Answer(This will make thread status solved)
- Add share func. for individual threads
- Add upvotes and downvotes for comments
- Add Pagination for comments

# Backend Design Approximations

```js
// User Account Create
{
  email, username, password, date;
}

// User SignIn
{
  username, password, (elapsed_time = [time_of_sign_in, time_of_sign_out]);
}

// Forum
{
  forum_id, title, desc, (type = [public, private]), author, date, members;
}

// Thread
{
  thread_id,
    title,
    desc,
    author,
    date,
    upvotes,
    downvotes,
    views,
    comments,
    (solved = [boolean]);
}

// Thread Comments
{
  thread_comment_id,
    desc,
    author,
    date,
    upvotes,
    downvotes,
    (is_solution = [boolean]);
}

// User Profile
{
  email,
    username,
    xp,
    level,
    Qcoins,
    unlocked_items_from_market,
    comments,
    threads,
    subscriptions,
    (achivements = [achieved, remaining]),
    (forums = [public_created, private_created]);
}

// Market
{
  total_users,
    total_forums,
    total_threads,
    total_users_signed_up_today,
    total_users_signed_out_today,
    past_conversion_rate,
    current_conversion_rate,
    future_conversion_rate,
    market_items;
}

// User Account, Forums, Thread, Comment Create and Delete Ops only
// User Account CRUD Ops
```
