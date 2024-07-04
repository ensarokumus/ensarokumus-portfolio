const BackgroundAnimations = () => {
  return (
    <>
      <div
        aria-hidden
        className="fixed -z-40 inset-0 bg-[radial-gradient(#69696959_1px,transparent_1px)] dark:bg-[radial-gradient(#44403c_1px,transparent_1px)] bg-[size:34px_34px] opacity-80 motion-safe:animate-move-bg"
      />
      <div aria-hidden className="relative overflow-x-clip pointer-events-none">
        <div
          aria-hidden
          className="absolute -left-36 -top-36 blur-[6rem] rounded-full aspect-square bg-gradient-to-r from-green-500 to-purple-500 h-96 -z-50 motion-safe:animate-spin-slow"
        />
        <div
          aria-hidden
          className="absolute bg-stone-700 -right-14 -top-36 blur-[6rem] rounded-full aspect-square bg-gradient-to-r from-blue-500 to-red-500 h-72 -z-50 motion-safe:animate-spin-slow"
        />
      </div>
    </>
  );
};
export default BackgroundAnimations;
