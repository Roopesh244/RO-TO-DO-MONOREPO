"use client";
export default function Showcase() {
  return (
    <main className="text-gray-800">
      <div className="text-white bg-gradient-to-br from-black to-gray-900">
        {/* Navbar */}
        <nav className="bg-gray-900 bg-opacity-90 w-full shadow-lg">
          <div className="px-4 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                src="/assets/llogo.png"
                alt="Logo"
                className="w-10 h-10 glowing-logo rounded-full"
              />
              <span className="text-xl font-bold text-white">Ro-To-Do</span>
            </div>
            <div>
              <img
                src="/assets/r.png"
                alt="User Icon"
                className="w-8 h-8 glowing-logo rounded-full"
              />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-12 lg:py-24 gap-8 lg:gap-16">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 glowing-text">
              Ro-To-Do App
            </h1>
            <p className="text-gray-300 text-base sm:text-lg">
              Focus, from work to play with the best to-do list app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium glowing-button hover:scale-105 transition-transform">
                Download App
              </button>
              <button className="bg-gray-800 text-blue-400 px-6 py-2 rounded-lg font-medium border border-blue-500 hover:bg-blue-500 hover:text-white glowing-button hover:scale-105 transition-transform">
                Open Web App
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <img
              src="/assets/Hero.avif"
              alt="Tablet Preview"
              className="w-full rounded-lg object-contain glowing-image"
            />
          </div>
        </section>

        {/* Smart Daily Planner */}
        <section className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-12 lg:py-24 gap-8 lg:gap-16 border-t border-gray-700">
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/assets/A_smart_daily_planner.avif"
              alt="A Smart Daily Planner"
              className="w-full max-w-md rounded-lg object-contain glowing-image"
            />
          </div>
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 glowing-text">
              A smart daily planner
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Set yourself up for success with My Day, intelligent and personalized suggestions to update your daily or weekly to-do list.
            </p>
          </div>
        </section>

        {/* Manage Your Tasks */}
        <section className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-12 lg:py-24 gap-8 lg:gap-16 border-t border-gray-700">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 glowing-text">
              Manage your to-do list online
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              A truly cross-platform task management app. Access your task list and stay organized anytime, anywhere.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/assets/Image_Manage_2x_RE3HJa7.avif"
              alt="Stay Organized"
              className="w-full max-w-md rounded-lg object-contain glowing-image"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 py-12 sm:py-16">
          <div className="text-center space-y-4 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white glowing-text">
              Ready to get more done in Ro?
            </h2>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium glowing-button hover:scale-105 transition-transform">
              See plans and pricing
            </button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-gray-800 py-12 sm:py-16">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 glowing-text">
              See more from Ro-To-Do
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 text-white">
              <div className="space-y-4">
                <img
                  src="/assets/task.png"
                  alt="Outlook Integration"
                  className="w-16 h-16 mx-auto rounded-lg object-contain glowing-image"
                />
                <h3 className="text-xl font-semibold glowing-text">Tasks Integration</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  To Do integrates with Tasks, making it easier to manage all your tasks in one place.
                </p>
              </div>
              <div className="space-y-4">
                <img
                  src="/assets/AFA.png"
                  alt="Free and Available"
                  className="w-16 h-16 mx-auto rounded-lg object-contain glowing-image"
                />
                <h3 className="text-xl font-semibold glowing-text">Access from Anywhere</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Ro-To-Do is free and syncs across iPhone, Android, Windows, and the web.
                </p>
              </div>
              <div className="space-y-4">
                <img
                  src="/assets/SAD.png"
                  alt="Sync Devices"
                  className="w-16 h-16 mx-auto rounded-lg object-contain glowing-image"
                />
                <h3 className="text-xl font-semibold glowing-text">Sync Across All Devices</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Stay updated on all your devices with real-time synchronization.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Glowing styles */}
      <style jsx>{`
        .glowing-logo {
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.5);
        }
        .glowing-text {
          text-shadow: 0 0 8px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.4);
        }
        .glowing-button {
          box-shadow: 0 4px 10px rgba(59, 130, 246, 0.6), 0 0 10px rgba(59, 130, 246, 0.3);
        }
        .glowing-image {
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.5), 0 0 15px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </main>
  );
}
