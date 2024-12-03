import Turnstile, { useTurnstile } from "react-turnstile";

function TurnstileWidget() {
  const turnstile = useTurnstile();
  return (
    <Turnstile
      refreshExpired="auto"
      sitekey="0x4AAAAAAA1XhNkamInJqZkJ"
      onVerify={(token) => {
        fetch("/login", {
          method: "POST",
          body: JSON.stringify({ token }),
        }).then((response) => {
          if (!response.ok) turnstile.reset();
        });
      }}
    />
  );
}

export default TurnstileWidget;
