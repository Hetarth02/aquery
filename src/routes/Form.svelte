<script>
  import { user_data } from "../stores.js";
  import { push } from "svelte-spa-router";
  import { slide } from "svelte/transition";

  let toggle = false;

  function register_user() {
    // Register user through Api call and if status true then toggle = false
    toggle = false;
  }

  function verify_user() {
    // Verify user through Api call and store user data as global prop through stores.js and activate session
    sessionStorage.setItem("name", "active");
    sessionStorage.setItem("password", "active");
    sessionStorage.setItem("is_logged", true);
    user_data.set({
      name: sessionStorage.getItem("name"),
      password: sessionStorage.getItem("password"),
      is_logged: sessionStorage.getItem("is_logged")
    });
    push("/");
  }

  function send_mail() {
    // Send email for forgot password via Api
    alert("Email sent!");
  }
</script>

<style>
  .main-cont {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    backdrop-filter: brightness(0.95) saturate(0.9);
    background-image: url("https://www.wallpaperuse.com/wallp/12-123490_m.jpg");
  }

  .login-cont {
    top: 18%;
    left: 0.5%;
    width: 50%;
    display: flex;
    padding: 1rem;
    margin: 0 auto;
    position: relative;
    border-radius: 1rem;
    align-items: center;
    transition: ease 1s;
    flex-direction: column;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .login-cont:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .title {
    opacity: 0.8;
    font-size: 5ch;
  }

  .form-cont {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .img-cont {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .img-cont img {
    margin: 0 1rem;
    padding: 1rem;
  }

  .img-cont button {
    width: 50%;
    border: none;
    outline: none;
    margin: 1rem 0;
    cursor: pointer;
    padding: 0.4rem;
    border-radius: 5px;
    transition: ease 300ms;
    background-color: goldenrod;
  }

  .border {
    height: inherit;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
  }

  .form {
    margin: 0 auto;
  }

  .label {
    font-size: 2ch;
    padding: 0.1rem;
    margin: 0.4rem 0;
  }

  .input-cont {
    display: flex;
  }

  .icon {
    font-size: 2ch;
    color: white;
    padding: 0.2rem 0.6rem;
    border-radius: 4px 0 0 4px;
    background-color: #1f2a37;
    border-right: 1px solid #4b5663;
  }

  .input-cont input {
    outline: none;
    font-size: 2ch;
    color: whitesmoke;
    padding: 0.2rem 0.8rem;
    border-radius: 0 4px 4px 0;
    background-color: #1f2a37;
    border: 1px solid transparent;
  }

  .input-cont input:hover,
  .input-cont input:focus {
    border: 1px solid goldenrod;
  }

  .submit {
    width: 100%;
    border: none;
    outline: none;
    margin: 1rem 0;
    cursor: pointer;
    padding: 0.4rem;
    font-size: 1.6ch;
    border-radius: 5px;
    transition: ease 300ms;
    background-color: goldenrod;
    box-shadow: 0 1px 1px rgb(18 21 26 / 8%);
  }

  .submit:hover,
  .submit:focus,
  .img-cont button:hover,
  .img-cont button:focus {
    color: white;
    background-color: #19072e;
  }

  .link {
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
    font-size: 1.8ch;
    margin-top: 0.5rem;
    color: deepskyblue;
    text-decoration: underline;
  }

  .link:focus {
    border: 1px solid black;
  }
</style>

<div class="main-cont">
  {#if toggle == true}
    <div class="register login-cont" transition:slide|local>
      <h1 class="title">Sign Up</h1>
      <div class="form-cont">
        <div class="img-cont">
          <img src="https://via.placeholder.com/150" alt="Aquery" />
          <button type="button" on:click={() => toggle = false}>Sign In</button>
        </div>
        <div class="border"></div>
        <form class="form" method="post" on:submit|preventDefault={register_user}>
          <h3 class="label">Your Email</h3>
          <div class="input-cont">
            <div class="icon"><i class="bi bi-envelope-fill"></i></div>
            <input type="email" name="email" placeholder="abc@email.com" required/>
          </div>
          <h3 class="label">Your Username</h3>
          <div class="input-cont">
            <div class="icon"><i class="bi bi-hash"></i></div>
            <input type="text" name="text" placeholder="username" required/>
          </div>
          <h3 class="label">Your Password</h3>
          <div class="input-cont">
            <div class="icon"><i class="bi bi-shield-lock-fill"></i></div>
            <input type="password" name="password" placeholder="password" required/>
          </div>
          <button type="submit" class="submit">Start your Journey!</button>
        </form>
      </div>
    </div>
  {:else}
    <div class="login login-cont" transition:slide|local>
      <h1 class="title">Sign In</h1>
      <div class="form-cont">
        <div class="img-cont">
          <img src="https://via.placeholder.com/150" alt="Aquery" />
          <button type="button" on:click={() => toggle = true}>Sign Up</button>
        </div>
        <div class="border"></div>
        <form class="form" method="post" on:submit|preventDefault={verify_user}>
          <h3 class="label">Your Username</h3>
          <div class="input-cont">
            <div class="icon"><i class="bi bi-hash"></i></div>
            <input type="text" name="text" placeholder="username" required/>
          </div>
          <h3 class="label">Your Password</h3>
          <div class="input-cont">
            <div class="icon"><i class="bi bi-shield-lock-fill"></i></div>
            <input type="password" name="password" placeholder="password" required/>
          </div>
          <button type="submit" class="submit">Continue your Journey!</button>
        </form>
      </div>
      <button class="link" on:click={send_mail}>Forgot Password?</button>
    </div>
  {/if}
</div>