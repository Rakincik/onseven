export default function GrainEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9000] opacity-[0.03] mix-blend-overlay">
      <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat animate-pulse"></div>
    </div>
  );
}