import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Note } from "./Note";
import {prettyDOM} from '@testing-library/react';
test("component renders", () => {
  const note = {
    title: "NOTA DEL TEST",
    body: "camiones de la nota en el test",
  };
  const component = render(<Note title={note.title} body={note.body} />);
  component.getByText("camiones de la nota en el test");
  component.getByText("NOTA DEL TEST");
  //expect(component.container).toHaveTextContent(
   // "camiones de la nota en el test"
  //);

  //COMPONENT DEBUG MUSTRA LO QUE SE RENDERIZA
  component.debug()

  //QUERY SELECTOR SIRVE PARA SELECCIONAR UN ELEMENTO RENDERIZADOY RENDERIZARLO
  const p = component.container.querySelector('p')
  console.log(prettyDOM(p))

});
