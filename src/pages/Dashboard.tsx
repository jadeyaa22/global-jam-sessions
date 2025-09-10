import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  Users, 
  MessageCircle, 
  Video, 
  Calendar,
  Music,
  Book,
  Palette,
  Code,
  Globe2,
  Heart,
  Camera,
  Gamepad2,
  Star,
  UserPlus,
  Settings
} from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const userInterests = ["Music", "Study Groups", "Programming"];
  
  const matchedUsers = [
    {
      id: 1,
      name: "Sarah Chen",
      location: "Tokyo, Japan",
      avatar: "/placeholder.svg",
      status: "online",
      interests: ["Music", "Study Groups", "Languages"],
      rating: 4.9,
      sessions: 127,
      bio: "Music producer and computer science student. Love collaborating on electronic music and algorithm studies.",
      lastActive: "2 min ago",
      compatibility: 92
    },
    {
      id: 2,
      name: "Alex Rivera",
      location: "Madrid, Spain",
      avatar: "/placeholder.svg",
      status: "in-session",
      interests: ["Music", "Digital Art", "Programming"],
      rating: 4.8,
      sessions: 89,
      bio: "Full-stack developer and guitar player. Always up for coding sessions or music jams.",
      lastActive: "Now",
      compatibility: 88
    },
    {
      id: 3,
      name: "Maya Patel",
      location: "Mumbai, India",
      avatar: "/placeholder.svg",
      status: "online",
      interests: ["Study Groups", "Programming", "Digital Art"],
      rating: 4.9,
      sessions: 203,
      bio: "UI/UX designer passionate about creating beautiful interfaces and mentoring others.",
      lastActive: "5 min ago",
      compatibility: 85
    },
    {
      id: 4,
      name: "Lucas Kim",
      location: "Seoul, South Korea",
      avatar: "/placeholder.svg",
      status: "offline",
      interests: ["Music", "Gaming", "Programming"],
      rating: 4.7,
      sessions: 156,
      bio: "Game developer and music enthusiast. Let's build something amazing together!",
      lastActive: "1 hour ago",
      compatibility: 82
    },
    {
      id: 5,
      name: "Emma Thompson",
      location: "London, UK",
      avatar: "/placeholder.svg",
      status: "online",
      interests: ["Study Groups", "Languages", "Photography"],
      rating: 4.8,
      sessions: 94,
      bio: "PhD student in linguistics. Love helping others learn and exploring different cultures.",
      lastActive: "Just now",
      compatibility: 79
    },
    {
      id: 6,
      name: "Diego Santos",
      location: "São Paulo, Brazil",
      avatar: "/placeholder.svg",
      status: "online",
      interests: ["Music", "Fitness", "Digital Art"],
      rating: 4.6,
      sessions: 67,
      bio: "Musician and fitness coach. Passionate about creative expression and healthy living.",
      lastActive: "3 min ago",
      compatibility: 76
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "in-session": return "bg-accent";
      case "offline": return "bg-muted-foreground";
      default: return "bg-muted-foreground";
    }
  };

  const getInterestIcon = (interest: string) => {
    const icons: { [key: string]: any } = {
      "Music": Music,
      "Study Groups": Book,
      "Digital Art": Palette,
      "Programming": Code,
      "Languages": Globe2,
      "Fitness": Heart,
      "Photography": Camera,
      "Gaming": Gamepad2
    };
    return icons[interest] || Users;
  };

  const filteredUsers = matchedUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.interests.some(interest => interest.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (activeFilter === "all") return matchesSearch;
    if (activeFilter === "online") return matchesSearch && user.status === "online";
    if (activeFilter === "high-match") return matchesSearch && user.compatibility >= 85;
    return matchesSearch && user.interests.includes(activeFilter);
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-white/10 bg-card/50 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold gradient-text">Dashboard</h1>
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                {filteredUsers.length} matches
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Your Interests */}
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">Your Interests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {userInterests.map((interest, index) => {
                  const Icon = getInterestIcon(interest);
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-sm">{interest}</span>
                    </div>
                  );
                })}
                <Button variant="ghost" className="w-full text-sm">
                  Edit Interests
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Matches</span>
                  <span className="font-semibold">{matchedUsers.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Active Sessions</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Messages</span>
                  <span className="font-semibold">12</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, location, or interests..."
                  className="pl-10 bg-muted/50 border-white/10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <div className="flex space-x-2">
                  {["all", "online", "high-match", "Music", "Study Groups", "Programming"].map((filter) => (
                    <Button
                      key={filter}
                      variant={activeFilter === filter ? "hero" : "ghost"}
                      size="sm"
                      onClick={() => setActiveFilter(filter)}
                      className="text-xs"
                    >
                      {filter === "all" ? "All" : 
                       filter === "online" ? "Online" :
                       filter === "high-match" ? "High Match" : filter}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* User Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredUsers.map((user) => (
                <Card key={user.id} className="glass border-white/10 hover-glow group">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${getStatusColor(user.status)}`}></div>
                        </div>
                        <div>
                          <h3 className="font-semibold">{user.name}</h3>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" />
                            {user.location}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-primary/20 text-primary text-xs">
                        {user.compatibility}% match
                      </Badge>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {user.bio}
                    </p>

                    {/* Interests */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {user.interests.slice(0, 3).map((interest, index) => {
                        const Icon = getInterestIcon(interest);
                        return (
                          <Badge key={index} variant="outline" className="text-xs">
                            <Icon className="h-3 w-3 mr-1" />
                            {interest}
                          </Badge>
                        );
                      })}
                      {user.interests.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{user.interests.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 mr-1 text-accent" />
                        {user.rating}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {user.sessions} sessions
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {user.lastActive}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <Button variant="hero" size="sm" className="flex-1 group">
                        <UserPlus className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform" />
                        Connect
                      </Button>
                      <Button variant="glass" size="sm">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                      <Button variant="glass" size="sm">
                        <Video className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredUsers.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No matches found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;