import { Link } from "react-router-dom";
import { Calculator, Zap, Gift, Shield } from "lucide-react";

/**
 * Hero Section Component
 * Full-height hero with two-column layout:
 * - Left: Heading, description, CTA button
 * - Right: 2x2 grid of numbered feature cards
 * Fully responsive with mobile-first approach
 */
const Hero = () => {
  const features = [
    {
      id: 1,
      icon: Calculator,
      label: "Accurate Calculations",
      ariaLabel: "Feature 1: Accurate age calculations with leap year handling",
    },
    {
      id: 2,
      icon: Zap,
      label: "Instant Results",
      ariaLabel: "Feature 2: Get instant results in real-time",
    },
    {
      id: 3,
      icon: Gift,
      label: "Completely Free",
      ariaLabel: "Feature 3: 100% free to use forever",
    },
    {
      id: 4,
      icon: Shield,
      label: "Privacy Protected",
      ariaLabel: "Feature 4: Your data stays completely private",
    },
  ];

  return (
    <section
      aria-labelledby="hero-title"
    className="relative min-h-[92vh] h-auto flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 px-4 sm:px-6 lg:px-8 md:py-0"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Two-column grid: Desktop 12-col (7+5), Mobile stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Text Content + CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* H1 - Clean, professional heading */}
            <h1
              id="hero-title"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-snug"
            >
              Age Difference Calculator
            </h1>

            {/* H2 - Sub-heading */}
            <h2 className="text-xl sm:text-2xl font-semibold text-primary leading-snug">
              Calculate Exact Age Difference in Years, Months and Days Instantly
            </h2>

            {/* Description - Clean, concise */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
             Use our free age difference calculator to find the exact age gap between two dates in years, months, and days. This tool is fast, accurate, and completely private.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#age-calculator"
                aria-label="Start Age Calculation"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-xl shadow-lg hover:shadow-xl hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all duration-300 transform hover:scale-105"
              >
                Start Age Calculation
                <Calculator className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: 2x2 Feature Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className="relative group neomorph rounded-2xl p-6 transition-all duration-300 hover:neomorph-hover"
                    role="article"
                    aria-label={feature.ariaLabel}
                  >
                    {/* Numeric Badge - Top Left */}
                    <div
                      className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      {feature.id}
                    </div>

                    {/* Icon */}
                    <div className="flex flex-col items-center text-center space-y-3 pt-2">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon
                          className="h-8 w-8 text-primary"
                          role="img"
                          aria-hidden="true"
                        />
                      </div>

                      {/* Label */}
                      <p className="text-sm font-semibold text-foreground leading-tight">
                        {feature.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator (optional visual enhancement) */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        aria-hidden="true"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-muted-foreground"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
