import {
  type FC,
  type PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { en, es, type LandingContent } from "./content/landing";

const ContentContext = createContext<LandingContent>(en);

// eslint-disable-next-line react-refresh/only-export-components
export function useContent() {
  return useContext(ContentContext);
}

export const ContentProvider: FC<PropsWithChildren> = ({ children }) => {
  const [content, setContent] = useState<LandingContent>(en);

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
