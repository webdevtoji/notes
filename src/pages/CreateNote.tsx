import { CreateNoteForm } from "./CreateNoteForm";

export function CreateNote() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold sm:text-4xl">Create Note</h1>
      <CreateNoteForm />
    </div>
  );
}
