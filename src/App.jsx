import { useState, useEffect } from "react";
import {
  Mail,
 Check,
  Terminal,
  Cloud,
  Server,
  GitBranch,
  Container,
  Activity,
  ExternalLink,
  Award,
  BookOpen,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
// Lucide removed brand icons (GitHub, Twitter, etc.) in v1.0 — using an inline SVG instead
const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function Portfolio() {
  const githubUsername = "Nikhilchalla";

  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState(new Date());
  const [uptime, setUptime] = useState(99.98);
  const [buildStatus, setBuildStatus] = useState("passing");
  const [typedText, setTypedText] = useState("");

  const fullCommand = "$ aws sts get-caller-identity --query 'Arn'";

  const email = "nikhilchalla511@gmail.com";
  const linkedin = "https://linkedin.com/in/nikhil-challa";
  const github = `https://github.com/${githubUsername}`;

  const skills = {
    "Cloud Platforms": ["AWS (EC2, S3, VPC, IAM, Lambda, RDS)", "CloudFront", "Route53", "CloudWatch"],
    "Infrastructure as Code": ["Terraform", "AWS CloudFormation", "Ansible"],
    "CI/CD & Automation": ["GitHub Actions", "Jenkins", "GitLab CI", "AWS CodePipeline"],
    "Containers & Orchestration": ["Docker", "Kubernetes", "Amazon EKS", "Helm"],
    "Monitoring & Logging": ["CloudWatch", "Prometheus", "Grafana", "ELK Stack"],
    "Scripting & Languages": ["Bash", "Python", "YAML", "Linux Administration"]
  };

  const certifications = [
    { name: "AWS Certified Cloud Practitioner", status: "Completed", year: "2026" },
    { name: "AWS Certified Solutions Architect – Associate", status: "In Progress", year: "2026" },
    { name: "HashiCorp Certified: Terraform Associate", status: "In Progress", year: "2026" },
  ];

  const projects = [
    { title: "CI/CD Pipeline for Containerized App", description: "Built an automated pipeline that builds, tests, and deploys a Dockerized app to AWS ECS on every push to main.", stack: ["GitHub Actions", "Docker", "AWS ECS", "ECR"], github: "#" },
    { title: "Multi-Tier VPC with Terraform", description: "Designed and provisioned a production-style VPC with public/private subnets, NAT gateway, and bastion host using Terraform modules.", stack: ["Terraform", "AWS VPC", "IAM"], github: "#" },
    { title: "EKS Cluster with Helm Deployments", description: "Deployed a Kubernetes cluster on Amazon EKS and shipped microservices using Helm charts with autoscaling configured.", stack: ["Kubernetes", "EKS", "Helm"], github: "#" },
    { title: "Serverless URL Shortener", description: "Built a fully serverless app using Lambda, API Gateway, and DynamoDB, deployed via the Serverless Framework.", stack: ["Lambda", "API Gateway", "DynamoDB"], github: "#" },
    { title: "Monitoring & Alerting Stack", description: "Set up centralized monitoring using CloudWatch metrics and Grafana dashboards with Slack alerting on threshold breaches.", stack: ["CloudWatch", "Grafana", "Prometheus"], github: "#" },
  ];

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(+(99.9 + Math.random() * 0.09).toFixed(2));
      setBuildStatus(Math.random() > 0.1 ? "passing" : "running");
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullCommand.slice(0, i));
      i++;
      if (i > fullCommand.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#2B2A28] font-mono">
      {/* Status Bar */}
      <div className="border-b border-[#2B2A28]/15 bg-[#F5F1E8] px-4 py-2 flex flex-wrap items-center justify-between text-xs text-[#6B6862]">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1">
            <Activity className="w-3 h-3" /> uptime: {uptime}%
          </span>
          <span className={`flex items-center gap-1 ${buildStatus === "passing" ? "text-[#3F6B4F]" : "text-[#B5822C]"}`}>
            <GitBranch className="w-3 h-3" /> build: {buildStatus}
          </span>
        </div>
        <span>{time.toLocaleTimeString()}</span>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Terminal Header */}
        <div className="mb-10 border border-[#2B2A28]/15 rounded-md overflow-hidden bg-white/40">
          <div className="bg-[#2B2A28]/[0.04] px-4 py-2 flex items-center gap-2 text-[#6B6862] text-xs border-b border-[#2B2A28]/10">
            <Terminal className="w-3 h-3" /> ~/portfolio/whoami.sh
          </div>
          <div className="p-4 text-sm">
            <span className="text-[#2B2A28]">{typedText}</span>
            <span className="animate-pulse">▊</span>
          </div>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1917] mb-2">Nikhil Challa</h1>
          <p className="text-[#B5622C] text-lg mb-4">Cloud &amp; DevOps Engineer</p>
          <p className="text-[#6B6862] max-w-2xl leading-relaxed text-sm">
            // Cloud Engineer focused on AWS infrastructure, automation, and building
            reliable, reproducible systems. Learning in public, one pipeline at a time.
          </p>
        </div>

        {/* Socials */}
        <div className="flex gap-4 mb-12 flex-wrap">
          <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-[#2B2A28]/20 px-3 py-2 rounded hover:bg-[#2B2A28]/[0.04] transition-colors text-sm">
            <FaGithub className="w-4 h-4" /> GitHub
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-[#2B2A28]/20 px-3 py-2 rounded hover:bg-[#2B2A28]/[0.04] transition-colors text-sm">
            <FaLinkedin className="w-4 h-4" /> LinkedIn
          </a>
          <button onClick={copyEmail} className="flex items-center gap-2 border border-[#2B2A28]/20 px-3 py-2 rounded hover:bg-[#2B2A28]/[0.04] transition-colors text-sm">
            {copied ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />} {copied ? "Copied" : email}
          </button>
        </div>

        {/* GitHub Activity — live data */}
        <section className="mb-12">
          <h2 className="text-[#1A1917] text-lg mb-4 flex items-center gap-2">
            <GithubIcon className="w-4 h-4" /> // GitHub Activity
          </h2>
          <div className="border border-[#2B2A28]/15 rounded-md p-4 bg-white/40 space-y-4">
            <img
              src={`https://ghchart.rshah.org/B5622C/${githubUsername}`}
              alt="GitHub contribution graph"
              className="w-full rounded-md bg-white"
              loading="lazy"
            />
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-[#1A1917] text-lg mb-4 flex items-center gap-2">
            <Server className="w-4 h-4" /> // Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="border border-[#2B2A28]/15 rounded-md p-4 bg-white/40">
                <h3 className="text-[#1A1917] text-sm font-semibold mb-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="text-xs bg-[#2B2A28]/[0.05] border border-[#2B2A28]/15 px-2 py-1 rounded text-[#4A4844]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-[#1A1917] text-lg mb-4 flex items-center gap-2">
            <Award className="w-4 h-4" /> // Certifications
          </h2>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="border border-[#2B2A28]/15 rounded-md p-4 flex items-center justify-between flex-wrap gap-2 bg-white/40">
                <div>
                  <p className="text-[#1A1917] text-sm">{cert.name}</p>
                  <p className="text-[#8A877F] text-xs">{cert.year}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded border ${cert.status === "Completed" ? "border-[#3F6B4F]/40 text-[#3F6B4F]" : "border-[#B5822C]/40 text-[#B5822C]"}`}>
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-[#1A1917] text-lg mb-4 flex items-center gap-2">
            <Container className="w-4 h-4" /> // Projects
          </h2>
          <div className="space-y-4">
            {projects.map((p) => (
              <div key={p.title} className="border border-[#2B2A28]/15 rounded-md p-4 bg-white/40 hover:bg-white/70 transition-colors">
                <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                  <h3 className="text-[#1A1917] font-semibold text-sm">{p.title}</h3>
                  <a href={p.github} className="text-[#6B6862] hover:text-[#1A1917] flex items-center gap-1 text-xs">
                    <GithubIcon className="w-3 h-3" /> repo <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-[#5A574F] text-xs mb-3 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs bg-[#F5F1E8] border border-[#2B2A28]/15 px-2 py-1 rounded text-[#4A4844]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Journey */}
        <section className="mb-12">
          <h2 className="text-[#1A1917] text-lg mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> // Currently Learning
          </h2>
          <div className="border border-[#2B2A28]/15 rounded-md p-4 text-[#5A574F] text-sm leading-relaxed bg-white/40">
            Building toward the AWS Solutions Architect Associate certification while deepening
            hands-on experience with Kubernetes, GitOps workflows (ArgoCD), and cost-optimization
            practices for cloud infrastructure.
          </div>
        </section>

        <footer className="text-center text-[#8A877F] text-xs mt-16 pb-6">
          <Cloud className="w-4 h-4 inline mr-1" /> deployed on the cloud, built from the terminal
        </footer>
      </div>
    </div>
  );
}