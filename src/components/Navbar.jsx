import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { user, login, logout } = useAuth();
  const { dark, setDark } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur dark:bg-gray-900/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Title */}
        <h1 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
          <span aria-hidden>📚</span>
          <span>BookExplorer</span>
        </h1>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-full text-lg
                   hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* Auth Button */}
          {user ? (
            <button
              onClick={logout}
              className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white
                     hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={login}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white
                     hover:bg-blue-700 transition"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
