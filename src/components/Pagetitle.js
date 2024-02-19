import { useEffect } from "react";

const useDynamicPageTitle = ({ title }) => {
  useEffect(() => {
    const titlePrefix = title;
    document.title = titlePrefix;
  }, [title]);
};

export default useDynamicPageTitle;
