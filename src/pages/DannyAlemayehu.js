export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hey, I'm Danny Alemayehu. </h1>
          </div>
		<img src='https://media.giphy.com/media/bRXDAEuXf2v6g/giphy.gif' />
		<img src="https://media.giphy.com/media/FWZ1MF7W5sYKZ0Ysho/giphy.gif" />
		<img src="https://media.giphy.com/media/exOfVLEc1hjOg/giphy.gif" alt='mefr'/>
		<iframe src="https://giphy.com/embed/ZN9wnUXQyIayXXyLnK" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/primevideo-br-anime-amazon-prime-video-evangelion-30-ZN9wnUXQyIayXXyLnK">via GIPHY</a></p>

          <p className='description'>
		<pre>
		<span>
        	My name is Danny Alemayehu!<br></br>
			I am studying CS through the BS program and currently taking Data Structures. <br></br>
			Next Semester I hope to be a course assistant for Data Structures. <br></br>
			I am a part of the CU TKD Club. <br></br>
			I'm also a member of NSBE and BSA. <br></br>
			My favorite speaker was Dr. Anderson. <br></br>
			I hope I can use my CS knowledge to pioneer CS research whether in the industry or through university.<br></br>
			For example, building a much better less annoying version of Linkedin.<br></br>	
		</span>
		</pre>
		</p>

          <a className='button' href='/'>
            <p> Back to Home Page</p>
          </a>
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
			text-color: 00f100;
          }

		  span{
			color: #00f100;
			background-color:black;
			}

			pre {
				color: whitesmoke;
				background-color: black;
				scrollbar-color: dark;
				width: 100%;
				max-height: 800px;
				display: inline-block;
				overflow: auto;
			}

          .pic {
            height: 450px;
            width: 450px;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}
