import { Button } from "@/components/ui/button";
import { ArrowRight, Video, MessageCircle, Calendar, Award, Globe, Palette } from "lucide-react";
import studyIcon from "@/assets/study-icon.png";
import musicIcon from "@/assets/music-icon.png";
import communityIcon from "@/assets/community-icon.png";

export const Features = () => {
  const features = [
    {
      icon: studyIcon,
      iconComponent: Video,
      title: "Study Together",
      description: "Join virtual study groups, share whiteboards, and collaborate on projects with students worldwide.",
      color: "primary"
    },
    {
      icon: musicIcon,
      iconComponent: MessageCircle,
      title: "Music Jam Sessions",
      description: "Create music together in real-time, share playlists, and collaborate with musicians globally.",
      color: "accent"
    },
    {
      icon: communityIcon,
      iconComponent: Globe,
      title: "Global Community",
      description: "Connect with like-minded people, join interest-based groups, and build lasting friendships.",
      color: "primary"
    },
    {
      iconComponent: Calendar,
      title: "Smart Scheduling",
      description: "Coordinate across time zones with intelligent scheduling and automated reminders.",
      color: "accent"
    },
    {
      iconComponent: Award,
      title: "Achievement System",
      description: "Earn badges, track progress, and celebrate milestones with your global community.",
      color: "primary"
    },
    {
      iconComponent: Palette,
      title: "Creative Tools",
      description: "Access shared whiteboards, collaborative documents, and creative spaces for any project.",
      color: "accent"
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-accent">✨ Platform Features</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Everything you need to 
            <span className="gradient-text"> connect globally</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful tools and features designed to bring people together for learning, 
            creating, and building meaningful connections across the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-card p-8 rounded-2xl border border-white/10 hover-glow hover:border-white/20 transition-all duration-300"
            >
              <div className="mb-6">
                {feature.icon ? (
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-12 h-12 object-contain"
                  />
                ) : (
                  <div className={`w-12 h-12 rounded-xl bg-${feature.color}/20 flex items-center justify-center`}>
                    <feature.iconComponent className={`h-6 w-6 text-${feature.color}`} />
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <Button variant="ghost" className="group/btn p-0 h-auto font-medium">
                Learn more 
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            Explore All Features
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};