import React from 'react'
import "../App.css"

const Education = () => {
    return (
        <div>
            {/* <!-- Education--> */}
            <section className="resume-section" id="education" name="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">NBN SINHGAD COLLEGE OF ENGINEERING, PUNE.</h3>
                            <div className="subheading mb-3">Bachelor of Engineering</div>
                            <div>Electrical Engineering</div>
                            <p>CGPA: 7.4</p>
                        </div>
                        <div className="flex-shrink-0"><span className="timeline">2017  - 2021</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">YESHWANT MAHAVIDYALAYA, NANDED</h3>
                            <div className="subheading mb-3">HSC</div>
                            <div>Electronics </div>
                            <p>Percentage: 71.23%</p>
                        </div>
                        <div className="flex-shrink-0"><span className="timeline">2016 - 2017</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">MAHATMA PHULE HIGHSCHOOL, NANDED</h3>
                            <div className="subheading mb-3">SSC</div>
                            <p>Percentage: 92%</p>
                        </div>
                        <div className="flex-shrink-0"><span className="timeline">2014  - 2015</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </div>
    )
}

export default Education;