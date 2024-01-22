import React, { useEffect, useState } from "react";

const Delay = ({ delay, children }: { delay: number; children: React.ReactNode }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, delay * 1000);
    return () => clearTimeout(timer); // クリーンアップ
  }, [delay]);

  return isShown ? children : null;
};
export default Delay;
