import { useEffect } from "react";
import { useLocation } from "react-router";

export const ScrollToTop = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return null;
};
