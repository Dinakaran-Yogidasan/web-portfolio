// Modern skeleton loading component
const LoadingFallback = () => (
  <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Skeleton Content */}
      <div className="space-y-8 animate-pulse">
        {/* Header skeleton */}
        <div className="space-y-3">
          <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-lg w-3/4"></div>
          <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-1/2"></div>
        </div>

        {/* Content blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-3">
              <div className="h-48 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/2"></div>
            </div>
          ))}
        </div>

        {/* Additional text lines */}
        <div className="space-y-2 mt-8">
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-4/6"></div>
        </div>
      </div>

      {/* Shimmer effect overlay */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>
  </div>
);

export default LoadingFallback;
