import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, Users, Target, Clock } from "lucide-react";

export const ProjectHistory = () => {
  const allProjects = [
    {
      period: "04/2024 - Present",
      title: "Data Modeler - Privacy-Compliant DWH",
      company: "Bundesagentur für Arbeit",
      industry: "Public Sector",
      employees: "100,000+",
      role: "Data Modeler",
      status: "active",
      description: "Technical-functional modeling of privacy-compliant DWH area ('Tresor') for isolated processing of personal information.",
      technologies: ["Oracle Exadata", "Innovator (MID)", "Data Vault", "BPMN", "Confluence", "Jira"],
      responsibilities: [
        "Privacy-compliant DWH architecture design",
        "Data structure modeling using (S)ERM diagrams",
        "Logical table models and functional layers",
        "ETL process conception (BPMN models)",
        "Data flow analysis and compliance documentation"
      ]
    },
    {
      period: "03/2024 - Present", 
      title: "Data Modeler & Data Engineer - BCBS 239/MaRisk",
      company: "Deutsche Apotheker- und Ärztebank",
      industry: "Banking/Financial Services",
      employees: "2,500+",
      role: "Data Modeler & Data Engineer",
      status: "active",
      description: "Modular Data Warehouse architecture based on Data Vault 2.0 for regulatory compliance BCBS 239/MaRisk.",
      technologies: ["Oracle Exadata", "Data Vault 2.0", "Apex", "SCRUM"],
      responsibilities: [
        "Modular DWH architecture (Data Vault 2.0)",
        "Heterogeneous source system integration",
        "Data Vault structures and Data Marts",
        "Risk controlling data modeling",
        "Integration, UAT, and regression testing"
      ]
    },
    {
      period: "02/2024 - 08/2025",
      title: "SAP Technology Expert & Basis Administrator",
      company: "Winkelmann Group",
      industry: "Automotive Supplier, Heating Technology", 
      employees: "4,000+",
      role: "SAP Technology Expert",
      status: "active",
      description: "SAP infrastructure management, Fiori implementation, and comprehensive system administration.",
      technologies: ["SAP S4/HANA", "SAP BTP", "SAP ALM", "SAP FIORI", "SAP CPI"],
      responsibilities: [
        "Incident Management & System Monitoring",
        "User & Role Management",
        "Transport Management & Automated Chains",
        "Fiori Implementation & Configuration",
        "ALM Setup & BTP Configuration"
      ]
    },
    {
      period: "01/2024",
      title: "SAP ABAP Platform on Azure - Self Project",
      company: "Holtkamp Consulting",
      industry: "Software Development/Consulting",
      employees: "1",
      role: "SAP Developer & Azure Administrator",
      status: "completed",
      description: "Azure environment setup for SAP ABAP Platform trial via Docker containerization.",
      technologies: ["Azure Services", "Docker", "SAP ABAP Platform", "Linux", "MacOS"],
      responsibilities: [
        "Azure environment configuration",
        "Container Registry setup",
        "SAP ABAP Platform installation",
        "Performance optimization",
        "Documentation"
      ]
    },
    {
      period: "08/2023 - 01/2024",
      title: "Power BI Developer & Technology Analyst",
      company: "MVV Energie AG", 
      industry: "Energy Supply",
      employees: "6,500+",
      role: "Developer & Analyst",
      status: "completed",
      description: "Report redesign and technology decision analysis comparing Power BI, SAC, and SAP BO through POCs.",
      technologies: ["Power BI", "SAP Analytics Cloud", "SAP BO", "Azure Data Factory"],
      responsibilities: [
        "Power BI report design (IBCS compliant)",
        "SAP Web Intelligence development",
        "SAP Analytics Cloud modeling",
        "Technology comparison POCs",
        "End-to-end testing"
      ]
    },
    {
      period: "11/2022 - 12/2023",
      title: "Lead Developer - Azure Migration",
      company: "T-Systems International",
      industry: "Telecommunications",
      employees: "28,000+",
      role: "Lead Developer",
      status: "completed", 
      description: "Migration of Oracle/SAP BO/Lumira applications to Microsoft Azure/Power BI architecture.",
      technologies: ["Azure", "Power BI", "Databricks", "Python", "SAP BO", "Oracle"],
      responsibilities: [
        "Power BI dashboard design (IBCS)",
        "Azure platform rights concepts",
        "Databricks data processing (Python)",
        "End-to-end testing",
        "Architecture migration leadership"
      ]
    },
    {
      period: "04/2022 - 06/2023",
      title: "Product Owner & Lead Developer",
      company: "T-Systems International", 
      industry: "Telecommunications",
      employees: "28,000+",
      role: "Product Owner & Lead Developer",
      status: "completed",
      description: "Cross-functional agile team leadership for enterprise application development and architecture transition.",
      technologies: ["Power BI", "Azure", "Databricks", "SAP BO", "Oracle", "Python"],
      responsibilities: [
        "Product vision and roadmap creation",
        "Stakeholder requirement management",
        "Architecture transition leadership",
        "Power BI dashboard development",
        "Azure data processing design"
      ]
    },
    {
      period: "06/2020 - 08/2022",
      title: "DWH Developer - Enterprise Extension",
      company: "OSI Group",
      industry: "Food & Beverage",
      employees: "19,000+", 
      role: "Developer",
      status: "completed",
      description: "Data warehouse adaptation and extension for existing DWH/ETL systems.",
      technologies: ["Microsoft SQL Server", "SAP Data Services", "SAP BO", "Microsoft Dynamics 365"],
      responsibilities: [
        "DWH design and modeling (Microsoft SQL)",
        "ETL design and modeling",
        "SAP BO reporting development",
        "Framework process adjustments"
      ]
    },
    {
      period: "04/2020 - 08/2020",
      title: "Application Management Specialist", 
      company: "Daimler TSS",
      industry: "Automotive",
      employees: "1,200+",
      role: "Application Manager",
      status: "completed",
      description: "Application management for existing SAP BW reporting systems and process chain optimization.",
      technologies: ["SAP BW", "SAP BEx Query Designer", "SAP BusinessObjects"],
      responsibilities: [
        "Process chain monitoring and correction",
        "Authorization concept adjustments", 
        "Query design and modifications",
        "System performance optimization"
      ]
    },
    {
      period: "09/2018 - 05/2020",
      title: "Financial Dashboard Developer",
      company: "T-Systems International",
      industry: "Telecommunications", 
      employees: "28,000+",
      role: "Developer",
      status: "completed",
      description: "Design and development of comprehensive financial dashboard with full ETL/DWH implementation.",
      technologies: ["Oracle", "SAP Data Services", "SAP BO", "SAP Lumira"],
      responsibilities: [
        "DWH design and modeling (Oracle SQL)",
        "ETL design and modeling",
        "Reporting development (SAP BO & Lumira)",
        "Requirements analysis and documentation"
      ]
    },
    {
      period: "10/2017 - 09/2018",
      title: "Project Lead - Global DWH Implementation",
      company: "Vestolit/Orbia",
      industry: "Chemical Industry",
      employees: "20,000+",
      role: "Project Leader & Dev Lead", 
      status: "completed",
      description: "Initial creation of globally consolidating data warehouse with worldwide distributed source systems.",
      technologies: ["Microsoft SQL Server", "SAP Data Services", "SAP BO", "SAP Power Designer"],
      responsibilities: [
        "Infrastructure design and modeling",
        "Global DWH creation and modeling", 
        "ETL framework design",
        "New framework process creation",
        "Worldwide source system integration"
      ]
    },
    {
      period: "06/2018 - 09/2018",
      title: "Sales Analytics Developer",
      company: "Gerolsteiner GmbH & Co. KG", 
      industry: "Food & Beverage",
      employees: "800+",
      role: "Developer",
      status: "completed",
      description: "Dashboard development for sales information analysis and BEx query optimization.",
      technologies: ["SAP BW", "SAP Lumira", "SAP BEx Query Designer"],
      responsibilities: [
        "BEx query adjustments",
        "Lumira dashboard extension",
        "Sales data analysis optimization"
      ]
    },
    {
      period: "03/2018 - 07/2018", 
      title: "Flight Operations Reporting Specialist",
      company: "Lufthansa AG",
      industry: "Aviation",
      employees: "130,000+",
      role: "Application Manager & Developer",
      status: "completed",
      description: "Application management and enhancement of flight time and delay analysis reporting systems.",
      technologies: ["SAP BW", "SAP BO Web Intelligence", "SAP BEx Query Designer"],
      responsibilities: [
        "BEx query modeling",
        "Reporting extension (SAP Web Intelligence)",
        "System monitoring and maintenance"
      ]
    },
    {
      period: "10/2017 - 04/2018",
      title: "Retail Reporting Developer",
      company: "frankonia GmbH",
      industry: "Retail",
      employees: "650+",
      role: "Developer", 
      status: "completed",
      description: "Reporting development for purchasing and sales information analysis.",
      technologies: ["SAP BW", "SAP BO", "SAP BEx Query Designer"],
      responsibilities: [
        "BEx query modeling",
        "SAP BO reporting creation",
        "BW modeling transport management"
      ]
    },
    {
      period: "10/2017 - 12/2017",
      title: "HANA Native Solution PoC Developer",
      company: "Phoenix Pharma SE",
      industry: "Pharmaceutical", 
      employees: "45,000+",
      role: "Developer",
      status: "completed",
      description: "Proof of concept for HANA native solution validation and SAP BW integration.",
      technologies: ["SAP HANA", "SAP BW", "Calculation Views", "SQL Script"],
      responsibilities: [
        "Calculation view modeling",
        "Table and structure modeling",
        "SAP BW connection setup"
      ]
    },
    {
      period: "07/2017 - 06/2018",
      title: "DWH Extension Developer",
      company: "Vestolit/Orbia",
      industry: "Chemical Industry",
      employees: "20,000+", 
      role: "Developer",
      status: "completed",
      description: "Data warehouse development and extension with new source systems integration.",
      technologies: ["Microsoft SQL Server", "SAP Data Services", "SAP BO"],
      responsibilities: [
        "DWH design and modeling",
        "ETL design and modeling", 
        "Reporting development",
        "Framework process adjustments"
      ]
    },
    {
      period: "07/2017 - 06/2018",
      title: "Post-Acquisition DWH Developer",
      company: "OSI Group",
      industry: "Food & Beverage", 
      employees: "19,000+",
      role: "Developer",
      status: "completed",
      description: "DWH/ETL adaptation and extension following company acquisition.",
      technologies: ["Microsoft SQL Server", "SAP Data Services", "Microsoft Dynamics 365"],
      responsibilities: [
        "Post-acquisition DWH modeling",
        "ETL adaptation and extension",
        "Framework process modifications"
      ]
    },
    {
      period: "08/2010 - 07/2017",
      title: "IT Systems Integration Specialist",
      company: "Grafschafter Volksbank eG",
      industry: "Financial Services",
      employees: "350+",
      role: "IT Specialist & Developer",
      status: "completed",
      description: "Complete IT infrastructure management and custom banking solution development including automated savings system.",
      technologies: ["Java", "C++", "JavaScript", "SQL", "Windows Server", "Linux", "VMware"],
      responsibilities: [
        "Server administration (Windows/Linux)",
        "Custom banking algorithm development",
        "Automated savings system ('Aufrunden Bitte')",
        "User and rights management",
        "1st, 2nd & 3rd level support"
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="accent" className="bg-green-600/20 text-green-400 border-green-600/30">Active</Badge>;
      case 'completed':
        return <Badge variant="secondary">Completed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold gradient-text">Complete Project History</h2>
        <p className="text-muted-foreground">
          {allProjects.length} projects spanning {allProjects.filter(p => p.status === 'active').length} active engagements and extensive enterprise consulting experience
        </p>
      </div>

      <div className="space-y-6">
        {allProjects.map((project, index) => (
          <Card key={index} className="glass-card hover:hero-glow transition-all duration-300 relative">
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                <CardTitle className="text-xl text-primary pr-4">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2">
                  {getStatusBadge(project.status)}
                  <Badge variant="accent" className="shrink-0">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.period}
                  </Badge>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-1" />
                  {project.company}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {project.employees}
                </div>
                <span>• {project.industry}</span>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-1" />
                  {project.role}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed">{project.description}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-primary">Key Responsibilities:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <span className="text-primary mr-2 flex-shrink-0">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-primary">Technologies & Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="skill" className="text-xs">
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

      {/* Summary Statistics */}
      <Card className="glass-card mt-8">
        <CardHeader>
          <CardTitle className="text-xl text-primary">Career Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">{allProjects.length}</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">{allProjects.filter(p => p.status === 'active').length}</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">{new Set(allProjects.map(p => p.industry)).size}</div>
              <div className="text-sm text-muted-foreground">Industries</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};