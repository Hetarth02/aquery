<script>
  import Nav from "../components/Nav.svelte";
</script>

<style>
	a {
	  text-decoration: none;
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

	h1 {
	  font-size: 3ch;
	  color: #332121;
	  padding-top: 1rem;
	  text-decoration: underline;
	  text-decoration-color: burlywood;
	}

	.desc {
	  width: 80%;
	  font-size: 2ch;
	  text-align: left;
	}

	.desc:last-child {
	  margin-bottom: 0.6rem;
	}

	.understand {
	  width: 90%;
	  display: flex;
	  flex-wrap: wrap;
	}

	.square {
	  flex: 2 2;
	  margin: 1rem;
	  width: 25rem;
	  height: 16rem;
	  padding: 1rem;
	  text-align: left;
	  border-radius: 1rem;
	  transition: ease 1s;
	  background-color: rgba(0, 0, 0, 0.4);
	}

	.square h1 {
	  font-size: 2.5ch;
	  margin-bottom: 0;
	  margin: 1rem auto;
	  text-decoration: none;
	  padding: 0 3rem 1rem 3rem;
	}

	.square p {
	  width: 85%;
	  margin: 0 auto;
	  font-size: 1.6ch;
	  padding: 0 0.5rem;
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
		<h1>What is Aquery?</h1>
		<p class="desc">
			Just another QnA forum...? Well, to speak so yes for the time being it is like other
			QnA forums. This was actually a starter project to get me started with
			<a href="https://svelte.dev/">Svelte</a> and bunch of other technologies. At this
			point of time, there is so much I can think of to integrate in this platform but I
			am still learning <a href="https://svelte.dev/">Svelte</a> and other new
			technologies and it may be take some time before I can integrate new features. I
			hope, you will take part on this Journey of learning and exploring with me!
			&#128516;
		</p>
		<h1>Understand the Platform</h1>
		<div class="understand">
				<div class="square circle">
						<h1>&#9997; Ask Questions</h1>
						<p>
							Ask whatever you wish? Whether it be related to coding or a game level you are stuck on
							there are no such restrictions! But be sure to ask it in the right place.
						</p>
				</div>
				<div class="square circle2">
						<h1>&#127891; Give Answers</h1>
						<p>
							Help other people by answering their queries. Who knows yours might be the
							next best answer?
						</p>
				</div>
				<div class="square circle3">
						<span>
								<h1>&#128170; Flex</h1>
								<p>
									Whether, asking questions or giving answers you will always get something from it. Earn trophies, unlock custom gear for your profile and much more!
								</p>
						</span>
				</div>
		</div>
		<h1 class="contribution">Contributing to the Journey!</h1>
		<p class="desc">
			Found a Bug &#128030;, Something you want to improve, Feature suggestion or that annoying spelling error that you  spotted! Well, feel free to raise an Issue on <a href="https://github.com/Hetarth02/aquery">Github</a>.
		</p>
	</div>
</div>