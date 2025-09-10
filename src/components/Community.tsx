import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Clock, Users, Star } from "lucide-react";

export const Community = () => {
  const activeUsers = [
    { name: "Sarah Chen", location: "Tokyo", avatar: "/placeholder.svg", status: "Studying", subject: "Mathematics" },
    { name: "Alex Rivera", location: "Madrid", avatar: "/placeholder.svg", status: "Music", subject: "Guitar" },
    { name: "Maya Patel", location: "Mumbai", avatar: "/placeholder.svg", status: "Design", subject: "UI/UX" },
    { name: "Tom Wilson", location: "London", avatar: "/placeholder.svg", status: "Language", subject: "Spanish" },
    { name: "Lisa Kim", location: "Seoul", avatar: "/placeholder.svg", status: "Coding", subject: "React" },
    { name: "David Brown", location: "Sydney", avatar: "/placeholder.svg", status: "Art", subject: "Digital Art" }
  ];

  const liveSessions = [
    {
      title: "Advanced Calculus Study Group",
      participants: 12,
      duration: "2h 15m",
      category: "Mathematics",
      host: "Prof. Anderson",
      rating: 4.9
    },
    {
      title: "Jazz Piano Collaboration",
      participants: 8,
      duration: "1h 30m",
      category: "Music",
      host: "Carlos Montenegro",
      rating: 4.8
    },
    {
      title: "Web Development Bootcamp",
      participants: 25,
      duration: "3h 00m",
      category: "Technology",
      host: "DevCommunity",
      rating: 4.9
    }
  ];

  return (
    <section id="community" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Live Community</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Join thousands of 
              <span className="gradient-text"> active learners</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              Our vibrant community spans across 200+ countries, with members actively 
              participating in study groups, creative sessions, and collaborative projects 24/7.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Active Now</span>
                </div>
                <div className="text-2xl font-bold gradient-text">2,847</div>
                <div className="text-sm text-muted-foreground">users online</div>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Sessions Today</span>
                </div>
                <div className="text-2xl font-bold gradient-text">342</div>
                <div className="text-sm text-muted-foreground">live sessions</div>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Join the Community
            </Button>
          </div>

          {/* Live Activity */}
          <div className="space-y-6">
            {/* Active Users */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="font-semibold mb-4 flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                Active Members
              </h3>
              <div className="space-y-3">
                {activeUsers.slice(0, 4).map((user, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium truncate">{user.name}</span>
                        <Badge variant="secondary" className="text-xs">{user.status}</Badge>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {user.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Sessions */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="font-semibold mb-4 flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse mr-2"></div>
                Popular Sessions
              </h3>
              <div className="space-y-4">
                {liveSessions.slice(0, 2).map((session, index) => (
                  <div key={index} className="border border-white/10 rounded-lg p-4 hover:border-white/20 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm leading-tight">{session.title}</h4>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Star className="h-3 w-3 mr-1 text-accent" />
                        {session.rating}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <span>{session.participants} participants</span>
                        <span>•</span>
                        <span>{session.duration}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">{session.category}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};