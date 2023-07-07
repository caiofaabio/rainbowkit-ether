import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-[25px]">Connect Wallet</div>
      <ConnectButton />
    </main>
  );
}
