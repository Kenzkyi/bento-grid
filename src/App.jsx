import React from 'react'
import createPost from './assets/images/illustration-create-post.webp'
import writeYour from './assets/images/illustration-ai-content.webp'
import fiveStars from './assets/images/illustration-five-stars.webp'
import manageMultiple from './assets/images/illustration-multiple-platforms.webp'
import maintainConsistent from './assets/images/illustration-consistent-schedule.webp'
import fasterGrowth from './assets/images/illustration-audience-growth.webp'
import schedule from './assets/images/illustration-schedule-posts.webp'
import growFollwers from './assets/images/illustration-grow-followers.webp'

const App = () => {
  return (
    <div className='app'>
      <div className="app-holder">
        <div className="app-createPost">
          <h3>Create and schedule content <span>quicker.</span></h3>
          <nav>
            <img src={createPost} />
          </nav>
        </div>
        <div className="app-writeYour">
          <h3>Write your content using AI.</h3>
          <nav>
            <img src={writeYour} />
          </nav>
        </div>
        <div className="app-socialMedia">
          <h2>Social Media <span>10x</span> <a>Faster</a> With AI</h2>
          <footer>
            <nav>
              <img src={fiveStars} />
            </nav>
            <p>Over 4,000 5-star reviews</p>
          </footer>
        </div>
        <div className="app-ManageMultiple">
          <nav>
            <img src={manageMultiple} />
          </nav>
          <h3>Manage multiple accounts and platforms</h3>
        </div>
        <div className="app-maintainConsistent">
          <h3>Maintain a consistent posting schedule.</h3>
          <nav>
            <img src={maintainConsistent} />
          </nav>
        </div>
        <div className="app-fasterAudience">
        <h2>{'>56%'}</h2>
          <p>faster audience growth</p>
          <nav>
            <img src={fasterGrowth} />
          </nav>
        </div>
        <div className="app-schedule">
          <h3>Schedule to social media.</h3>
          <nav>
            <img src={schedule} />
          </nav>
          <p>Optimize post timings to publish content at the perfect time for your audience.</p>
        </div>
        <div className="app-growFollwers">
          <nav>
            <img src={growFollwers} />
          </nav>
          <h4>Grow followers with non-stop content.</h4>
        </div>
      </div>
    </div>
  )
}

export default App
