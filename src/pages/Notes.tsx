import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Notes() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold sm:text-4xl">Your Notes</h1>
        <Button asChild>
          <Link to="/new">Create a new Note</Link>
        </Button>
      </div>
    </>
  );
}
