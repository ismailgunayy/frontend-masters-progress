/** @jsx jsx */
import { jsx } from "theme-ui";

const Note = ({ note }) => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Note: {note.id} </h1>
    </div>
  );
};

export default Note;

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`http://localhost:3000/api/notes/${params.id}`);

  if (!response.ok) {
    res.writeHead(302, { Location: "/notes" });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  if (data) {
    return {
      props: { note: data },
    };
  }
}

// export async function getStaticPaths() {
//   // get all the paths for your notes from an API
//   // or file system
//   const results = await fetch("http://localhost:3000/api/notes");
//   const notes = await results.json();
//   const paths = notes.data.map((note) => {
//     return {
//       params: { id: note.id.toString() },
//     };
//   });
//   /*
//   [
//     {params: {id: '1'}},
//     {params: {id: '2'}},
//   ]
//   */
//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(`http://localhost:3000/api/notes/${params.id}`);
//   const note = await res.json();
//   return {
//     props: { note: note.data },
//   };
// }
