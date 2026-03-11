"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Dumbbell, Star, Target, Heart, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="medium"
      background="floatingGradient"
      cardStyle="outline"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Why Us", id: "why-us" },
            { name: "Services", id: "services" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Gallery", id: "gallery" },
            { name: "Contact", id: "membership" }
          ]}
          brandName="The Royal Fitness 2.0"
          bottomLeftText="Dalibari, Assam"
          bottomRightText="+91 99573 80670"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="Build Your Strongest Body at Dalibari's Top-Rated Gym"
          description="Professional trainers, premium equipment, and a motivating environment. Join 60+ satisfied members who have transformed their fitness journey at The Royal Fitness 2.0."
          tag="Premium Fitness Experience"
          tagIcon={Dumbbell}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          rating={5}
          ratingText="⭐ 4.9 Rating from 60+ Reviews"
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/training-items-athletics_23-2151077753.jpg",              imageAlt: "Professional gym training environment"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/woman-takes-dumbbell-from-rack-gym-close-up-her-hand_169016-46934.jpg",              imageAlt: "Certified trainer providing personalized guidance"
            }
          ]}
          buttons={[
            { text: "📞 Call Now: +91 99573 80670", href: "tel:+919957380670" },
            { text: "Get Membership Info", href: "#membership" }
          ]}
          buttonAnimation="slide-up"
          mediaAnimation="slide-up"
        />
      </div>

      <div id="why-us" data-section="why-us">
        <FeatureCardTwentyOne
          title="Why Choose The Royal Fitness 2.0"
          description="We combine professional expertise with a welcoming environment to help you achieve your fitness goals."
          tag="Premium Standards"
          tagIcon={Star}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/young-brunette-sexy-slim-girl-doing-workout-gym_627829-9245.jpg"
          imageAlt="Modern, clean gym facility"
          accordionItems={[
            {
              id: "1",              title: "Professional Certified Trainers",              content: "Our team of certified fitness experts provides personalized guidance and motivation to ensure you get maximum results from every workout session."
            },
            {
              id: "2",              title: "Premium Modern Equipment",              content: "State-of-the-art machines and equipment for strength training, cardio, and functional fitness. All equipment is regularly maintained and sanitized."
            },
            {
              id: "3",              title: "Clean & Hygienic Environment",              content: "We maintain the highest standards of cleanliness and sanitation. Every equipment is disinfected daily, and facilities are spotless."
            },
            {
              id: "4",              title: "Supportive Fitness Community",              content: "Join a friendly and motivating community of members who share your fitness goals. Train with people who inspire and encourage you daily."
            },
            {
              id: "5",              title: "24-Hour Access",              content: "Flexibility to work out whenever it suits your schedule. Our gym is open 24 hours a day for dedicated fitness enthusiasts."
            }
          ]}
          buttons={[{ text: "Start Your Journey", href: "#membership" }]}
          useInvertedBackground={false}
          mediaPosition="right"
          buttonAnimation="slide-up"
          mediaAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <ProductCardTwo
          title="Our Services & Programs"
          description="Choose the perfect fitness program tailored to your goals and experience level."
          tag="Comprehensive Fitness Solutions"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",              brand: "The Royal Fitness 2.0",              name: "Strength Training Programs",              price: "Custom Plans",              rating: 5,
              reviewCount: "50+",              imageSrc: "http://img.b2bpic.net/free-photo/training-items-athletics_23-2151077753.jpg",              imageAlt: "Strength training equipment and coaching"
            },
            {
              id: "2",              brand: "The Royal Fitness 2.0",              name: "Weight Loss Programs",              price: "Custom Plans",              rating: 5,
              reviewCount: "45+",              imageSrc: "http://img.b2bpic.net/free-photo/woman-helping-man-workout-gym-medium-shot_23-2149740188.jpg",              imageAlt: "Professional trainer assisting with form"
            },
            {
              id: "3",              brand: "The Royal Fitness 2.0",              name: "Personal Training",              price: "Custom Plans",              rating: 5,
              reviewCount: "52+",              imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur_74190-1300.jpg",              imageAlt: "One-on-one personal training session"
            },
            {
              id: "4",              brand: "The Royal Fitness 2.0",              name: "Beginner Fitness Plans",              price: "Custom Plans",              rating: 5,
              reviewCount: "48+",              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-fit-people-training-outdoors_52683-136415.jpg",              imageAlt: "Beginner-friendly group fitness class"
            },
            {
              id: "5",              brand: "The Royal Fitness 2.0",              name: "Body Transformation",              price: "Custom Plans",              rating: 5,
              reviewCount: "43+",              imageSrc: "http://img.b2bpic.net/free-photo/fitness-girl-making-flexing-exercise_23-2148017401.jpg",              imageAlt: "Member transformation success"
            },
            {
              id: "6",              brand: "The Royal Fitness 2.0",              name: "Nutritional Guidance",              price: "Custom Plans",              rating: 5,
              reviewCount: "40+",              imageSrc: "http://img.b2bpic.net/free-photo/woman-takes-dumbbell-from-rack-gym-close-up-her-hand_169016-46934.jpg",              imageAlt: "Fitness and nutrition consultation"
            }
          ]}
        />
      </div>

      <div id="transformation" data-section="transformation">
        <MetricSplitMediaAbout
          tag="Success Stories"
          tagIcon={Target}
          tagAnimation="slide-up"
          title="Your Transformation Starts Here"
          description="At The Royal Fitness 2.0, we don't just provide equipment—we provide the expertise, support, and motivation to help you achieve real results. See how our members have transformed their lives."
          metrics={[
            { value: "100+", title: "Successful Transformations" },
            { value: "24/7", title: "Access to Premium Facility" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/man-stretching-gym_23-2148024326.jpg"
          imageAlt="Member fitness transformation and achievement"
          useInvertedBackground={true}
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",              name: "Rajesh Kumar",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-handsome-muscular-guy-listening-music-headset_8353-6827.jpg",              imageAlt: "Rajesh Kumar testimonial"
            },
            {
              id: "2",              name: "Priya Singh",              imageSrc: "http://img.b2bpic.net/free-photo/sportswoman-carries-rubber-fitness-mat-yoga-practice-looks-seriously-camera-exercises-regularly-stay-healthy-dressed-activewear-poses-blurred_273609-53916.jpg",              imageAlt: "Priya Singh testimonial"
            },
            {
              id: "3",              name: "Arjun Patel",              imageSrc: "http://img.b2bpic.net/free-photo/joyful-young-sporty-man-wearing-wristband-holding-dumbbell-doing-strong-gesture-isolated-orange-background_141793-63068.jpg",              imageAlt: "Arjun Patel testimonial"
            },
            {
              id: "4",              name: "Sneha Sharma",              imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-fitness-woman-sport-activewear-cross-arms-chest-smiling-being-healthy-fit-training-exercising-white-background_176420-50325.jpg",              imageAlt: "Sneha Sharma testimonial"
            },
            {
              id: "5",              name: "Vikram Singh",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-exercising-gym_23-2149517255.jpg",              imageAlt: "Vikram Singh testimonial"
            },
            {
              id: "6",              name: "Anjali Verma",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-fitness-woman-stretching-her-hands_171337-6243.jpg",              imageAlt: "Anjali Verma testimonial"
            }
          ]}
          cardTitle="Excellent trainers, amazing facility and great environment. Best place for muscles and strength training in Dalibari."
          cardTag="See what they say"
          cardTagIcon={Heart}
          cardAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="gallery" data-section="gallery">
        <TeamCardTwo
          title="Gallery - Our Facility & Members"
          description="Explore The Royal Fitness 2.0's state-of-the-art equipment, clean facility, and vibrant community of fitness enthusiasts."
          tag="Visual Tour"
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          members={[
            {
              id: "1",              name: "Gym Interior",              role: "Premium Facility",              description: "State-of-the-art equipment and spacious training areas designed for optimal workouts.",              imageSrc: "http://img.b2bpic.net/free-photo/young-brunette-sexy-slim-girl-doing-workout-gym_627829-9245.jpg",              imageAlt: "Modern gym interior"
            },
            {
              id: "2",              name: "Equipment Zone",              role: "Premium Equipment",              description: "Comprehensive range of modern machinery for strength training and cardio fitness.",              imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur_74190-1300.jpg",              imageAlt: "Gym equipment and machines"
            },
            {
              id: "3",              name: "Personal Training",              role: "Expert Coaching",              description: "One-on-one sessions with certified trainers ensuring proper form and maximum results.",              imageSrc: "http://img.b2bpic.net/free-photo/woman-helping-man-workout-gym-medium-shot_23-2149740188.jpg",              imageAlt: "Personal training session"
            },
            {
              id: "4",              name: "Community Workouts",              role: "Group Fitness",              description: "Join our vibrant community for group classes and motivational training sessions.",              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-fit-people-training-outdoors_52683-136415.jpg",              imageAlt: "Group fitness class"
            }
          ]}
        />
      </div>

      <div id="membership" data-section="membership">
        <ContactSplit
          tag="Get Started"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Claim Your Membership Today"
          description="Join The Royal Fitness 2.0 and start your transformation. Fill out the form below and our team will contact you within 24 hours with personalized membership options."
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/group-women-relaxing-after-work-out_23-2148387772.jpg"
          imageAlt="Fitness membership inquiry"
          mediaPosition="right"
          inputPlaceholder="Enter your email or phone"
          buttonText="Get Membership Details"
          termsText="We will contact you within 24 hours. Your privacy is important to us."
          mediaAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/training-items-athletics_23-2151077753.jpg"
          imageAlt="The Royal Fitness 2.0 - Premium gym facility"
          logoText="The Royal Fitness 2.0"
          copyrightText="© 2025 | The Royal Fitness 2.0. All rights reserved."
          columns={[
            {
              title: "Quick Links",              items: [
                { label: "Home", href: "#" },
                { label: "Why Us", href: "#why-us" },
                { label: "Services", href: "#services" },
                { label: "Gallery", href: "#gallery" }
              ]
            },
            {
              title: "Get in Touch",              items: [
                { label: "📞 +91 99573 80670", href: "tel:+919957380670" },
                { label: "📍 No.2 Dalibari, Assam (Above SBI)", href: "#" },
                { label: "⏰ Open 24 Hours", href: "#" },
                { label: "✉️ Contact Us", href: "#membership" }
              ]
            },
            {
              title: "Follow Us",              items: [
                { label: "📱 Instagram", href: "https://instagram.com" },
                { label: "👍 Facebook", href: "https://facebook.com" },
                { label: "🔗 LinkedIn", href: "https://linkedin.com" },
                { label: "Privacy Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
