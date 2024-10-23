const Divider = ({ className = "" }: { className?: string }) => {
  return <div className={`h-[0.1rem] w-full bg-slate-200 ${className}`} />;
};

export default Divider;
