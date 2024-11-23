import React, { useEffect, useState } from 'react'
import { FaBookReader } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import Timeline from './Timeline';
import SkillItem from './SkillItem';
const educationData = [
    {
        "title": "Cox's Bazar Govt. High School",
        "date": "2017-2019",
        "description": "Cox's Bazar Govt. High School is a renowned institution known for its strong academic foundation and community involvement."
    },
    {
        "title": "Chattogram Cantonment Public College",
        "date": "2019-2021",
        "description": "Chattogram Cantonment Public College is a prestigious college with a focus on academic excellence and disciplined learning."
    },
    {
        "title": "University of Liberal Arts Bangladesh",
        "date": "2023-2027",
        "description": "University of Liberal Arts Bangladesh is an innovative institution fostering creativity and critical thinking, where you are currently pursuing your studies."
    }
]


const Resume = () => {
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]); // State for second data

    // Fetch experience data
    useEffect(() => {
        fetch("experienceData.json")
            .then(res => res.json())
            .then(data => setExperience(data))
            .catch(error => console.error("Error fetching experience data:", error));
    }, []);

    // Fetch skills data
    useEffect(() => {
        fetch("skillsData.json")
            .then(res => res.json())
            .then(data => setSkills(data))
            .catch(error => console.error("Error fetching skills data:", error));
    }, []);
    return (
        <section>
            <header>
                <h2 className='h2 article-title'>Resume</h2>
            </header>

            {/* Education */}

            <div className='timeline'>
                <div className='title-wrapper'>
                    <div className='icon-box'>
                        <FaBookReader></FaBookReader>
                    </div>
                    <h3 className='h3'>Education</h3>
                </div>
                <ol className='timeline-list'>
                    {
                        educationData.map((education, index) => (
                            <Timeline key={index} title={education.title} date={education.date} description={education.description}></Timeline>
                        ))
                    }

                </ol>
            </div>

            {/* Experience */}

            <div className='timeline'>
                <div className='title-wrapper'>
                    <div className='icon-box'>
                        <BsPersonWorkspace></BsPersonWorkspace>
                    </div>
                    <h3 className='h3'>Experience</h3>
                </div>
                <ol className='timeline-list'>
                    {
                        experience.map((experience, index) => (
                            <Timeline key={index} title={experience.title} date={experience.date} description={experience.description}></Timeline>
                        ))
                    }
                </ol>
            </div>

            {/* Skills */}

            <div className='skill'>
                <h3 className='h3 skills-title'>My Skills</h3>
                <ul className='skills-list content-card'>
                    {skills.map((skill, index) => (
                        <SkillItem key={index} title={skill.title} value={skill.value}></SkillItem>
                    ))}
                </ul>
            </div>

        </section>
    )
}

export default Resume