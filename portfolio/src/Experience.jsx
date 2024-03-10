import vertex from './assets/vertex-updated-logo.webp'
import sahel from './assets/cropped-sahel-foundation-logo-1.png'
import cpet from './assets/experience3.jfif'
import josephoption from './assets/joseph-option-logo.webp'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const experiences = [
    {
        title: "Vertex Med Solutions",
        img: vertex,
        siteLink: "https://www.vertexmedsolutions.com/",
    },
    {
        title: "The Sahel Foundation",
        img: sahel,
        siteLink: "https://sahelfoundation.org/",
    },
    {
        title: "University of Florida CPET",
        img: cpet,
        siteLink: "https://cpet.ufl.edu",
    },
    {
        title: "The Joseph Option",
        img: josephoption,
        siteLink: "https://thejosephoption.com/",
    },
]

export default function Experience() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <section id="experience">
            <div className='row'>
                <h2>I&apos;ve Worked With</h2>
                <div className='slider-container'>
                    <Slider {...settings}>
                        {experiences.map((experience, index) => (
                            <div key={index}>
                                <h3>{experience.title}</h3>
                                <a href={experience.siteLink} target="_blank" rel="noreferrer" className="link__text">
                                    <img className="experience-img" src={experience.img} alt={`${experience.title} logo`} />
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}