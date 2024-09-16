import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutMe = () => {
    return (
        <div className="d-flex flex-column h-100 bg-light">
            <main className="flex-shrink-0">
                
                {/* Page Content */}
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0">
                            <span className="text-danger d-inline">About Me</span>
                        </h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-8">
                            {/* Experience Section */}
                            <section>
                                <div className="d-flex align-items-center justify-content-center mb-4">
                                    <img 
                                        className="rounded-circle" 
                                        style={{ width: '200px', height: '200px', objectFit: 'contain' }} 
                                        src="https://i.postimg.cc/kGbQ59zS/engr-nav33d.jpg" 
                                        alt="Profile"
                                    />
                                </div>
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                    <div className="col-lg-12">
  <p style={{ textAlign: "justify" }}>
    I am a full-stack developer committed to building end-to-end web applications that seamlessly integrate front-end aesthetics with backend functionality. My expertise spans a broad range of technologies, allowing me to craft intuitive user interfaces and develop robust APIs that optimize performance and scalability. With years of experience in both client-side and server-side development, I focus on delivering solutions that are not only efficient but also user-friendly. From designing responsive interfaces with React to creating efficient database architectures with MongoDB and Node.js, I ensure that every project is aligned with the latest industry standards. I thrive in dynamic, team-oriented environments, where my passion for continuous learning drives me to mentor others and actively contribute to the tech community.
  </p>
</div>



                                       
                                    </div>
                                </div>
                            </section>
                            {/* Education Section */}
                            <section>
                                 
                                <h2 className="text-danger fw-bolder mb-4"><i class="bi bi-duffle-fill ms-2">{" "}</i>Education</h2>
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div className="text-secondary fw-bolder mb-2">2019 – 2023</div>
                                                    <div className="mb-2">
                                                        <div className="small fw-bolder">UET Peshawar</div>
                                                        <div className="small text-muted">Peshawar, Pakistan</div>
                                                    </div>
                                                    <div className="fst-italic">
                                                        <div className="small text-muted">BS Engineering</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <p>
                                                    University of Engineering and Technology (UET), Peshawar, is a premier institution of higher learning in the field of engineering sciences. Established as a university in 1980, today it boasts twenty-two departments, covering an entire spectrum of engineering disciplines, from the traditional such as computer system and mechanical, to the cutting-edge technologies such as electronics, mechatronics and industrial engineering.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div className="text-secondary fw-bolder mb-2">2017 - 2019</div>
                                                    <div className="mb-2">
                                                        <div className="small fw-bolder">NSSC</div>
                                                        <div className="small text-muted">Risapur, Pakistan</div>
                                                    </div>
                                                    <div className="fst-italic">
                                                        <div className="small text-muted">FSC</div>
                                                        <div className="small text-muted">Computer Science</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <p>
                                                    Nisar Shaheed College in Risalpur Cantt is renowned for its dedication to academic excellence and holistic development. It offers a rich educational environment with rigorous academic programs and extensive extracurricular opportunities.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Skills Section */}
                            <section>
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        {/* Professional Skills */}
                                        <div className="mb-5">
                                            <div className="d-flex align-items-center mb-4">
                                                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                                    {/* <i className="bi bi-tools text-danger bg-none"></i> */}
                                                </div>
                                                <h3 className="fw-bolder mb-0 ">
                                                    <span className="text-danger d-inline"><i class="bi bi-activity ms-2"></i> Professional Skills</span>
                                                </h3>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Web Development</div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Computer Network & Network Security</div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Online Marketing SEO</div>
                                                </div>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3">
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">WordPress Development</div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Cybersecurity Analyst</div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Technical Writing</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Languages */}
                                        <div className="mb-0">
                                            <div className="d-flex align-items-center mb-4">
                                                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                                  
                                                </div>
                                                <h3 className="fw-bolder mb-0">
                                                    <span className="text-danger d-inline"><i class="bi bi-translate ms-2"></i> Languages</span>
                                                </h3>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML, CSS</div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">React Js</div>
                                                </div>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3">
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Node.js</div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">MySQL</div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">MongoDB</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            
            {/* Bootstrap core JS */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
};

export default AboutMe;
