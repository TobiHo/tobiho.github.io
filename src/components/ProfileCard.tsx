import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

export const ProfileCard = () => {
  return (
    <Card className="glass-card hover:hero-glow transition-all duration-500">
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center overflow-hidden">
            <img
              src="/Holtkamp-Tobias.jpg"
              alt="Tobias Holtkamp"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold gradient-text">Tobias Holtkamp</h1>
            <p className="text-xl text-muted-foreground">Senior Consultant SAP, Data & Analytics</p>  
            <p className="text-sm text-muted-foreground">Holtkamp Consulting GmbH</p>
            <p className="text-sm text-muted-foreground">Geschäftsführer</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="skill">Data Analytics</Badge>
            <Badge variant="skill">SAP Technology Expert</Badge>
            <Badge variant="skill">SAP BusinessObjects</Badge>
            <Badge variant="skill">Power BI</Badge>
            <Badge variant="skill">Azure Platform</Badge>
          </div>

          <div className="flex flex-col space-y-3 w-full max-w-sm">
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:tobias@holtkamp-consulting.de"
                className="hover:underline"
              >
                tobias@holtkamp-consulting.de
              </a>
            </div>
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+49 173/9307286</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Nordhorn, Germany</span>
            </div>
          </div>

          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href="https://holtkamp-consulting.de/kontaktanfrage/" target="_blank" rel="noopener noreferrer">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href="https://holtkamp-consulting.de/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Website
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};