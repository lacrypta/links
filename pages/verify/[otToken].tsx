import { useRouter } from "next/router";
import { useEffect } from "react";
import { useVerification } from "../../contexts/Verification";

export default function Verify() {
  const router = useRouter();
  const { setOtToken } = useVerification();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    setOtToken(router.query.otToken as string);
    window.location.href = window.location.origin;
  }, [router]);
  return <></>;
}
