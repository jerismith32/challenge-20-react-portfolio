import React from 'react';
import welcome from '../../assets/images/welcome.jpg';

export default function About() {
    return (
        <div>
            <h1>All About Jeri!</h1>
                <img src={ welcome } className="aboutpicture" style={{ width: "50%" }} alt="Jeri with her golden retriever Dobby" />
                <p>
                    Hello! My name is Jeri Smith. I graduated from Butler University majoring in chemistry and minoring in mathmatics. 
                    During my time at Butler, I participated in notable research focused in organic and analytical chemistry. 
                    Upon graduation, I continued my education at Ball State University earning my Masters of Arts in Secondary Science Education with a concentration in Chemistry. 
                    This has afforded me the opportunity to work with high school students as their science instructor. 
                    Serving in this role, I teach honors chemistry 1, introduction to chemistry and physics, and dual credit chemistry 2 (which allows students to earn college credit in their high school career).
                    Additonally, I have mentored the high school robotics team, which allows students to construct, program, and compete with their robot. 
                    Serving in this role, opened up a whole new world in technology that I was instantly drawn to, because of that, I am currently working through Butler University's Executive Education Coding Boot Camp. 

                </p>
        </div>
    )
}
