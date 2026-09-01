import Gallery from "./components/Gallery";
import Interests from "./components/Interests";
import FloatingPod from "./components/FloatingPod";
import { useEffect, useState } from "react";

import {
  Mail,
  ChevronDown,
  Server,
  Container,
  ExternalLink,
  BookOpen,
  UserIcon,
  FileText,
  Cloud,
  Database,
} from "lucide-react";

import {
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiHelm,
  SiTerraform,
  SiAnsible,
  SiGithubactions,
  SiJenkins,
  SiGitlab,
  SiGnubash,
  SiPython,
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";

import { GitHubCalendar } from "react-github-calendar";
import { Analytics } from "@vercel/analytics/react";

const GithubIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Portfolio() {
  const githubUsername = "Nikhilchalla";

  const [time, setTime] = useState(new Date());
  const [pageViews, setPageViews] = useState(null);
  const [visitors, setVisitors] = useState(null);
  const [openProject, setOpenProject] = useState(null);

  const email = "nikhilchalla511@gmail.com";
  const linkedin = "https://linkedin.com/in/nikhil-challa";
  const github = `https://github.com/${githubUsername}`;

  const resume =
    "https://drive.google.com/file/d/17Ph35yH7Wb8RlmHSJyuFsi_bqFE3u6Za/view?usp=drive_link";

  const projects = [
    {
      number: "01",
      slug: "packet-journey",
      title: "Kubernetes Request Flow Visualizer",
      intro:
        "I wanted to understand what actually happens after a request enters a Kubernetes cluster, so I built a visual way to follow the journey.",
      story:
        "The project follows a request from the browser through Ingress, Service, kube-proxy and cluster networking until it reaches the Pod. I later connected the visualizer to a locally simulated Kubernetes environment so it could move beyond being just a static diagram.",
      learned: [
        "Kubernetes networking",
        "Ingress & Services",
        "kube-proxy",
        "Request routing",
        "Frontend visualization",
      ],
      stack: ["React", "Kubernetes", "k3s", "Docker"],
      architecture: [
        "Browser",
        "Ingress",
        "Service",
        "kube-proxy",
        "Pod",
      ],
      github:
        "https://github.com/Nikhilchalla/k8s-request-flow-visualizer",
      demo: null,
    },

    {
      number: "02",
      slug: "terraform-ha",
      title: "Highly Available AWS App with Terraform",
      intro:
        "A hands-on experiment in building infrastructure that doesn't depend on a single server.",
      story:
        "I provisioned a VPC, multiple public subnets, an Application Load Balancer and an Auto Scaling Group using Terraform. Each instance exposes its availability zone, instance ID and uptime, which made it easy to watch requests move across infrastructure.",
      learned: [
        "Infrastructure as Code",
        "High availability",
        "Load balancing",
        "Auto Scaling",
        "AWS networking",
      ],
      stack: ["Terraform", "AWS", "Flask", "EC2", "ALB"],
      architecture: [
        "Client",
        "Application Load Balancer",
        "Auto Scaling Group",
        "EC2",
        "Flask",
      ],
      github:
        "https://github.com/Nikhilchalla/terraform-aws-ha-flask",
      demo: null,
    },

    {
      number: "03",
      slug: "books-demo",
      title: "Books App on Kubernetes",
      intro:
        "A small full-stack application I used to understand how application and database workloads communicate inside Kubernetes.",
      story:
        "The application runs inside Kubernetes with PostgreSQL as the database, Ingress handling incoming traffic and Services connecting the different workloads. The app itself is intentionally simple — the interesting part is the infrastructure underneath it.",
      learned: [
        "Kubernetes deployments",
        "PostgreSQL",
        "Ingress",
        "Service discovery",
        "Container networking",
      ],
      stack: ["Kubernetes", "PostgreSQL", "Docker", "Ingress"],
      architecture: [
        "Browser",
        "Ingress",
        "App Service",
        "Application Pod",
        "PostgreSQL",
      ],
      github:
        "https://github.com/Nikhilchalla/books-demo",
      demo: null,
    },
  ];

  const exploring = [
    {
      title: "Kubernetes Networking",
      description:
        "Going deeper into Services, Ingress, CNI and how traffic actually moves through a cluster.",
    },
    {
      title: "Backend Engineering",
      description:
        "Learning authentication, sessions, cookies, PostgreSQL and API design through full-stack builds.",
    },
    {
      title: "System Design",
      description:
        "Understanding how small applications evolve into reliable distributed systems.",
    },
    {
      title: "Cloud Architecture",
      description:
        "Connecting cloud services into production-style systems instead of learning them individually.",
    },
  ];

  const tools = [
  { name: "AWS", icon: Cloud },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Helm", icon: SiHelm },
  { name: "Terraform", icon: SiTerraform },
  { name: "Ansible", icon: SiAnsible },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Jenkins", icon: SiJenkins },
  { name: "GitLab CI", icon: SiGitlab },
  { name: "Bash", icon: SiGnubash },
  { name: "Python", icon: SiPython },
  { name: "Grafana", icon: SiGrafana },
  { name: "Prometheus", icon: SiPrometheus },
  { name: "ELK", icon: Database },
];

  useEffect(() => {
    fetch("/api/analytics", {
      method: "POST",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Analytics request failed: ${res.status}`);
        }

        return res.json();
      })
      .then((data) => {
        setPageViews(data.pageViews);
        setVisitors(data.visitors);
      })
      .catch((error) => {
        console.error("Analytics failed:", error);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-[#B8B6AF] font-mono">

      {/* Status Bar */}

      <div className="border-b border-[#2A2A2A] bg-[#0E0E0E] px-4 py-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 flex-wrap text-[11px] sm:text-xs text-[#77756F]">

          <div className="flex items-center gap-4 flex-wrap">

            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#70977C]" />
              online
            </span>

            <span>
              nikhil@cloud
            </span>

          </div>

          <span>
            {formattedTime}
          </span>

        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        {/* Banner */}

        <div className="mb-10">
          <div className="
            relative
            w-full
            overflow-hidden
            rounded-md
            border border-[#2A2A2A]
            bg-[#151515]
          ">
            <img
              src="/banner/erin_git_banner.jpg"
              alt="Portfolio banner"
              className="
                w-full
                h-[160px]
                sm:h-[200px]
                md:h-[240px]
                object-cover
                object-[65%_center]
                opacity-90
              "
            />
          </div>
        </div>

        {/* WHOAMI */}

        <section className="mb-12">

          <div className="mb-5">
            <h7 className="text-[#F0EFEA] text-lg flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              root@nikhil:~/
            </h7>
          </div>

          <div className="mb-4 flex items-center gap-4 sm:gap-5 flex-wrap">

            <img
              src={`https://github.com/${githubUsername}.png`}
              alt="Nikhil Challa"
              className="
                w-20 h-20
                sm:w-24 sm:h-24
                rounded-full
                border border-[#2A2A2A]
                object-cover
              "
              loading="lazy"
            />

            <div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F0EFEA] mb-1">
                Nikhil Challa
              </h1>

              <p className="text-[#C66A3A] text-base sm:text-lg">
                Cloud · DevOps · Infrastructure
              </p>

            </div>

          </div>

          <p className="text-[#A4A29B] max-w-2xl leading-relaxed text-sm mb-8">
            I build things around cloud, infrastructure and automation,
            break them occasionally, figure out why, and document what I learn.
          </p>

          {/* Connect */}

          <div className="flex items-center gap-2">

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="
                w-10 h-10
                rounded-md
                border border-[#2A2A2A]
                bg-[#151515]

                flex
                items-center
                justify-center

                text-[#A4A29B]

                hover:text-[#F0EFEA]
                hover:bg-[#1A1A1A]
                hover:border-[#3A3A3A]

                transition-all
                duration-300

                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#C66A3A]/50
              "
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="
                w-10 h-10
                rounded-md
                border border-[#2A2A2A]
                bg-[#151515]

                flex
                items-center
                justify-center

                text-[#A4A29B]

                hover:text-[#F0EFEA]
                hover:bg-[#1A1A1A]
                hover:border-[#3A3A3A]

                transition-all
                duration-300
              "
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${email}`}
              aria-label="Email"
              title="Email"
              className="
                w-10 h-10
                rounded-md
                border border-[#2A2A2A]
                bg-[#151515]

                flex
                items-center
                justify-center

                text-[#A4A29B]

                hover:text-[#C66A3A]
                hover:bg-[#1A1A1A]
                hover:border-[#C66A3A]/50

                transition-all
                duration-300
              "
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              title="Resume"
              className="
                w-10 h-10
                rounded-md
                border border-[#2A2A2A]
                bg-[#151515]

                flex
                items-center
                justify-center

                text-[#A4A29B]

                hover:text-[#C66A3A]
                hover:bg-[#1A1A1A]
                hover:border-[#C66A3A]/50

                transition-all
                duration-300
              "
            >
              <FileText className="w-4 h-4" />
            </a>

          </div>

        </section>

        {/* BUILDS */}

        <section className="mb-12">

          <div className="mb-6">
            
            <h7 className="text-[#F0EFEA] text-lg flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              root@nikhil:~/builds
            </h7>

            <p className="text-sm text-[#A4A29B] max-w-2xl mt-3 leading-relaxed">
              A few things I've built while trying to understand how
              infrastructure, applications and distributed systems actually work.
            </p>

          </div>

          <div className="space-y-4">

            {projects.map((project) => {
              const isOpen = openProject === project.slug;

              return (
                <article
                  key={project.slug}
                  className="
                    border border-[#2A2A2A]
                    rounded-md
                    bg-[#151515]
                    overflow-hidden
                    transition-colors
                    duration-300
                    hover:bg-[#181818]
                    hover:border-[#343434]
                  "
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenProject(isOpen ? null : project.slug)
                    }
                    className="
                      w-full
                      text-left
                      p-4 sm:p-5 md:p-6
                      flex
                      items-start
                      justify-between
                      gap-3 sm:gap-5
                    "
                    aria-expanded={isOpen}
                    aria-label={`${isOpen ? "Collapse" : "Expand"} ${project.title}`}
                  >

                    <div className="min-w-0">

                      <span className="
                        text-[10px]
                        text-[#77756F]
                        tracking-widest
                        uppercase
                      ">
                        {project.number} / {project.slug}
                      </span>

                      <h3 className="
                        text-base
                        sm:text-lg
                        md:text-xl
                        font-semibold
                        text-[#F0EFEA]
                        mt-3
                        mb-2
                      ">
                        {project.title}
                      </h3>

                      <p className="
                        text-sm
                        text-[#A4A29B]
                        leading-relaxed
                        max-w-2xl
                      ">
                        {project.intro}
                      </p>

                    </div>

                    <span className="
                      shrink-0
                      w-9 h-9
                      rounded-full
                      border border-[#303030]
                      bg-[#111111]
                      flex
                      items-center
                      justify-center
                      mt-1
                    ">

                      <ChevronDown
                        className={`
                          w-4 h-4
                          text-[#77756F]
                          transition-transform
                          duration-300
                          ${isOpen ? "rotate-180 text-[#C66A3A]" : "rotate-0"}
                        `}
                      />

                    </span>

                  </button>

                  <div
                    className={`
                      grid
                      transition-all
                      duration-500
                      ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >

                    <div className="overflow-hidden">

                      <div className="px-4 pb-5 sm:px-5 md:px-6 md:pb-6">

                        <div className="border-t border-[#2A2A2A] pt-5">

                          {/* Architecture */}

                          <div className="
                            mb-6
                            border border-[#2A2A2A]
                            rounded-md
                            bg-[#101010]
                            overflow-hidden
                          ">

                            <div className="
                              px-3 py-2
                              border-b border-[#2A2A2A]
                              text-[10px]
                              text-[#77756F]
                            ">
                              architecture.flow
                            </div>

                            <div className="
                              p-3 sm:p-4
                              flex
                              items-center
                              gap-2
                              flex-wrap
                              text-xs
                              min-w-0
                            ">

                              {project.architecture.map((item, index) => (
                                <div
                                  key={item}
                                  className="flex items-center gap-2 min-w-0"
                                >

                                  <span className="
                                    border border-[#303030]
                                    bg-[#181818]
                                    px-2.5 py-1.5
                                    rounded
                                    text-[#B8B6AF]
                                  ">
                                    {item}
                                  </span>

                                  {index !==
                                    project.architecture.length - 1 && (
                                    <span className="text-[#C66A3A]">
                                      →
                                    </span>
                                  )}

                                </div>
                              ))}

                            </div>

                          </div>

                          <p className="
                            text-[#A4A29B]
                            text-sm
                            leading-relaxed
                            max-w-2xl
                            mb-6
                          ">
                            {project.story}
                          </p>

                          <div className="mb-6">

                            <p className="
                              text-[10px]
                              uppercase
                              tracking-widest
                              text-[#77756F]
                              mb-3
                            ">
                              what I learned
                            </p>

                            <div className="flex flex-wrap gap-2">

                              {project.learned.map((item) => (
                                <span
                                  key={item}
                                  className="
                                    text-xs
                                    border border-[#303030]
                                    rounded
                                    px-2.5 py-1.5
                                    text-[#B8B6AF]
                                    bg-[#181818]
                                  "
                                >
                                  {item}
                                </span>
                              ))}

                            </div>

                          </div>

                          <div className="
                            pt-4
                            border-t border-[#2A2A2A]
                            flex
                            items-center
                            justify-between
                            gap-4
                            flex-wrap
                          ">

                            <div className="flex flex-wrap gap-x-3 gap-y-1">

                              {project.stack.map((item) => (
                                <span
                                  key={item}
                                  className="text-[11px] text-[#77756F]"
                                >
                                  {item}
                                </span>
                              ))}

                            </div>

                            <div className="flex items-center gap-4">

                              {project.demo && (
                                <a
                                  href={project.demo}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="
                                    flex items-center gap-1.5
                                    text-xs
                                    text-[#A4A29B]
                                    hover:text-[#F0EFEA]
                                    transition-colors
                                  "
                                >
                                  live demo
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}

                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                  flex items-center gap-1.5
                                  text-xs
                                  text-[#C66A3A]
                                  hover:text-[#E07A47]
                                  transition-colors
                                "
                              >
                                explore build
                                <ExternalLink className="w-3 h-3" />
                              </a>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              mt-5
              text-xs
              text-[#77756F]
              hover:text-[#C66A3A]
              transition-colors
              flex-wrap
            "
          >
            <span>
              root@nikhil:~/builds$ ls --all
            </span>

            <span className="text-[#C66A3A]">
              more experiments on GitHub
            </span>

            <ExternalLink className="w-3 h-3" />
          </a>

        </section>

        {/* EXPLORING */}

        <section className="mb-12">

          <div className="mb-5">
            <h7 className="text-[#F0EFEA] text-lg flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              root@nikhil:~/now
            </h7>
          </div>

          <div className="
            border border-[#2A2A2A]
            rounded-md
            bg-[#151515]
            overflow-hidden
          ">

            {exploring.map((item, index) => (

              <div
                key={item.title}
                className="
                  grid
                  md:grid-cols-[190px_1fr]
                  gap-2 md:gap-6
                  px-4 py-4
                  border-b
                  last:border-b-0
                  border-[#2A2A2A]
                "
              >

                <div className="flex items-start gap-3">

                  <span className="text-[10px] text-[#77756F] pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm text-[#F0EFEA]">
                    {item.title}
                  </span>

                </div>

                <p className="
                  text-sm
                  text-[#A4A29B]
                  leading-relaxed
                ">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* GITHUB */}

        <section className="mb-12">

          <div className="mb-4">
            <h7 className="text-[#F0EFEA] text-lg flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              root@nikhil:~/github
            </h7>
          </div>

          <div className="
            border border-[#2A2A2A]
            rounded-md
            p-5
            bg-[#151515]
            overflow-x-auto
          ">

            <GitHubCalendar
              username={githubUsername}
              colorScheme="dark"
              blockSize={14}
              blockMargin={4}
              fontSize={13}
              hideColorLegend={false}
              hideMonthLabels={false}
              theme={{
                dark: [
                  "#202020",
                  "#3B403C",
                  "#4E6554",
                  "#62806B",
                  "#70977C",
                ],
              }}
            />

          </div>

        </section>

        {/* PERSONAL */}

        <Gallery />

        <Interests />

        {/* TOOLBOX */}

        <section className="mb-12">

          <div className="mb-4">
            <h7 className="text-[#F0EFEA] text-lg flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              root@nikhil:~/stack
            </h7>
          </div>

          <div
            className="
              border border-[#2A2A2A]
              rounded-md
              bg-[#151515]
              overflow-hidden
            "
          >
            <div
              className="
                px-4 py-2
                border-b border-[#2A2A2A]
                bg-[#111111]
                text-[10px]
                text-[#77756F]
              "
            >
              root@nikhil:~/stack$ ls
            </div>

            <div
              className="
                grid
                grid-cols-3
                sm:grid-cols-4
                md:grid-cols-5
                gap-px
                bg-[#2A2A2A]
              "
            >
              {tools.map((tool) => {
                const Icon = tool.icon;

                return (
                  <div
                    key={tool.name}
                    title={tool.name}
                    className="
                      group
                      min-h-[105px]
                      bg-[#151515]
                      flex
                      flex-col
                      items-center
                      justify-center
                      gap-3
                      px-3
                      py-5
                      hover:bg-[#1A1A1A]
                      transition-colors
                      duration-300
                    "
                  >
                    <Icon
                      className="
                        w-6 h-6
                        text-[#77756F]
                        group-hover:text-[#C66A3A]
                        transition-all
                        duration-300
                        group-hover:scale-110
                      "
                    />

                    <span
                      className="
                        text-[10px]
                        sm:text-[11px]
                        text-center
                        text-[#77756F]
                        group-hover:text-[#B8B6AF]
                        transition-colors
                      "
                    >
                      {tool.name}
                    </span>
                  </div>
                );
              })}
            </div>

            <div
              className="
                px-4 py-2.5
                border-t border-[#2A2A2A]
                bg-[#111111]
                text-[10px]
                text-[#555]
              "
            >
              {tools.length} binaries available.
              <span className="text-[#C66A3A] animate-pulse ml-2">
                ▊
              </span>
            </div>
          </div>

        </section>

        {/* FOOTER */}

        <footer className="
          mt-14
          pt-6
          border-t border-[#2A2A2A]
        ">

          <div className="
            flex
            items-center
            justify-between
            gap-5
            flex-wrap
            text-xs
            text-[#77756F]
          ">

            <span>
              root@nikhil:~$ echo "Thanks for visiting."
            </span>

            <div className="flex items-center gap-4 flex-wrap">

              <span>
                {visitors !== null
                  ? visitors.toLocaleString()
                  : "—"}{" "}
                visitors
              </span>

              <span className="text-[#3A3A3A]">
                /
              </span>

              <span>
                {pageViews !== null
                  ? pageViews.toLocaleString()
                  : "—"}{" "}
                views
              </span>

              <span className="text-[#3A3A3A]">
                /
              </span>

              <span>
                © {new Date().getFullYear()} Nikhil Challa
              </span>

            </div>

          </div>

        </footer>

      </main>

      <Analytics />
      <FloatingPod />
    </div>
  );
}