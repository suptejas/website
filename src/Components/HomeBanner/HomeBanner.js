import React from 'react'
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className="HomeBanner">
            <div className="HomeBanner__sub container">
                <div className="fd-col">
                    <img src="https://avatars.githubusercontent.com/u/63039748?v=4" alt="" draggable="false" className="HomeBanner__profilepic" />
                    <h1 className="HomeBanner__title">
                        Hey, I'm <span className="emphasis-1">Tejas</span>.
                    </h1>
                    <span className="HomeBanner__location">
                        <i className="fal fa-user"></i> <span className="uname">Tejas Ravishankar</span>

                    </span>
                    <p className="HomeBanner__content">15 year old Software Developer and Entrepreneur.</p>
                    <div className="HomeBanner__links">
                        <a className="HomeBanner__link HomeBanner__link-icon" href="https://twitter.com/XtremeDevX" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                        <a className="HomeBanner__link HomeBanner__link-icon" href="https://www.linkedin.com/in/tejas-ravishankar-3a8898209/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a className="HomeBanner__link HomeBanner__link-icon" href="https://github.com/XtremeDevX" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        <a className="HomeBanner__link HomeBanner__link-icon" href="mailto:xtremedevx@gmail.com"><i className="fas fa-envelope"></i></a>
                        <a className="HomeBanner__link HomeBanner__link-text" href="/about">About <i className="fal fa-arrow-right"></i></a>
                        <a className="HomeBanner__link HomeBanner__link-text" href="/work">Work <i className="fal fa-arrow-right"></i> </a>
                        <a className="HomeBanner__link HomeBanner__link-text" href="/work">Blog <i className="fal fa-arrow-right"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner
