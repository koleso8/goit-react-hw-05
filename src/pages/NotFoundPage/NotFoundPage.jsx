import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <img
        className="w-screen h-screen object-contain"
        src="https://qph.cf2.quoracdn.net/main-qimg-a1444ec6410b4d33f33ed6aa6b4a04a5-lq"
        alt="404 not found"
      />
      <span className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <Link
          className=" group/button relative w-[450px]  inline-flex items-center justify-center overflow-hidden rounded-md bg-blue-500/30 backdrop-blur-lg px-6 py-4 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20"
          to="/"
        >
          <span className="text-lg">Home</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div className="relative h-full w-10 bg-white/30"></div>
          </div>
        </Link>
      </span>
    </div>
  );
};

export default NotFoundPage;
