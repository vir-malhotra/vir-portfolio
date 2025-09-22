"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  MapPin,
  Code,
  Music,
  Brain,
  Download,
  Moon,
  Sun,
  User,
} from "lucide-react";

const Portfolio: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const projects = [
    {
      title: "Audio Reverb Classification Model",
      description:
        "End-to-end ML pipeline achieving 90%+ accuracy in reverb type identification using CNN and Mel spectrograms across 6 instrument categories.",
      tech: ["Python", "PyTorch", "CNN", "Audio Synthesis", "VST"],
      category: "ml",
      icon: <Music className="w-6 h-6" />,
      year: "2025",
      metrics: "90%+ accuracy, 6 instrument categories",
    },
    {
      title: "Hamood - Smart Home Mental Health Assistant",
      description:
        "AI-powered smart home prototype that adjusts lighting and music based on real-time health data analysis with stress level detection.",
      tech: ["React", "Node.js", "OpenAI API", "WebSocket", "Tailwind CSS"],
      category: "ai",
      icon: <Brain className="w-6 h-6" />,
      year: "2025",
      metrics: "Real-time health monitoring & AI integration",
    },
    {
      title: "Wings of Sound",
      description:
        "Venue-finding application for artists to discover performance spaces in NYC with ML-powered venue matching.",
      tech: ["React", "Node.js", "Machine Learning", "Python"],
      category: "web",
      icon: <Code className="w-6 h-6" />,
      year: "2024",
      metrics: "Full-stack app with ML algorithms",
    },
    {
      title: "LLM Mathematical Reasoning",
      description:
        "AI tool integrating ChatGPT API with LEAN Theorem Prover to enhance mathematical reasoning capabilities.",
      tech: ["LEAN", "ChatGPT API", "Python"],
      category: "research",
      icon: <Brain className="w-6 h-6" />,
      year: "2024",
      metrics: "Accepted at LSE conference",
    },
  ];

  const experiences = [
    {
      role: "Music Technology Assistant",
      company: "New York University Abu Dhabi",
      location: "Abu Dhabi, UAE",
      period: "Aug 2025 – Present",
      highlights: [
        "Operate front-of-house (FOH) audio engineering for live performances in C3-124 Multi-Purpose Performance Studio",
        "Manage monitor engineering systems and lighting design for music events",
        "Provide technical support for music technology equipment and AV setup for academic courses",
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "Belvedere Trading LLC",
      location: "Chicago, IL",
      period: "Jun 2025 – Aug 2025",
      highlights: [
        "Engineered formula safety validation system using advanced C++",
        "Built real-time integration testing framework with 60% time reduction",
        "Migrated trading system to pandas for 50+ quantitative traders",
      ],
    },
    {
      role: "Data Analytics and Business Development Intern",
      company: "Liwa Capital Advisors",
      location: "Abu Dhabi, UAE",
      period: "Apr 2025 – Jun 2025",
      highlights: [
        "Automated lead generation using Python web scraping, collecting 1,000+ data points on GCC wealth managers",
        "Analyzed 240+ regional firms to identify partnership targets with $500M-$10B AUM",
        "Delivered daily market intelligence reports on investor profiles and competitive landscape trends",
      ],
    },
    {
      role: "SAT Tutor",
      company: "Valdo Academics",
      location: "Remote",
      period: "Jan 2025 – May 2025",
      highlights: [
        "Achieved average score improvement of 500 points across 5 students over 4 months",
        "Created customized learning materials and practice tests for individual student weaknesses",
        "Developed strategic test-taking techniques and comprehensive SAT preparation instruction",
      ],
    },
    {
      role: "Plugin Software Development Intern",
      company: "PitchInnovations",
      location: "Delhi, India",
      period: "Jul 2024 – Aug 2024",
      highlights: [
        "Developed Delay and Gain Plugins using JUCE C++ Framework",
        "Integrated with Pro Tools, Logic Pro, and Ableton Live",
        "Completed comprehensive plugin development course",
      ],
    },
    {
      role: "Branding Strategy Extern",
      company: "Beats by Dr. Dre",
      location: "United States",
      period: "Jul 2024 – Aug 2024",
      highlights: [
        "Conducted consumer trends research focusing on audio industry and GenZ behaviors",
        "Executed end-to-end consumer research from scoping to data analysis and participant engagement",
        "Developed inter-personal skills and presented findings to live remote audiences",
      ],
    },
    {
      role: "Data Science Intern",
      company: "FlexingIt",
      location: "Delhi, India",
      period: "May 2024 – Jul 2024",
      highlights: [
        "Configured GA4 tracking for 300,000+ events from 30,000+ users",
        "Improved salary benchmarking algorithms for 5,000+ monthly users",
        "Created executive dashboards using Google API",
      ],
    },
    {
      role: "Research Assistant",
      company: "New York University Abu Dhabi",
      location: "Abu Dhabi, UAE",
      period: "Jun 2023 – Jun 2024",
      highlights: [
        "Contributed to LLM and Interactive Theorem Proving research",
        "Developed AI tool using ChatGPT API and LEAN Theorem Prover",
        "Accepted to present research at British Conference of Undergraduate Research at LSE",
      ],
    },
    {
      role: "Cybersecurity Intern",
      company: "Ernst & Young",
      location: "Delhi, India",
      period: "Jun 2023 – Jul 2023",
      highlights: [
        "Configured Active Directories on multiple Windows versions",
        "Developed 10+ PowerShell scripts to enhance security protocols",
        "Participated in consulting training covering client engagement and ISO/ISA standards",
      ],
    },
  ];

  const skills: Record<string, string[]> = {
    Programming: ["Python", "C/C++", "JavaScript", "SQL", "TypeScript"],
    Frameworks: ["React", "Node.js", "Next.js", "PyTorch", "JUCE"],
    Tools: ["Git", "Docker", "Linux", "Google Cloud", "Protocol Buffers"],
    Creative: ["Logic Pro", "Ableton Live", "Pro Tools", "Film Scoring", "DJ Performance"],
    Domains: ["Trading Systems", "Audio Processing", "Machine Learning", "Web Development"],
  };

  const creativeProjects = [
    {
      title: "Capstone Film Scores",
      description:
        "Original compositions and sound design for two NYU Abu Dhabi capstone films, creating immersive soundscapes that enhance narrative storytelling.",
      type: "Film Scoring",
      year: "2024",
      media: "video",
      thumbnail: "🎬",
      videoId: "sh46UYQu_yE",
      startTime: 635,
      details: ["Original orchestral compositions", "Sound design and foley", "Sync to picture editing"],
    },
    {
      title: "Electronic Music Production",
      description:
        "Original tracks spanning house, techno, and ambient genres, showcasing advanced production techniques and sound synthesis.",
      type: "Music Production",
      year: "2024",
      media: "audio",
      thumbnail: "🎵",
      audioSrc: "/public/la-boheme.wav",
      details: ["Multi-genre production", "Advanced synthesis", "Professional mixing/mastering"],
    },
    {
      title: "DJ Performances",
      description:
        "Live DJ sets at campus events and local venues, blending electronic genres with technical mixing and crowd engagement.",
      type: "Live Performance",
      year: "2023-2024",
      media: "video",
      thumbnail: "🎧",
      videoMp4: "/dj.mp4",
      details: ["Live mixing", "Crowd reading", "Technical beatmatching"],
    },
    {
      title: "Electronic Music Performance",
      description: "Live performance showcasing beatboxing, looping, FX creation, and rap—all built on-the-fly.",
      type: "Live Performance",
      year: "2025",
      media: "video",
      thumbnail: "🎤",
      videoMp4: "/Vir-Malhotra.mp4",
      details: ["Live beatboxing", "Looper layering", "Onboard effects"],
    },
  ];

  // --- typed helpers ---
  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  const getYouTubeEmbed = (videoId: string, startTime?: number): string =>
    `https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0&start=${startTime ?? 0}`;

  const formatTime = (s: number): string => {
    if (!Number.isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  // Extract a Drive file ID from common share links
  const getDriveId = (url?: string): string | null => {
    if (!url) return null;
    try {
      const u = new URL(url);
      // formats:
      // https://drive.google.com/file/d/<ID>/view?usp=sharing
      // https://drive.google.com/open?id=<ID>
      // https://drive.google.com/uc?id=<ID>&export=download
      const pathMatch = u.pathname.match(/\/file\/d\/([^/]+)\//);
      if (pathMatch) return pathMatch[1];
      if (u.searchParams.get("id")) return u.searchParams.get("id");
      return null;
    } catch {
      return null;
    }
  };

  // Build the Drive preview iframe URL
  const getDrivePreview = (driveLink?: string): string | null => {
    const id = getDriveId(driveLink);
    return id ? `https://drive.google.com/file/d/${id}/preview` : null;
  };

  // --- audio player (typed) ---
  type CustomAudioPlayerProps = {
    srcWav?: string;
    srcMp3?: string;
    isDarkMode: boolean;
  };

  const CustomAudioPlayer: React.FC<CustomAudioPlayerProps> = ({ srcWav, srcMp3, isDarkMode }) => {
    const audioRef = React.useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [currTime, setCurrTime] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const [volume, setVolume] = React.useState(0.9);
    const [isMuted, setIsMuted] = React.useState(false);

    const togglePlay = () => {
      const a = audioRef.current;
      if (!a) return;
      if (a.paused) {
        a
          .play()
          .then(() => setIsPlaying(true))
          .catch(console.warn);
      } else {
        a.pause();
        setIsPlaying(false);
      }
    };

    const onTimeUpdate = () => setCurrTime(audioRef.current?.currentTime ?? 0);
    const onLoaded = () => setDuration(audioRef.current?.duration ?? 0);

    const seek = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const pct = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
      const t = pct * (duration || 0);
      if (audioRef.current) audioRef.current.currentTime = t;
      setCurrTime(t);
    };

    const setVol = (v: number) => {
      const a = audioRef.current;
      const vol = Math.min(Math.max(v, 0), 1);
      if (a) a.volume = vol;
      setVolume(vol);
      if (vol > 0 && isMuted) setIsMuted(false);
    };

    const toggleMute = () => {
      const a = audioRef.current;
      if (!a) return;
      a.muted = !a.muted;
      setIsMuted(a.muted);
    };

    return (
      <div
        className={`rounded-2xl p-6 border shadow-lg ${
          isDarkMode ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-gray-200"
        }`}
      >
        <audio
          ref={audioRef}
          preload="metadata"
          onLoadedMetadata={onLoaded}
          onTimeUpdate={onTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          className="hidden"
        >
          {srcMp3 && <source src={srcMp3} type="audio/mpeg" />}
          {srcWav && <source src={srcWav} type="audio/wav" />}
          Your browser does not support the audio element.
        </audio>

        {/* Top row: play + titles */}
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition ${
              isDarkMode ? "bg-purple-600 hover:bg-purple-500 text-white" : "bg-purple-600 hover:bg-purple-500 text-white"
            }`}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="5" width="4" height="14" />
                <rect x="14" y="5" width="4" height="14" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <div className="flex-1">
            <div className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>La Bohème (Preview)</div>
          </div>

          {/* Time */}
          <div className={`text-sm tabular-nums ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            {formatTime(currTime)} / {formatTime(duration)}
          </div>
        </div>

        {/* Progress bar */}
        <div
          className={`mt-4 h-2 rounded-full cursor-pointer relative ${
            isDarkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
          onClick={seek}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={duration || 0}
          aria-valuenow={currTime}
        >
          <div
            className="h-2 rounded-full absolute top-0 left-0"
            style={{
              width: `${duration ? (currTime / duration) * 100 : 0}%`,
              backgroundImage: "linear-gradient(90deg, #7c3aed, #ec4899)",
            }}
          />
        </div>

        {/* Controls: volume, mute */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleMute}
              className={isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 9v6h4l5 5V4L9 9H5zM19 12l3 3-1.5 1.5L17.5 13.5 14 10l1.5-1.5L19 12z" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 9v6h4l5 5V4L9 9H5z" />
                </svg>
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVol(parseFloat(e.target.value))}
              className="w-36 accent-purple-600"
            />
          </div>

          <button
            onClick={() => {
              const a = audioRef.current;
              if (!a) return;
              a.currentTime = 0;
              if (!a.paused) a.play().catch(console.warn);
            }}
            className={`text-sm px-3 py-1 rounded ${
              isDarkMode ? "bg-gray-700 text-gray-200 hover:bg-gray-600" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Restart
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "dark bg-gray-900" : "bg-gradient-to-br from-slate-50 via-white to-slate-100"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? isDarkMode
              ? "bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-700"
              : "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>VM</div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex space-x-6">
                {["home", "about", "projects", "experience", "creative", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors ${
                      activeSection === item
                        ? "text-blue-600 font-semibold"
                        : isDarkMode
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item === "creative" ? "Creative" : item}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-32 md:pb-32">
        <div
          className={`absolute inset-0 ${
            isDarkMode ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50" : "bg-gradient-to-br from-blue-50/50 to-purple-50/50"
          }`}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-16">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div
              className={`w-40 h-40 rounded-full overflow-hidden border-4 ${
                isDarkMode ? "border-gray-600 bg-gray-700" : "border-white bg-gray-200"
              } shadow-xl`}
            >
              <img
                src="/vir.jpg"
                alt="Vir Malhotra"
                className="w-full h-full object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  const img = e.currentTarget;
                  img.style.display = "none";
                  const next = img.nextElementSibling as HTMLElement | null;
                  if (next) next.style.display = "flex";
                }}
              />
              <div
                className={`w-full h-full ${
                  isDarkMode ? "bg-gray-700 text-gray-400" : "bg-gray-200 text-gray-500"
                } items-center justify-center hidden`}
              >
                <User className="w-12 h-12" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">Vir Malhotra</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            Computer Science student at NYU Abu Dhabi building the future through
            <span className="text-blue-600 font-semibold"> software engineering</span>,{" "}
            <span className="text-purple-600 font-semibold"> trading and audio technology</span>,{" "}
            <span className="text-indigo-600 font-semibold">AI research</span>, and
            <span className="text-pink-600 font-semibold"> creative expression</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:vm2426@nyu.edu"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get in touch
            </a>
            <a
              href="/resume_2025.pdf"
              download="Vir_Malhotra_Resume.pdf"
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-colors ${
                isDarkMode ? "bg-gray-800 text-gray-300 border-gray-600 hover:border-gray-500" : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
              }`}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/virmalhotra"
              className={`transition-colors ${isDarkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/vir-malhotra"
              className={`transition-colors ${isDarkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-900"}`}
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        <button onClick={() => scrollToSection("about")} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className={`w-8 h-8 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? "text-white" : "text-gray-900"}`}>About Me</h2>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                I&apos;m a Computer Science student at NYU Abu Dhabi with a unique intersection of interests spanning high-frequency trading
                systems, audio technology, AI research, and creative expression. My work bridges the technical precision required in
                financial markets with the artistic innovation of music production and film scoring.
              </p>
              <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                From engineering trading system risk management at Belvedere Trading to producing original music and scoring capstone films,
                I bring a multidisciplinary approach that combines technical expertise with creative vision.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className={`text-center p-4 rounded-lg ${isDarkMode ? "bg-blue-900/30" : "bg-blue-50"}`}>
                  <MapPin className={`w-8 h-8 mx-auto mb-2 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                  <p className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Location</p>
                  <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>Abu Dhabi, UAE</p>
                </div>
                <div className={`text-center p-4 rounded-lg ${isDarkMode ? "bg-purple-900/30" : "bg-purple-50"}`}>
                  <Calendar className={`w-8 h-8 mx-auto mb-2 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`} />
                  <p className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Graduation</p>
                  <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>May 2026</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className={`p-6 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                  <h3 className={`font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm border ${
                          isDarkMode ? "bg-gray-600 text-gray-200 border-gray-500" : "bg-white text-gray-700 border-gray-200"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 ${isDarkMode ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-gradient-to-br from-slate-50 to-white"}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Featured Projects</h2>

          {/* Centered grid: content-sized columns */}
          <div className="grid gap-8 justify-center mx-auto [grid-template-columns:repeat(auto-fit,minmax(20rem,26rem))]">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`w-full max-w-[26rem] mx-auto rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 ${
                  isDarkMode ? "bg-gray-800 hover:bg-gray-750 border border-gray-700" : "bg-white hover:shadow-xl"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${isDarkMode ? "bg-blue-900/50 text-blue-400" : "bg-blue-100 text-blue-600"}`}>{project.icon}</div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{project.title}</h3>
                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{project.year}</p>
                  </div>
                </div>

                <p className={`mb-4 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{project.description}</p>

                <div className="mb-4">
                  <p className={`text-sm font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Key Metrics:</p>
                  <p className={`text-sm ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>{project.metrics}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs ${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  className={`flex items-center gap-2 font-medium transition-colors ${
                    isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Learn more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 border transition-all duration-300 hover:shadow-lg ${
                  isDarkMode
                    ? "bg-gradient-to-r from-gray-700 to-gray-800 border-gray-600 hover:border-gray-500"
                    : "bg-gradient-to-r from-gray-50 to-white border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{exp.role}</h3>
                    <p className={`text-lg font-semibold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>{exp.company}</p>
                    <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>{exp.location}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? "bg-blue-900/50 text-blue-300" : "bg-blue-100 text-blue-800"}`}>
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className={`flex items-start gap-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${isDarkMode ? "bg-blue-400" : "bg-blue-600"}`} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Projects Section */}
      <section
        id="creative"
        className={`py-20 ${
          isDarkMode ? "bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-indigo-900/20" : "bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Creative Projects</h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              Exploring the intersection of technology and artistry through music production, film scoring, and live performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {creativeProjects.map((project, index) => (
              <div
                key={index}
                className={`group rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border ${
                  isDarkMode ? "bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:bg-gray-800" : "bg-white/80 backdrop-blur-sm border-white/20"
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{project.thumbnail}</div>
                  <div>
                    <h3
                      className={`text-xl font-bold transition-colors ${isDarkMode ? "text-white group-hover:text-purple-400" : "text-gray-900 group-hover:text-purple-700"}`}
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${isDarkMode ? "text-purple-300 bg-purple-900/50" : "text-purple-600 bg-purple-100"}`}>
                        {project.type}
                      </span>
                      <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{project.year}</span>
                    </div>
                  </div>
                </div>

                <p className={`mb-6 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{project.description}</p>

                {/* Media (uniform 16:9 frame) */}
                <div
                  className={`relative w-full aspect-video rounded-lg overflow-hidden mb-6 ${
                    isDarkMode ? "bg-gradient-to-br from-gray-700 to-gray-800" : "bg-gradient-to-br from-gray-100 to-gray-200"
                  }`}
                >
                  {project.media === "audio" && (
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="w-full max-w-[900px]">
                        <CustomAudioPlayer srcWav="/la-boheme.wav" isDarkMode={isDarkMode} />
                      </div>
                    </div>
                  )}

                  {project.media === "video" && (
                    <>
                      {project.videoMp4 ? (
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                          <video src={project.videoMp4} controls preload="metadata" playsInline className="absolute inset-0 w-full h-full" />
                        </div>
                      ) : project.driveLink && getDrivePreview(project.driveLink) ? (
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                          <iframe
                            src={getDrivePreview(project.driveLink) as string}
                            allow="autoplay"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            title={`${project.title} — Drive Preview`}
                          />
                        </div>
                      ) : project.videoId ? (
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                          <iframe
                            src={getYouTubeEmbed(project.videoId as string, project.startTime as number | undefined)}
                            title={`${project.title} — YouTube`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                            className="absolute inset-0 w-full h-full"
                            referrerPolicy="strict-origin-when-cross-origin"
                          />
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div className="w-full h-32 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg flex items-center justify-center">
                            <span className="text-white font-medium">📹 Performance Video</span>
                          </div>
                          <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                            Add <code>videoMp4</code>, <code>driveLink</code>, or <code>videoId</code> to embed.
                          </p>
                        </div>
                      )}
                    </>
                  )}

                  {project.media === "demo" && (
                    <div className="space-y-3">
                      <div className="w-full h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center">
                        <span className="text-white font-medium">⚡ Interactive Demo</span>
                      </div>
                      <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Plugin interface or audio samples</p>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <h4 className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Key Features:</h4>
                  <ul className="space-y-1">
                    {project.details.map((detail: string, idx: number) => (
                      <li key={idx} className={`flex items-start gap-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`mt-6 pt-6 border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
                  <button
                    className={`flex items-center gap-2 font-medium transition-colors group ${
                      isDarkMode ? "text-purple-400 hover:text-purple-300" : "text-purple-600 hover:text-purple-700"
                    }`}
                  >
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    {project.media === "audio" ? "Listen" : project.media === "video" ? "Watch Performance" : "Try Demo"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Creative Skills */}
          <div
            className={`mt-16 rounded-2xl p-8 border ${
              isDarkMode ? "bg-gray-800/60 backdrop-blur-sm border-gray-700" : "bg-white/60 backdrop-blur-sm border-white/20"
            }`}
          >
            <h3 className={`text-2xl font-bold text-center mb-8 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Creative Toolkit</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🎹</div>
                <h4 className={`font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Production</h4>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Logic Pro, Ableton Live, Pro Tools</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎧</div>
                <h4 className={`font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>DJing</h4>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Pioneer CDJs, Serato, Rekordbox</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎬</div>
                <h4 className={`font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Film Scoring</h4>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Orchestral composition, Sound design</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className={`font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Audio Tech</h4>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>JUCE, C++, Plugin Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Let&apos;s Build Something Amazing</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Interested in trading systems, audio technology, AI research, or creative collaborations? I&apos;m always open to discussing
            innovative projects, music production, and opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="mailto:vm2426@nyu.edu"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
              vm2426@nyu.edu
            </a>
            <a href="tel:+971508063477" className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-colors">
              <Calendar className="w-5 h-5" />
              +971 508 063 477
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/virmalhotra" className="text-white/80 hover:text-white transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com/vir-malhotra" className="text-white/80 hover:text-white transition-colors">
              <Github className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${isDarkMode ? "bg-gray-900 text-gray-400" : "bg-gray-900 text-gray-400"}`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2025 Vir Malhotra. Built with Next.js and deployed on Vercel.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
