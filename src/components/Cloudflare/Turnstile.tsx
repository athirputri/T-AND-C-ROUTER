import Turnstile from "react-turnstile";

function TurnstileWidget() {
  // const turnstile = useTurnstile();
  return (
    <Turnstile
      refreshExpired="auto"
      sitekey="0x4AAAAAAA1XhNkamInJqZkJ"
      onVerify={(token) => {
        console.log(token);
        return alert("hey");
      }}
    />
  );
}

export default TurnstileWidget;
