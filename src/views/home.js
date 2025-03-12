import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Blank Squiggly Crab</title>
        <meta property="og:title" content="Blank Squiggly Crab" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
              Learn more about Empowering Citizens and our mission to foster
              civic participation.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Join Now</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">/forums</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">/home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">About</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Forums</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">/about</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Welcome to Empowering Citizens - Your platform for community
              engagement.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
              Join discussions, share ideas, and collaborate with fellow
              citizens on community issues.
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">/events</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Events</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Stay updated on upcoming community events, town hall meetings, and
              public consultations.
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Get Involved</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Learn More</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Get Involved</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">Empowering Citizens</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Join the conversation, make a difference in your community.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Stay updated with community events, town hall meetings, and public
              consultations.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">
              Event Calendar and Notifications
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              Engage in discussions, share ideas, and collaborate on solutions
              for community issues.
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">
              Interactive Forums and Discussion Boards
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Create spaces for citizens to discuss community issues, share
              ideas, and collaborate on solutions.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Community Collaboration</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">Get Involved in Your Community</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Join our platform to engage with fellow citizens, voice your
              opinions, and work together towards a better community.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Sign Up Now</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Create spaces for citizens to discuss community issues, share
              ideas, and collaborate on solutions.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">
              Event Calendar and Notifications
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">
              Interactive Forums and Discussion Boards
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Maintain a calendar of community events, town hall meetings, and
              public consultations.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Feature #3</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$19.99/month</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Get Pro Membership</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Sign up for free</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Receive event notifications</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">
              Create and manage events on the calendar
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">$99.99/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Upgrade to Premium</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">All features from Premium plan</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Priority support</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">
              Moderate discussions and forums
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">All features from Basic plan</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$9.99/month</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">$199.99/year</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">
              Participate in community events
            </span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">$0/year</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">
              Access to forums and discussion boards
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Ad-free experience</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text181">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">$0/month</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Create an account and join the online community to start engaging
              with fellow citizens.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Keep track of upcoming events, town hall meetings, and public
              consultations by checking the event calendar and setting up
              notifications.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Participate in Discussions</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Share your thoughts, ideas, and concerns on community issues
              through interactive forums and discussion boards.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Join the Community</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Stay Informed</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Work together with other citizens to brainstorm solutions,
              initiate projects, and make a positive impact on your community.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Collaborate for Solutions</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">Local Resident</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">Community Leader</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">Michael Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              The event calendar feature has helped me stay informed about
              upcoming town hall meetings and public consultations. It&apos;s
              great to have all the information in one place.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">Concerned Citizen</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Sarah Lee</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              Read what our community members have to say about their experience
              with our platform.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">Community Activist</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              I have found the forums on this platform incredibly useful for
              engaging with fellow citizens and discussing important community
              issues.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              Being able to collaborate with others on finding solutions to
              local problems has been a game-changer for me. This platform truly
              empowers citizens to make a difference.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              I highly recommend this platform to anyone who wants to be more
              involved in their community. It&apos;s user-friendly and fosters
              meaningful discussions.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Locations</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Cluj - Napoca</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text212">FAQs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">Privacy Policy</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text214">About Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text215">Terms of Service</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
