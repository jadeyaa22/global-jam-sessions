import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Globe, Mail, Lock, User, ArrowRight, Music, Book, Palette, Code, Globe2, Heart, Camera, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [step, setStep] = useState(1);

  const interests = [
    { id: "music", label: "Music", icon: Music, description: "Jam sessions, composition, instruments" },
    { id: "study", label: "Study Groups", icon: Book, description: "Academic collaboration, tutoring" },
    { id: "art", label: "Digital Art", icon: Palette, description: "Design, illustration, creativity" },
    { id: "coding", label: "Programming", icon: Code, description: "Software development, tech talks" },
    { id: "languages", label: "Languages", icon: Globe2, description: "Language exchange, practice" },
    { id: "fitness", label: "Fitness", icon: Heart, description: "Workout groups, wellness" },
    { id: "photography", label: "Photography", icon: Camera, description: "Photo sharing, techniques" },
    { id: "gaming", label: "Gaming", icon: Gamepad2, description: "Gaming sessions, esports" }
  ];

  const toggleInterest = (interestId: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden py-8">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }}></div>

      <div className="w-full max-w-2xl relative z-10 px-4">
        <div className="glass p-8 rounded-2xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold gradient-text">Global Connect</span>
            </div>
            <h1 className="text-2xl font-bold mb-2">Join the global community</h1>
            <p className="text-muted-foreground">Create your account and connect with like-minded people worldwide</p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                1
              </div>
              <div className={`w-16 h-0.5 transition-colors ${step >= 2 ? 'bg-primary' : 'bg-muted'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                2
              </div>
            </div>
          </div>

          {step === 1 ? (
            /* Step 1: Basic Information */
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      className="pl-10 bg-muted/50 border-white/10 focus:border-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      className="pl-10 bg-muted/50 border-white/10 focus:border-primary"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 bg-muted/50 border-white/10 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    className="pl-10 bg-muted/50 border-white/10 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="pl-10 bg-muted/50 border-white/10 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <Button type="submit" variant="hero" className="w-full group">
                Continue to Interests
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          ) : (
            /* Step 2: Interest Selection */
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">What are your interests?</h3>
                <p className="text-muted-foreground text-sm">
                  Select your interests to connect with like-minded people. You can change these later.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {interests.map((interest) => {
                  const Icon = interest.icon;
                  const isSelected = selectedInterests.includes(interest.id);
                  
                  return (
                    <div
                      key={interest.id}
                      onClick={() => toggleInterest(interest.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 hover:scale-105 ${
                        isSelected 
                          ? 'border-primary bg-primary/10 shadow-elegant' 
                          : 'border-white/10 bg-muted/20 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium mb-1">{interest.label}</h4>
                          <p className="text-xs text-muted-foreground">{interest.description}</p>
                        </div>
                        {isSelected && (
                          <Badge variant="secondary" className="bg-primary text-primary-foreground">
                            ✓
                          </Badge>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Selected: {selectedInterests.length} interest{selectedInterests.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="flex space-x-4">
                <Button 
                  variant="glass" 
                  className="flex-1"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button 
                  variant="hero" 
                  className="flex-1 group"
                  disabled={selectedInterests.length === 0}
                >
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:text-primary-glow transition-colors font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;