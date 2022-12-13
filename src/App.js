import { Issue } from "./components";
import { useGlobalContext } from "./context";
import { issues } from "./data";

function App() {
  const { currentIssue, setCurrentIssue, issuesData } = useGlobalContext();
  return (
    <main>
      <section className='fixed'>
        <h2>Backstage Talks</h2>
        <h4>
          <a href='#' className='hover-underline'>
            info@backstagetalks.com
          </a>
        </h4>
        <div className='hook-legal'>
          <p className='description'>
            Backstage Talks is a magazine of casual, but in depth dialogues on
            design and business. Our decisions shape and influence this complex
            world--to have a chance to make the right ones, we need to talk.
            <br></br>
            <span className='copyright'>
              © 2021{" "}
              <a href='#' className='underline'>
                Published by studio Milk
              </a>
            </span>
            <br></br>
            <br></br>
            <a href='#' className='underline'>
              Privacy Policy
            </a>
          </p>
        </div>
        <div className='issues-nav'>
          {issuesData.map((issue) => {
            return (
              <a
                href={`#${issue.id}`}
                key={issue.id}
                className={
                  currentIssue === issue.id
                    ? "issue-nav hover-underline current-issue"
                    : "issue-nav hover-underline"
                }
                onClick={() => setCurrentIssue(issue.id)}
              >
                {issue.title}
              </a>
            );
          })}
        </div>
      </section>
      {issues.map((issue) => {
        return <Issue key={issue.id} {...issue} />;
      })}
    </main>
  );
}

export default App;
