// @flow
import { useState, useEffect } from "react"

export const ScrollCheck = () => {
  const [scroll, setScroll] = useState(true)
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 10
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    }
    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [scroll, setScroll])
  return scroll
}

export const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return children;
};
