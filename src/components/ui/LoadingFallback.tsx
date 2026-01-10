// Modern skeleton loading component
const LoadingFallback = () => (
  <div className="w-full min-h-screen bg-bg-page overflow-hidden">
    {/* Navigation Skeleton */}
    <nav className="w-full z-50 bg-bg-card/80 backdrop-blur-md border-b border-border sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-bg-card rounded-xl animate-pulse"></div>
            <div className="h-6 w-28 sm:w-32 bg-bg-card rounded-lg animate-pulse"></div>
          </div>

          {/* Nav Links - Hidden on Mobile */}
          <div className="hidden lg:flex items-center gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-4 w-16 bg-bg-card rounded animate-pulse"
              ></div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 sm:h-10 sm:w-10 bg-bg-card rounded-full animate-pulse"></div>
            <div className="hidden sm:block h-10 w-24 bg-bg-card rounded-full animate-pulse"></div>
            <div className="lg:hidden h-9 w-9 bg-bg-card rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </nav>

    {/* Hero Section Skeleton */}
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-pulse">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card w-48 h-8"></div>
            <div className="space-y-4">
              <div className="h-10 sm:h-12 bg-bg-card rounded-lg w-full"></div>
              <div className="h-10 sm:h-12 bg-bg-card rounded-lg w-5/6"></div>
              <div className="h-10 sm:h-12 bg-bg-card rounded-lg w-4/6"></div>
            </div>
            <div className="space-y-3 pt-4">
              <div className="h-5 sm:h-6 bg-bg-card rounded w-full"></div>
              <div className="h-5 sm:h-6 bg-bg-card rounded w-11/12"></div>
              <div className="h-5 sm:h-6 bg-bg-card rounded w-4/5"></div>
            </div>
            <div className="flex gap-3 sm:gap-4 pt-4 flex-col sm:flex-row">
              <div className="h-11 sm:h-12 w-full sm:w-40 bg-bg-card rounded-full"></div>
              <div className="h-11 sm:h-12 w-full sm:w-36 bg-bg-card rounded-full"></div>
            </div>
            <div className="flex gap-2 sm:gap-3 pt-4 flex-wrap">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-9 sm:h-10 w-24 sm:w-28 bg-bg-card rounded-lg"
                ></div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-pulse hidden lg:block">
            <div className="aspect-square bg-bg-card rounded-2xl"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-bg-card rounded-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-bg-card rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>

    {/* Content Grid Skeleton */}
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-bg-card/50">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4 animate-pulse">
          <div className="h-9 sm:h-10 bg-bg-card rounded-lg w-64 mx-auto"></div>
          <div className="h-5 sm:h-6 bg-bg-card rounded w-96 mx-auto"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-pulse">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="space-y-4 p-4 sm:p-6 bg-bg-page rounded-xl border border-border"
            >
              <div className="h-40 sm:h-48 bg-bg-card rounded-lg"></div>
              <div className="space-y-2">
                <div className="h-5 sm:h-6 bg-bg-card rounded w-3/4"></div>
                <div className="h-4 bg-bg-card rounded w-full"></div>
                <div className="h-4 bg-bg-card rounded w-5/6"></div>
              </div>
              <div className="flex gap-2 pt-2">
                <div className="h-8 w-20 bg-bg-card rounded-full"></div>
                <div className="h-8 w-24 bg-bg-card rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 animate-pulse">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center space-y-2">
              <div className="h-10 sm:h-12 bg-bg-card rounded-lg w-20 sm:w-24 mx-auto"></div>
              <div className="h-4 bg-bg-card rounded w-28 sm:w-32 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default LoadingFallback;
