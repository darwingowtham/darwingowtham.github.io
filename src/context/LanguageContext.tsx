import { createContext, useContext, useState } from "react";

type Language = "en" | "ta";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "about.title": "About Me",
    "about.degree": "B.E. Computer Science & Engineering",
    "about.college": "RMK College of Engineering and Technology",
    "about.duration": "2023 – 2027",
    "about.cgpa": "CGPA: 7.21",
    "about.school": "High School / Secondary Education",
    "about.schoolName": "Your School Name",
    "about.schoolYear": "Year Passed",
    "about.desc1": "Computer Science and Engineering undergraduate with a strong foundation in Java programming, Full Stack Web Development, and Database Management. I enjoy learning new technologies and creating efficient, user-focused systems.",
    "about.desc2": "Passionate about software engineering, I am eager to leverage my skills in problem-solving and application development. I believe in continuous learning and staying at the forefront of technology.",
    "about.desc3": "My interests include Web Development, Open Source Contribution, and Competitive Programming. I actively participate in technical events and engage in peer learning groups to solve algorithmic problems on platforms like LeetCode.",
    "about.download": "Download Resume",
    "skills.title": "Skills",
    "projects.title": "Projects",
    "contact.title": "Contact",
  },
  ta: {
    "nav.home": "முகப்பு",
    "nav.about": "பற்றி",
    "nav.skills": "திறன்கள்",
    "nav.projects": "திட்டங்கள்",
    "nav.contact": "தொடர்பு",
    "about.title": "என் பற்றி",
    "about.degree": "B.E. கணினி அறிவியல் மற்றும் பொறியியல்",
    "about.college": "ஆர்எம்கே பொறியியல் மற்றும் தொழில்நுட்ப கல்லூரி",
    "about.duration": "2023 – 2027",
    "about.cgpa": "சிஜிபிஏ: 7.21",
    "about.desc1": "Java நிரலாக்கம், Full Stack வெப் மேம்பாடு மற்றும் தரவுத்தள நிர்வாகத்தில் வலுவான அடிப்படையுள்ள கணினி அறிவியல் மற்றும் பொறியியல் பட்டதாரி. நான் புதிய தொழில்நுட்பங்களை கற்றுக்கொள்ள மற்றும் திறனான, ব்যবহারকারี-கேந்திரமான அமைப்புகளை உருவாக்க விரும்புகிறேன்.",
    "about.desc2": "மென்பொருள் பொறியியலுக்கு ஆர்வம் கொண்ட நான் சிக்கல் தீர்வு மற்றும் பயன்பாடு மேம்பாட்டில் என் திறன்களைப் பயன்படுத்த ஆவலுடன் உள்ளேன். நான் தொடர்ந்து கற்றுக்கொள்ளவும் தொழில்நுட்பத்தின் অগ্রভাগে இருக்கவும் நம்புகிறேன்.",
    "about.desc3": "வெப் மேம்பாடு, திறந்த மூல பங்களிப்பு மற்றும் போட்டி நிரலாக்கம் என் ஆர்வங்கள். நான் தொழில்நுட்ப நிகழ்வுகளில் தீவிரமாக பங்கேற்கிறேன் மற்றும் LeetCode போன்ற தளங்களில் அல்காரிதம் சிக்கல்களைத் தீர்க்க சக கற்றல் குழுக்களில் ஈடுபட்டுள்ளேன்.",
    "about.download": "பதிவை பதிவிறக்கவும்",
    "skills.title": "திறன்கள்",
    "projects.title": "திட்டங்கள்",
    "contact.title": "தொடர்பு",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageLang] = useState<Language>(() => {
    const stored = localStorage.getItem("language");
    if (stored === "en" || stored === "ta") {
      return stored;
    }
    return "en";
  });

  const t = (key: string): string => {
    const current = translations[language];
    return current[key as keyof typeof current] || key;
  };

  const setLanguage = (lang: Language) => {
    setLanguageLang(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
