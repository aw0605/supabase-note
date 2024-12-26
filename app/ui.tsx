"use client";

import { useState } from "react";
import Header from "@/components/header";
import EmptyNote from "@/components/empty-note";
import NewNote from "@/components/new-note";
import Sidebar from "@/components/sidebar";
import NoteViewer from "@/components/note-viewer";

const notes = [
  {
    id: 1,
    title: "노트 1",
    content: "노트 내용입니다 1",
  },
  {
    id: 2,
    title: "노트 2",
    content: "노트 내용입니다 2",
  },
];

function UI() {
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  return (
    <main className="w-full h-screen flex flex-col">
      <Header />
      <div className="grow relative">
        <Sidebar
          activeNoteId={activeNoteId}
          setActiveNoteId={setActiveNoteId}
          setIsCreating={setIsCreating}
          notes={notes}
        />
        {isCreating ? (
          <NewNote setIsCreating={setIsCreating} />
        ) : activeNoteId ? (
          <NoteViewer note={notes.find((note) => note.id === activeNoteId)} />
        ) : (
          <EmptyNote />
        )}
      </div>
    </main>
  );
}

export default UI;
