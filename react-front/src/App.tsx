import { gql, useQuery } from "@apollo/client";
import { useBooksQuery } from "./graphql/generated";

function App() {
  const { data: { books = [] } = {} } = useBooksQuery();

  return (
    <div>
      {books.map((book) => {
        return <div key={book.id}>{book.title}</div>;
      })}
    </div>
  );
}

export default App;
