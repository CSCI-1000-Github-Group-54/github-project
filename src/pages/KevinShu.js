export default function examplePage() {
    return (
      <div className='container'>
		<title>I'm in your walls</title>
		<link rel="icon" href="/favicon.ico" />

        <main>
          <div className='underline'>
            <h1 className='title'>Graphics Design is my Passion</h1>
          </div>
          <img
            className='pic'
			src="/will_you_change_your_ways_or_will_you_weep_to_an_audience_of_deaf_ears.png"
			alt="Will you change your ways? Or will you weep to an audience of deaf ears?"
          />

          <p className='description'>
		  Hi, it's me: your favorite poorly-arranged collection of atoms. My name's up for you to decide, but everyone calls me Bob. I'm your average air-drinking, water-eating, food-inhaling guy. My hobbies include, improperly using commas, either by placing them where they don't belong, or by using them in the middle of a list so it becomes unclear where one item ends and another begins, and even worse by including the word and, sleeping, and generally making sense 100% of 10% of the time. On the outside I may appear stupid, but on the inside I'm not smart. I exist for one purpose and one purpose only: to make the world a sillier place. With great silliness comes great responsibility, and I'm proud to declare my responsibility for 8% of all telephone-related violent crime committed annually worldwide. If you ever need help with something - please hesitate to give me a call.
          </p>

          <a className='button' href='/'>
            <p>Escape</p>
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
			text-overflow: clip;
			white-space: nowrap;
			overflow: hidden;
			max-width: 53rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
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