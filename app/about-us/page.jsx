import React from "react";

const About = () => {
    return (
        <>

            {/* Sub Banner */}
            <section className="sub-banner-sec">
                <div className="subBannerImgWrap">
                    <div className="banner-image">
                        <img
                            src="assets/web_end/images/banner-about.avif"
                            alt="About Us"
                        />
                        <div className="banner-title">
                            <div className="containerWrapper">
                                <div className="sub-banner-caption">
                                    <div
                                        className="subCaption"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        About Us
                                    </div>
                                    <div
                                        className="mainTitle"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        Engineering Excellence at Every Level
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pattern */}
            <div className="pattern-bg-top">
                <img
                    src="assets/web_end/images/pattern-bg-top.png"
                    alt="services"
                />
            </div>

            {/* About Section */}
            <section className="aboutSec">
                <div className="containerWrapper">
                    <div className="AboutBoxRow">
                        <div className="row">
                            <div className="col-lg-5">
                                <div
                                    className="Main_Heading"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    <h1>About Us</h1>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="AboutContentBox">
                                    <div className="aboutDescMain">
                                        <p data-aos="fade-up" data-aos-duration="1200">
                                            At Idea Cube Building Contracting LLC, we are more than
                                            just builders - we are visionaries shaping the future of
                                            urban living. With a deep-rooted commitment to excellence,
                                            we specialize in delivering high-quality commercial and
                                            residential spaces that go beyond expectations.
                                        </p>
                                    </div>

                                    <div className="aboutDesc">
                                        <p data-aos="fade-up" data-aos-duration="1200">
                                            Our philosophy is driven by innovation, precision, and a
                                            relentless pursuit of sustainability. Every structure we
                                            create is a thoughtful blend of functionality, aesthetics,
                                            and long-term value.
                                        </p>

                                        <p data-aos="fade-up" data-aos-duration="1200">
                                            Over the years, we have built a reputation for integrity,
                                            transparency, and delivering on our promises.
                                        </p>

                                        <p data-aos="fade-up" data-aos-duration="1200">
                                            We don’t just construct buildings, We create landmarks of
                                            trust, excellence, and lasting impact.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Banner */}
            <section className="about_banner_BlockSec">
                <div className="about_banner_Block_BoxWrap">
                    <div className="containerWrapper">
                        <div
                            className="about_banner_Block_Title"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            Building Excellence Today,
                            <br />
                            Shaping a Better Tomorrow
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission / Vision / Passion */}
            <section className="mission-sec">
                <div className="containerWrapper">
                    <div className="row">
                        {[
                            {
                                img: "mission.svg",
                                title: "Our Mission",
                                desc:
                                    "To provide superior construction solutions with uncompromised quality, timely delivery, and innovative designs."
                            },
                            {
                                img: "vision.svg",
                                title: "Our Vision",
                                desc:
                                    "To be the most trusted and preferred construction partner, creating lasting value for clients."
                            },
                            {
                                img: "passion.svg",
                                title: "Our Passion",
                                desc:
                                    "Passion drives every brick we lay. We design projects that reflect elegance, functionality, and durability."
                            }
                        ].map((item, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="BoxItem">
                                    <div
                                        className="icon"
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                    >
                                        <img
                                            src={`assets/web_end/images/${item.img}`}
                                            alt={item.title}
                                        />
                                    </div>
                                    <h3 data-aos="fade-up" data-aos-duration="1200">
                                        {item.title}
                                    </h3>
                                    <div
                                        className="desc"
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                    >
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="hm_why_Sec">
                <div className="containerWrapper">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="hm_why_ImageBox"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <img
                                    src="assets/web_end/images/why-choose.avif"
                                    alt="Why Choose Us"
                                />
                            </div>
                        </div>

                        <div className="col-lg-6 alSelfCenter">
                            <div className="hm_why_ContentBox pdLeft">
                                <div
                                    className="SecHead_Small"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    Why Choose Us
                                </div>
                                <div
                                    className="SecHeading"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    Driven by integrity, we deliver value through our services
                                </div>

                                {/* Bootstrap Accordion stays unchanged */}
                                <div className="BoxAccordion">
                                    <div className="accordion" id="accordionExample">
                                        {[
                                            ["Q1", "Experienced Team"],
                                            ["Q2", "Innovative Designs"],
                                            ["Q3", "Quality Assurance"],
                                            ["Q4", "On-Time Delivery"],
                                            ["Q5", "Sustainable Practices"]
                                        ].map(([id, title], i) => (
                                            <div
                                                className="accordion-item"
                                                key={id}
                                                data-aos="fade-up"
                                                data-aos-duration="1200"
                                            >
                                                <h5 className="accordion-header">
                                                    <a
                                                        className={`accordion-button ${i !== 0 ? "collapsed" : ""
                                                            }`}
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${id}`}
                                                    >
                                                        {title}
                                                    </a>
                                                </h5>
                                                <div
                                                    id={id}
                                                    className={`accordion-collapse collapse ${i === 0 ? "show" : ""
                                                        }`}
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            Content related to {title.toLowerCase()} goes
                                                            here.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
