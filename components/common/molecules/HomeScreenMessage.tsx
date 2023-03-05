import { useEffect, useState } from "react";

const HomeScreenMessage = () => {
  const isAndroid =
    typeof window !== "undefined" &&
    /android/i.test(window.navigator.userAgent);
  const isiOS =
    typeof window !== "undefined" &&
    /iphone|ipad|ipod/i.test(window.navigator.userAgent);

  const [msg, setMsg] = useState("");
  useEffect(() => {
    if (isiOS) {
      setMsg(
        '아이폰 브라우저에서는 "공유" 버튼을 눌러 홈 화면에 추가할 수 있습니다.'
      );
    } else if (isAndroid) {
      setMsg(
        '안드로이드 브라우저에서는 "홈 화면에 추가" 또는 "추가" 버튼을 눌러 홈 화면에 추가할 수 있습니다.'
      );
    }
  }, []);

  if ((isAndroid || isiOS) && !window.navigator.standalone) {
    return (
      <div>
        <div>
          <b>홈 화면에 바로가기를 추가해보세요. </b>
        </div>
        <span>{msg}</span>
      </div>
    );
  }

  return null;
};

export default HomeScreenMessage;

declare global {
  interface Navigator {
    standalone?: boolean;
  }
}
