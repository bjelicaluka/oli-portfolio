import {
  type FC,
  type PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  en as landingEN,
  es as landingES,
  type LandingContent,
} from "./content/landing";
import {
  en as aboutEN,
  es as aboutES,
  type AboutContent,
} from "./content/about";
import {
  en as headerEN,
  es as headerES,
  type HeaderContent,
} from "./content/header";
import {
  en as footerEN,
  es as footerES,
  type FooterContent,
} from "./content/footer";

type ContextValue = {
  header: HeaderContent;
  landing: LandingContent;
  about: AboutContent;
  footer: FooterContent;
};

const en: ContextValue = {
  header: headerEN,
  landing: landingEN,
  about: aboutEN,
  footer: footerEN,
};

const es: ContextValue = {
  header: headerES,
  landing: landingES,
  about: aboutES,
  footer: footerES,
};

const ContentContext = createContext<ContextValue>(en);

// eslint-disable-next-line react-refresh/only-export-components
export function useContent() {
  return useContext(ContentContext);
}

export const ContentProvider: FC<PropsWithChildren> = ({ children }) => {
  const [content, setContent] = useState<ContextValue>(en);

  useEffect(() => {
    // does it have a language preference in query string
    const language =
      new URLSearchParams(window.location.search).get("lang") || "en";
    if (language === "es") {
      setContent(es);
    } else {
      setContent(en);
    }
  }, []);

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};
