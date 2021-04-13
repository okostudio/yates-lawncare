import Head from "next/head";
import { useEffect } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import List from "../components/List";
import Main from "../components/Main";
import Month from "../components/Month";
import YatesFooter from "../components/YatesFooter";

export default function Page (props) {


    useEffect(()=>{
        console.log("props", props);
    })


    return (
        <Main>
            <Head>
                <title>Yates {props.label} Lawn Care Tips</title>
                <link rel="icon" href="/favicon.ico" />
                <script src="./vendor/ical.js" type="text/javascript"></script>
            </Head>
            <Container>
                <Header season={props.season} />
                <Month {...props.months[0]} season={props.season} more={props.more}>
                    <List season={props.season} items={props.months[0].list} month={props.months[0].monthName}></List>
                </Month>

                <Month {...props.months[1]} season={props.season} more={props.more}>
                    <List season={props.season} items={props.months[1].list} month={props.months[1].monthName}></List>
                </Month>

                <Month {...props.months[2]} season={props.season} more={props.more}>
                    <List season={props.season} items={props.months[2].list} month={props.months[2].monthName}></List>
                </Month>


                <footer>
                    <h3>Click to discover other seasons’ lawn care guides</h3>
                    <nav>
                        <a href="./summer.html">Summer Lawn Guide</a>
                        <a href="./autumn.html">Autumn Lawn Guide</a>
                        <a href="./winter.html">Winter Lawn Guide</a>
                    </nav>
                    <p><small><sup>&reg;</sup>Yates and Yates Weed n Feed are registered trade marks of DuluxGroup (Australia) Pty Ltd. <sup>&reg;</sup>Baythroid is registered trade mark of the Bayer Group. ™ Waterwise and Great things start with Yates is a trade mark of DuluxGroup (Australia) Pty Ltd. </small></p>

                </footer>
                <YatesFooter />
            </Container>
        </Main>
    )
}

export async function getStaticProps(context) {
    return {
        props: {
            "season": "spring",
            "label": "Spring",
            more: 'https://www.yates.com.au/lawn/grow/top-tips-spring-lawn-care/',
            months: [
                {
                    title: "It’s time to take care of your soil and roots",
                    monthName: 'sep',
                    list: [
                        "<p><strong>Rake</strong><br>Lower the mower and get out the rake, it's time to remove old growth.</p>",
                        "<p><strong>Water Deeply</strong><br>Fertilise and water deeply to promote fast recovery.</p>",
                        "<p><strong>Fertilise</strong><br>Try Yates<sup>&reg;</sup> Dynamic Lifter<sup>&reg;</sup> Concentrated Lawn Food to improve your soil and encourage new growth.</p>"
                    ],
                    more: 'https://www.yates.com.au/lawn/grow/top-tips-spring-lawn-care/',
                    calMonth: 9,
                    calDesc: "Take care of turf soil and roots: lower the mower height and water deeply. Apply Yates® Dynamic Lifter® Concentrated Lawn Food."
                },
                {
                    title: "Protecting your lawn against lawn grubs &amp; weeds",
                    monthName: 'oct',
                    list: [
                        "<p><strong>Fertilise</strong><br>If your lawn needs a boost, apply fertiliser 6 weeks after the first feed.</p>",
                        "<p><strong>Weed</strong><br>If weeds are still a problem, use another dose of a Yates<sup>&reg;</sup> weed killer.</p>",
                        "<p><strong>Pest</strong><br>Protect against lawn grubs with Yates<sup>&reg;</sup> Grub Kill & Protect. </p>"
                    ],
                    calMonth: 10,
                    calDesc: "Protect the lawn against lawn grubs &amp; weeds. Apply Yates® Grub Kill &amp; Protect to prevent lawn pests."
                },
                {
                    title: "Maximise the water usage on your lawns",
                    monthName: 'nov',
                    list: [
                        "<p><strong>Water Deeply</strong><br>Water your lawn deeply once a week, preferably in the morning, for best results.</p>",
                        "<p><strong>Soil Wetter</strong><br>Try Yates<sup>&reg;</sup> Waterwise<sup>TM</sup> Soil Wetter to improve water penetration. </p>",
                    ],
                    calMonth: 11,
                    calDesc: "Maximise water usage on the lawn with Yates® Waterwise™ Soil Wetter, which improves water penetration."
                },
            ]
        }
    }
}