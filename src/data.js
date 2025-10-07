export const profile = {
  name: "Priya Dobariya",
  tagline: "Android & Flutter Developer • M.S. CS @ UAB",
  location: "North Wales, PA 19454",
  email: "dobariyap305@gmail.com",
  linkedin: "https://www.linkedin.com/in/priya-dobariya",
  gitHub: "https://github.com/priya0030",
  summary: `Android & Flutter developer with a strong track record shipping high‑quality mobile apps, leading cross‑platform transitions, and mentoring teams. Currently completing an M.S. in Computer Science at UAB.`,
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const experience = [
  {
    role: "Senior Android Developer",ss
    org: "Quad SoftTech",
    location: "Surat, Gujarat",
    dates: "July 2022 – July 2023",
    bullets: [
      "Contributed to 7 new mobile apps, ensuring compliance with client requirements and quality standards.",
      "Revamped outdated applications to modern standards, improving functionality and UX.",
      "Key contributor to a Flutter app that became core to the suite and surpassed 5K downloads.",
      "Performed end‑to‑end testing on 12 applications before release.",
      "Mentored junior developers in Flutter and led cross‑platform projects.",
      "Streamlined collaboration with Git, improving version control and reducing errors."
    ],
    stack: ["Android", "Java/Kotlin", "Flutter", "Git"]
  },
  {
    role: "Junior Android Developer",
    org: "Quad SoftTech",
    location: "Surat, Gujarat",
    dates: "Dec 2021 – Jun 2022",
    bullets: [
      "Developed and deployed 8 Android apps (Java), boosting engagement by 50% and reducing crashes by 95%.",
      "Adopted Flutter to support cross‑platform development.",
      "Integrated 10+ APIs and optimized JSON processing for performance.",
      "Improved reliability with offline capabilities via SharedPreferences & SQLite.",
      "Increased retention by integrating Firebase push notifications."
    ],
    stack: ["Android", "Java", "SQLite", "Firebase"]
  }
];

export const projects = [
  {
    title: "Math Quest — Gamified Math Learning",
    brief: "Multiplayer math app for kids (6–14) with dynamic difficulty and real-time scoring.",
    details: [
      "Two-player head-to-head quizzes, instant feedback, scoreboard tracking.",
      "Difficulty modes (Easy → Complex), operations (+ − × ÷) stored in PaperDB.",
      "Responsive UI, Help screen, iterative gameplay/UI improvements.",
      "Planned Firebase Crashlytics integration for error tracking."
    ],
    tech: ["Android (Java, XML)", "PaperDB", "Gradle", "GitHub"],
    links: ["https://github.com/priya0030/Math_Quest"]
  },
  {
    title: "Task Manager — Android To-Do App",
    brief: "Simple Android task manager with CRUD operations.",
    details: [
      "Built an Android task manager with full CRUD functionality and Room Database for offline storage.",
      "Added priority levels and color indicators for better task organization.",
      "Implemented category-based filters and real-time updates with LiveData.",
      "Designed a clean, responsive UI following MVVM architecture and Material Design."
    ],
    tech: ["Android (Java, XML)", "Room DB", "MVVM", "GitHub"],
    links: ["https://github.com/priya0030/Task-Management"]
  },
  {
    title: "Personal Portfolio Website",
    brief: "Responsive portfolio website to showcase projects and skills.",
    details: [
      "Built with React and styled using CSS/Tailwind.",
      "Interactive hero section with typewriter animation.",
      "Sections for About, Skills, Projects, and Contact."
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    links: ["https://github.com/priya0030/priya-portfolio"]
  },
  {
    title: "Recipe App — Multinational Cuisine",
    brief: "20+ cuisines, 100+ recipes, dietary filters, favorites, and shopping lists.",
    details: [
      "Global cuisine filters; vegetarian/vegan/gluten‑free options.",
      "Ingredient‑based search; saved recipes; user auth for profiles.",
      "REST APIs for dynamic content; Figma‑led UI enhancements.",
      "Resulted in ~40% engagement uplift post‑launch."
    ],
    tech: ["Flutter", "Dart", "Android (Java)", "Firebase", "REST/JSON"],
    links: []
  },
  {
    title: "Photo Editor App",
    brief: "10+ editing features with real‑time preview and undo/redo.",
    details: [
      "Frames, backgrounds, filters, brightness/contrast, crop/rotate, text overlay.",
      "Camera/Gallery integration; SQLite for preferences.",
      "Improved retention by ~30%."
    ],
    tech: ["Android (Java, XML)", "SQLite", "Image Processing", "Camera API"],
    links: []
  },
  {
    title: "Digit Classification — CNN on SVHN",
    brief: "Deep CNN (5 conv layers) classifying digits (0–9) from house numbers.",
    details: [
      "ReLU, batch norm, max pooling; >95% accuracy achieved.",
      "Augmentation (rotations, shifts, flips), dropout, LR scheduling.",
      "Early stopping; Matplotlib metrics; <100ms inference latency."
    ],
    tech: ["Python", "TensorFlow/PyTorch", "NumPy", "Matplotlib"],
    links: []
  }
];

export const education = [
  {
    school: "University of Alabama at Birmingham",
    location: "Birmingham, AL",
    degree: "M.S. in Computer Science",
    dates: "Aug 2023 – May 2025"
  },
  {
    school: "Uka Tarsadia University",
    location: "Surat, Gujarat",
    degree: "B.Tech in Information & Communication Technology",
    dates: "Jul 2018 – Apr 2022"
  }
];

export const certifications = [
  "Artificial Intelligence A‑Z (Udemy)",
  "Python Workshop (UTU)"
];


export const skills = {
  "Programming & Mobile": ["C++", "Python", "Java", "Kotlin", "Dart", "Swift", "Android (Jetpack Compose, XML)", "Flutter", "ADB", "MVVM"],
  "Databases & Backend": ["MySQL", "PostgreSQL", "Firebase", "Room", "PaperDB", "REST APIs", "JSON"],
  "Version Control, DevOps & Cloud": ["Git", "GitHub", "GitLab", "Jenkins", "Docker", "Firebase", "CI/CD", "Agile", "Jira", "Scrum"],
  "UI/UX & Data Science": ["Figma", "MATLAB", "NumPy", "Pandas", "scikit‑learn", "TensorFlow", "PyTorch"],
  "Tools & Soft Skills": ["Android Studio", "Xcode", "VS Code", "IntelliJ IDEA", "Eclipse", "Problem‑solving", "Teamwork", "Leadership", "Communication", "Time Management"]
};

export const techLogos = [
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Room", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
  { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "CI/CD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "MATLAB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" },
  { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Android Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
  { name: "Xcode", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "IntelliJ IDEA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
  { name: "Eclipse", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" }
];

