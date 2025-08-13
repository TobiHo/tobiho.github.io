import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "SAP Technologies",
      skills: [
        { name: "SAP BusinessObjects", level: 95, projects: "10+ Projects", years: "7+ Years" },
        { name: "SAP BW/4HANA", level: 85, projects: "4+ Projects", years: "4+ Years" },
        { name: "SAP Data Services", level: 90, projects: "8+ Projects", years: "7+ Years" },
        { name: "SAP Analytics Cloud", level: 75, projects: "2+ Projects", years: "1+ Years" },
        { name: "SAP Basis Administration", level: 80, projects: "Current", years: "2+ Years" }
      ]
    },
    {
      title: "Microsoft Technologies",
      skills: [
        { name: "Power BI", level: 85, projects: "3+ Projects", years: "3+ Years" },
        { name: "Azure Platform", level: 80, projects: "2+ Projects", years: "1+ Years" },
        { name: "Azure Data Factory", level: 75, projects: "1+ Projects", years: "1+ Years" },
        { name: "SQL Server", level: 90, projects: "8+ Projects", years: "6+ Years" }
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "Data Warehouse Design", level: 95, projects: "15+ Projects", years: "10+ Years" },
        { name: "ETL/ELT Development", level: 90, projects: "12+ Projects", years: "8+ Years" },
        { name: "Business Intelligence", level: 95, projects: "15+ Projects", years: "10+ Years" },
        { name: "Data Modeling", level: 90, projects: "10+ Projects", years: "7+ Years" }
      ]
    },
    {
      title: "Programming & Tools",
      skills: [
        { name: "Python", level: 75, projects: "3+ Projects", years: "2+ Years" },
        { name: "SQL (Oracle/T-SQL)", level: 95, projects: "15+ Projects", years: "10+ Years" },
        { name: "SCRUM/Agile", level: 85, projects: "8+ Projects", years: "5+ Years" },
        { name: "CI/CD", level: 70, projects: "3+ Projects", years: "2+ Years" }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold gradient-text">Technical Expertise</h2>
        <p className="text-muted-foreground">Comprehensive experience across SAP, Microsoft, and Data Analytics technologies</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <Card key={categoryIndex} className="glass-card hover:hero-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <div className="flex space-x-2">
                      <Badge variant="skill" className="text-xs">
                        {skill.projects}
                      </Badge>
                      <Badge variant="accent" className="text-xs">
                        {skill.years}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};