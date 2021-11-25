import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { Toggeable } from "./Toggeable";

describe('<Toggeable>', ()=>{
    const label = 'Toggle label'
    let component

    beforeEach(()=>{
        component = render(
        <Toggeable buttonLabel={label}>
                <div className='testDiv'>textContent</div>
        </Toggeable>)
    })

    test('renders its children', ()=>{
       const el = component.getByText('textContent');
       expect(el.parentNode).toHaveStyle('display:none')
    })
    test('after click must be display block', ()=>{
        const button = component.getByText(label);
        fireEvent.click(button)
        expect(button).toHaveStyle('display:inline-block')
     })
})