import { useEffect, useRef } from "react";

export function useOutSideClick(handler, listenerCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick, true);
    },
    [handler, listenerCapturing]
  );

  return ref;
}
