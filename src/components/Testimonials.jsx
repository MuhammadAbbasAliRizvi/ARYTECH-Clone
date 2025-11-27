import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'  // Changed this line
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'  // Add this line

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ARYtech has been instrumental in driving our digital evolution. Their technical depth, agility, and strategic insight make them a trusted partner in our ongoing transformation journey.",
      author: "Jerjees Seja",
      position: "Chief Executive Officer - ARY Digital"
    },
    {
      quote: "ARYtech's team understands how to align technology with real business outcomes. Their commitment and execution excellence have added great value to our digital initiatives.",
      author: "Khalid Rashid",
      position: "Business Unit Head - Qtv Tutor"
    },
    {
      quote: "ARYtech brings rare clarity and precision to digital transformation. Their ability to turn complex strategic goals into actionable, high-impact solutions is impressive.",
      author: "Hans Rosendahl",
      position: "Managing Director - Rosendahl & Co. Growth Partners"
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2>Testimonials</h2>
          <p className="section-subtitle">Industry leaders are recognising the inherent potential of our approach</p>
          <p className="testimonial-description">
            Our deep dive into product discovery and development is clearly on a strong growth trajectory.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="testimonials-swiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="testimonial-slide">
              <div className="testimonial-quote">
                <blockquote>"{t.quote}"</blockquote>
                <div className="author-info">
                  <div className="author-name">{t.author}</div>
                  <div className="author-position">{t.position}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials