<svelte:head>
	<title>Aquery | About</title>
</svelte:head>

<script>
  import Nav from "../components/Nav.svelte";
</script>

<style>
	a {
	  text-decoration: none;
	}

	a:hover,
	a:focus {
	  text-decoration: underline;
	}

	.wrapper {
	  width: 100%;
	}

	.content {
	  gap: 2rem;
	  width: 80%;
	  display: flex;
	  margin: 0 auto;
	  flex-direction: column;
	  align-items: center;
	}

	.pair {
	  display: flex;
	  padding: 1rem;
	  justify-content: space-evenly;
	  gap: 1rem;
	}

	.fchild {
	  top: 0;
	  width: 50%;
	  color: #332121;
	  padding-top: 1rem;
	  text-decoration: underline;
	  text-decoration-color: burlywood;
	  font-size: 6ch;
	  position: sticky;
	  height: fit-content;
	  font-size: 72px;
	  background: radial-gradient(circle at 0 2%, #283e63cc, burlywood 80%);
	  background-clip: text;
	  -webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
	}

	.desc {
	  width: 50%;
	  font-size: 2.5ch;
	  padding: 0 5rem;
	}

	.understand {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	}

	.square {
	  margin: 1rem 0;
	  color: aqua;
	  height: 18rem;
	  padding: 1rem 0;
	  border-radius: 1rem;
	  transition: ease 1s;
	  background-color: rgb(237 20 61 / 80%);
	}

	.square h1 {
	  font-size: 2ch;
	  margin-bottom: 0;
	  margin: 2rem auto;
	  margin-bottom: 0.5rem;
	  text-decoration: none;
	  padding: 0 2rem 1rem 5rem;
	}

	.square p {
	  width: 90%;
	  margin: 0 auto;
	  font-size: 1.4ch;
	  padding: 0 1.5rem;
	}

	.circle {
	  animation: morph 5s ease infinite alternate;
	}

	.circle2 {
	  animation: morph 7s ease infinite alternate;
	}

	.circle3 {
	  animation: morph 9s ease infinite reverse;
	}

	@keyframes morph {
	  0%,
	  100% {
	    border-radius: 29% 71% 58% 42% / 41% 37% 63% 59%;
	  }
	  50% {
	    border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
	  }
	  75% {
	    border-radius: 73% 27% 64% 36% / 48% 66% 34% 52%;
	  }
	}
</style>

<Nav />
<div class="wrapper">
	<div class="content">
		<div class="pair">
				<h1 class="fchild">What is Aquery?</h1>
				<p class="desc">
					Just another QnA forum...? Well, to speak so yes for the time being it is
					like other QnA forums. This was actually a starter project to get me started
					with
					<a href="https://svelte.dev/">Svelte</a> and bunch of other technologies. At
					this point of time, there is so much I can think of to integrate in this
					platform but I am still learning
					<a href="https://svelte.dev/">Svelte</a> and other new technologies and it
					may be take some time before I can integrate new features. I hope, you will
					take part on this Journey of learning and exploring with me! &#128516;
				</p>
		</div>
		<div class="pair">
				<h1 class="fchild">Understand the Platform</h1>
				<div class="desc understand">
					<div class="square circle">
						<h1>&#9997; Ask Questions</h1>
						<p>
							Ask whatever you wish? Whether it be related to coding or a game
							level you are stuck on there are no such restrictions! But be sure
							to ask it in the right place.
						</p>
					</div>
					<div class="square circle2">
						<h1>&#127891; Give Answers</h1>
						<p>
								Help other people by answering their queries. Who knows yours might
								be the next best answer?
						</p>
					</div>
					<div class="square circle3">
								<h1>&#128170; Flex</h1>
								<p>
										Whether, asking questions or giving answers you will always get
										something from it. Earn trophies, unlock custom gear for your
										profile and much more!
								</p>
					</div>
				</div>
		</div>
		<div class="pair">
			<h1 class="fchild contribution">Contributing to the Journey!</h1>
			<p class="desc">
				Found a Bug &#128030;, Something you want to improve, Feature suggestion or
				that annoying spelling error that you spotted! Well, feel free to raise an
				Issue on
				<a href="https://github.com/Hetarth02/aquery" style="color: crimson; font-size: 2ch;"><i class="bi bi-github"></i></a>.
			</p>
		</div>
	</div>
</div>