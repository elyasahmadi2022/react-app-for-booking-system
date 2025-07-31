import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

export function useOutSideClick(handler, listenerCapturing = true) {
  const [searchParams] = useSearchParams()
  
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      searchParams.delete("country")
      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick, true);
    },
    [handler, listenerCapturing]
  );

  return ref;
}
