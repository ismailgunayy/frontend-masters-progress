import Link from "next/link";
/** @jsx jsx */
import { jsx } from "theme-ui";

export default ({ notes }) => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>My Notes</h1>

      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {notes.map((note) => (
          <div sx={{ width: "33%", p: 2 }} key={note.id}>
            <Link href="/notes/[id]" as={`/notes/${note.id}`}>
              <a
                sx={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <div sx={{ variant: "containers.card" }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/notes`);
  const { data } = await res.json();

  return {
    props: { notes: data },
  };
}
