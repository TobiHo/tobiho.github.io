import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, Users } from "lucide-react";

export const CurrentProjects = () => {
  const currentProjects = [
    {
      title: "Winkelmann Group - SAP Technology Expert",
      period: "02/2024 - Present",
      role: "SAP Basis Administrator & Technology Expert",
      company: "Winkelmann Group",
      industry: "Automotive Supplier, Heating Technology",
      employees: "4000+",
      description: "Leading SAP infrastructure management, user administration, transport management, and Fiori implementation.",
      technologies: ["SAP S4/HANA", "SAP BTP", "SAP ALM", "SAP FIORI", "SAP CPI"],
      responsibilities: [
        "Incident Management & System Monitoring",
        "User & Role Management",
        "Transport Management & Automated Chains",
        "Fiori Implementation & Configuration",
        "ALM Setup & Daily Operations"
      ]
    },
    {
      title: "Bundesagentur für Arbeit - Data Privacy Architecture",
      period: "04/2024 - Present",
      role: "Data Modeler - Privacy-Compliant DWH",
      company: "Bundesagentur für Arbeit",
      industry: "Public Sector",
      employees: "100,000+",
      description: "Designing privacy-compliant data warehouse architecture for the central DWH 'Tresor' project.",
      technologies: ["Oracle Exadata", "Innovator (MID)", "Data Vault", "BPMN"],
      responsibilities: [
        "Data Privacy Architecture Design",
        "Logical Table Modeling",
        "ETL Process Design (BPMN)",
        "Compliance Documentation"
      ]
    },
    {
      title: "Deutsche Apotheker- und Ärztebank - BCBS 239 Implementation",
      period: "03/2024 - Present",
      role: "Data Modeler & Data Engineer",
      company: "Deutsche Apotheker- und Ärztebank",
      industry: "Banking/Financial Services",
      employees: "2,500+",
      description: "Implementing regulatory requirements BCBS 239/MaRisk through Data Vault 2.0 architecture.",
      technologies: ["Oracle Exadata", "Data Vault 2.0", "Apex", "SCRUM"],
      responsibilities: [
        "Modular DWH Architecture (Data Vault 2.0)",
        "Heterogeneous Source System Integration",
        "Data Marts Development",
        "Regulatory Compliance (BCBS 239/MaRisk)"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold gradient-text">Current Projects</h2>
        <p className="text-muted-foreground">Currently engaged in 3 major consulting projects</p>
      </div>

      <div className="space-y-6">
        {currentProjects.map((project, index) => (
          <Card key={index} className="glass-card hover:hero-glow transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                <Badge variant="accent" className="w-fit">
                  <Calendar className="w-3 h-3 mr-1" />
                  {project.period}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-1" />
                  {project.company}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {project.employees}
                </div>
                <span>• {project.industry}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">{project.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Key Responsibilities:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="skill">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};