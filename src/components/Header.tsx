import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { useSession } from "@/hooks/useSession";

export function Header() {
  const { session, loading, handleAuthentication, handleSignOut } =
    useSession();
  const isLoggedIn = !!session;

  return (
    <header className="border-b bg-gray-100 py-3 dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">Notes</Link>

        <div className="flex items-center gap-4">
          {!loading &&
            (isLoggedIn ? (
              <Button onClick={handleSignOut}>Sign Out</Button>
            ) : (
              <Button onClick={handleAuthentication}>Sign In</Button>
            ))}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
