import Slider from "react-slick";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { TrendingUp, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "New York, USA",
    profit: "$30,000",
    period: "3 months",
    image: "https://images.unsplash.com/photo-1551989745-8ac16ba81d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzY5MTI2MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "The strategies and support I received transformed my trading completely. I never imagined I could achieve these returns!"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    location: "London, UK",
    profit: "$20,000",
    period: "2 months",
    image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMHRyYWRlcnxlbnwxfHx8fDE3NjkxNzA4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "As a beginner, I was nervous about forex trading. The expert guidance here made all the difference in my success."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Dubai, UAE",
    profit: "$15,000",
    period: "6 weeks",
    image: "https://images.unsplash.com/photo-1758611972895-34286de80d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY5MTcwODA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Consistent profits month after month. The platform's analysis tools and signals are incredibly accurate."
  },
  {
    id: 4,
    name: "David Chen",
    location: "Singapore",
    profit: "$45,000",
    period: "4 months",
    image: "https://images.unsplash.com/photo-1551989745-8ac16ba81d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzY5MTI2MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Exceeded my expectations! The automated trading system delivers results while I focus on my business."
  },
  {
    id: 5,
    name: "Jessica Brown",
    location: "Toronto, Canada",
    profit: "$28,000",
    period: "10 weeks",
    image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMHRyYWRlcnxlbnwxfHx8fDE3NjkxNzA4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Simply invest and they handle the rest. Best passive income I've ever experienced!"
  },
  {
    id: 6,
    name: "Ahmed Hassan",
    location: "Cairo, Egypt",
    profit: "$18,500",
    period: "8 weeks",
    image: "https://images.unsplash.com/photo-1758611972895-34286de80d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY5MTcwODA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "The team's expertise in forex markets is outstanding. My portfolio has grown beyond my wildest dreams!"
  },
  {
    id: 7,
    name: "Sophie Anderson",
    location: "Sydney, Australia",
    profit: "$35,000",
    period: "3 months",
    image: "https://images.unsplash.com/photo-1551989745-8ac16ba81d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzY5MTI2MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "No stress, no hassle. Just steady returns. This is the future of investing!"
  },
  {
    id: 8,
    name: "Roberto Silva",
    location: "São Paulo, Brazil",
    profit: "$22,000",
    period: "9 weeks",
    image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMHRyYWRlcnxlbnwxfHx8fDE3NjkxNzA4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Transparent, reliable, and profitable. What more could you ask for?"
  },
  {
    id: 9,
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    profit: "$40,000",
    period: "5 months",
    image: "https://images.unsplash.com/photo-1758611972895-34286de80d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY5MTcwODA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Professional service with impressive results. They truly deliver on their promises."
  },
  {
    id: 10,
    name: "Maria Garcia",
    location: "Madrid, Spain",
    profit: "$26,000",
    period: "11 weeks",
    image: "https://images.unsplash.com/photo-1551989745-8ac16ba81d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzY5MTI2MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "I started with a small investment and the returns have been phenomenal. Highly recommend!"
  },
  {
    id: 11,
    name: "James Wilson",
    location: "Chicago, USA",
    profit: "$33,000",
    period: "3.5 months",
    image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMHRyYWRlcnxlbnwxfHx8fDE3NjkxNzA4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Finally, an investment platform that actually works! My profits speak for themselves."
  },
  {
    id: 12,
    name: "Priya Patel",
    location: "Mumbai, India",
    profit: "$19,500",
    period: "7 weeks",
    image: "https://images.unsplash.com/photo-1758611972895-34286de80d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY5MTcwODA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Easy to use, great support, and excellent returns. Everything you need in one place!"
  },
  {
    id: 13,
    name: "Alexander Petrov",
    location: "Moscow, Russia",
    profit: "$38,000",
    period: "4 months",
    image: "https://images.unsplash.com/photo-1551989745-8ac16ba81d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzY5MTI2MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "The automated system is brilliant. My money works for me while I sleep!"
  },
  {
    id: 14,
    name: "Linda Thompson",
    location: "Los Angeles, USA",
    profit: "$24,000",
    period: "10 weeks",
    image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMHRyYWRlcnxlbnwxfHx8fDE3NjkxNzA4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "From day one, I felt confident in their expertise. Results exceeded all expectations!"
  },
  {
    id: 15,
    name: "Oliver Schmidt",
    location: "Berlin, Germany",
    profit: "$31,000",
    period: "12 weeks",
    image: "https://images.unsplash.com/photo-1758611972895-34286de80d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY5MTcwODA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Trustworthy, transparent, and highly profitable. Best investment decision I've ever made!"
  }
];

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Next testimonial"
    >
      <ChevronRight className="size-6 text-violet-600" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Previous testimonial"
    >
      <ChevronLeft className="size-6 text-violet-600" />
    </button>
  );
}

export function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-violet-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Real Traders, Real Profits
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See how our members are achieving financial freedom through forex investing
          </p>
        </motion.div>

        <div className="relative px-12">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 h-full"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="size-14 rounded-full object-cover ring-4 ring-violet-100"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-1">
                        <TrendingUp className="size-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                      <p className="text-xs text-slate-600">{testimonial.location}</p>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="size-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">
                        {testimonial.profit}
                      </div>
                      <div className="text-green-100 text-sm">
                        Profit in {testimonial.period}
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-slate-600 text-sm italic">
                    "{testimonial.quote}"
                  </blockquote>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Investment Journey?
          </h3>
          <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful investors who have already transformed their financial future
          </p>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <div className="text-center">
              <div className="text-4xl font-bold">10,000+</div>
              <div className="text-violet-200">Active Investors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">$150M+</div>
              <div className="text-violet-200">Total Invested</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">99%</div>
              <div className="text-violet-200">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
