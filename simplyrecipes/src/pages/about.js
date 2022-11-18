import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const About = () => {
    return (
        <Layout>
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>I'm baby coloring book poke taxidermy</h2>
                        <p>
                            Taxidermy forage glossier letterpress heirloom 
                            before they sold out you probably haven't heard of 
                            them banh mi biodiesel chia.
                        </p>
                        <p>
                            Taiyaki tumblr flexitarian jean shorts brunch, 
                            aesthetic salvia retro.
                        </p>
                        <Link to="/contact" className="btn">contact</Link>
                    </article>

                    <StaticImage 
                        src="../assets/images/about.jpeg" 
                        alt="Person pouring salt in bowl" 
                        className="about-img"
                        placeholder="blurred"
                    />
                </section>
            </main>
        </Layout>
        
    )
}

export default About