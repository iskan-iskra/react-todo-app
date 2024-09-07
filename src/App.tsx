import { FC, useEffect } from "react";
import { todoService } from "./api";
const App: FC = () => {
  useEffect(() => {
    const getData = async () => {
      const data = await todoService.getTodoList();
      console.log(data);
    };
    getData();
  }, []);

  return (
    <>
      <h1>hello world</h1>
    </>
  );
};

export default App;
