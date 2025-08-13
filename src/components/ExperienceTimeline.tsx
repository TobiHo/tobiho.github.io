import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, Trophy } from "lucide-react";

export const ExperienceTimeline = () => {
  const experiences = [
    {
      period: "2022 - 2024",
      title: "Product Owner & Lead Developer",
      company: "T-Systems International",
      industry: "Telecommunications",
      highlights: [
        "Led cross-functional agile team for 3 enterprise applications",
        "Architected migration from Oracle/SAP BO to Azure/Power BI",
        "Implemented DevOps CI/CD pipelines for SAP BO environments",
        "Achieved 40% performance improvement through architecture optimization"
      ],
      technologies: ["Azure", "Power BI", "SAP BO", "Python", "Databricks", "SCRUM", "SAFe"]
    },
    {
      period: "2017 - 2022",
      title: "Senior BI Developer & Project Lead",
      company: "Multiple Enterprise Clients",
      industry: "Various (Chemical, Food, Aviation)",
      highlights: [
        "Designed and implemented global consolidating DWH for Vestolit/Orbia",
        "Led BI initiatives for Lufthansa flight operations reporting",
        "Delivered 15+ successful data warehouse implementations",
        "Specialized in SAP BO and Data Services architectures"
      ],
      technologies: ["SAP BO", "SAP Data Services", "Oracle", "SQL Server", "ETL", "DWH"]
    },
    {
      period: "2010 - 2017",
      title: "IT Systems Specialist",
      company: "Grafschafter Volksbank eG",
      industry: "Financial Services",
      highlights: [
        "Developed algorithmic solutions for banking operations",
        "Built automated savings system ('Aufrunden Bitte')",
        "Managed complete IT infrastructure (Windows/Linux servers)",
        "Completed apprenticeship as IT Systems Integration Specialist"
      ],
      technologies: ["Java", "C++", "JavaScript", "SQL", "Windows Server", "Linux", "VM Ware"]
    }
  ];

  const certifications = [
    "Microsoft Certified: Azure Fundamentals (2024)",
    "Professional Scrum Master (PSM I) (2019)",
    "SAP BusinessObjects Certified Professional",
    "Bachelor of Science - Business Informatics (2021)"
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold gradient-text">Professional Experience</h2>
        <p className="text-muted-foreground">15+ years of expertise in enterprise data solutions and SAP technologies</p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="glass-card hover:hero-glow transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                <Badge variant="accent" className="w-fit">
                  <Calendar className="w-3 h-3 mr-1" />
                  {exp.period}
                </Badge>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Building className="w-4 h-4 mr-1" />
                {exp.company} • {exp.industry}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2 flex items-center">
                  <Trophy className="w-4 h-4 mr-2 text-primary" />
                  Key Achievements:
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm mb-2">Core Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="skill">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Certifications & Education */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-xl text-primary">Certifications & Education</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Trophy className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};