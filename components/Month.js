import { useEffect, useRef, useState } from "react"
import html from "./../util/innterHtml";

export default function Month({season, monthName, more, calMonth, calDesc, children, title}) {
    
    const calbtn  = useRef();
    const [calLink, setCalLink] = useState('#');

    useEffect(()=>{
        const myCalendar = createCalendar({
            options: {
              class: 'my-class',
              
              // You can pass an ID. If you don't, one will be generated for you
              id: 'my-id'
            },
            data: {
              // Event title
              title: `Lawn Task: ${title}`,
          
              // Event start date
            //   start: new Date(`${new Date().getFullYear()}-${calMonth < 10? '0'+calMonth : calMonth}-01`),
              start: (`${new Date().getFullYear()}${calMonth < 10? '0'+calMonth : calMonth}01`),
              
              // Event duration (IN MINUTES)
            //   duration: 30,
          
              // You can also choose to set an end time
              // If an end time is set, this will take precedence over duration
            //   end: new Date(`${new Date().getFullYear()}-${calMonth < 10? '0'+calMonth : calMonth}-01`),
              end: (`${new Date().getFullYear()}${calMonth < 10? '0'+calMonth : calMonth}02`),
          
              // Event Address
              address: '',
          
              // Event Description
              description: (calDesc)
            }
          });

        //   console.log(myCalendar);
          setCalLink(myCalendar.google);

    },[]);

    const handleAddCal = () => {


    }

    return (
        <article>
            <div className="side" style={{"backgroundImage":`url("./assets/${season}/side-bg-${monthName}.png")`}}>
                <img src={`./assets/${season}/side-month-${monthName}.png`} alt={monthName} />
            </div>
            <div>
                <header>
                    <h2 dangerouslySetInnerHTML={html(title)} ></h2>
                </header>
                {children}
                <footer>
                    <a href={more} className="more">Learn more</a>
                    <a href={calLink} target="_blank" className="cal" onClick={handleAddCal()} ref={calbtn}><img src="./assets/icon-cal.png" />Add reminder to calendar</a>
                </footer>
            </div>
        </article>
    )
}