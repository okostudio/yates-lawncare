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
                        <a href="./autumn.html">Autumn Lawn Guide</a>
                        <a href="./winter.html">Winter Lawn Guide</a>
                        <a href="./spring.html">Spring Lawn Guide</a>
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
            "season": "summer",
            "label": "Summer",
            more: 'https://www.yates.com.au/lawn/grow/summer-lawn-care-tips/',
            months: [
                {
                    title: "The easy way to green up your lawn",
                    monthName: 'dec',
                    list: [
                        "<p><strong>Raise Mower</strong><br>Raise your mower height to help relieve heat stress. </p>",
                        "<p><strong>Rotate BBQ</strong><br>Rotate your BBQ area so the lawn gets even foot traffic. </p>",
                        "<p><strong>Fertilise</strong><br>Use Yates<sup>&reg;</sup> Lawn Fertiliser to green up the lawn.</p>"
                    ],
                    calMonth: 12,
                    calDesc: "Green up your lawn: raise the mower height and fertilise."
                },
                {
                    title: "It’s time to make the most of your lawn",
                    monthName: 'jan',
                    list: [
                        "<p><strong>Rotate Lawn Games</strong><br>Enjoy a game of backyard cricket, but make sure to rotate the game area around to avoid lawn wear. </p>",
                        "<p><strong>Greywater</strong><br>Use greywater to irrigate  the lawn if water availability is scarce.</p>",
                        "<p><strong>Soil Wetter</strong><br>Try Yates<sup>&reg;</sup> Waterwise<sup>&reg;</sup> Soil Wetter to improve water penetration. </p>"
                    ],
                    calMonth: 1,
                    calDesc: "Make the most out of your lawn: rotate lawn games to avoid wear; and try Yates® Waterwise™ Soil Wetter to improve water penetration"
                },
                {
                    title: "The key to a great lawn this month: water, water, water",
                    monthName: 'feb',
                    list: [
                        "<p><strong>Water</strong><br>Water the lawn deeply once a week for best results.</p>",
                        "<p><strong>Fertilise</strong><br>Try Yates<sup>&reg;</sup> Dynamic Lifter<sup>&reg;</sup> Concentrated Lawn Food to help the lawn recover from the Summer stress. </p>",
                    ],
                    calMonth: 2,
                    calDesc: "Help your lawn beat the heat: water deeply once a week and fertilise with Yates® Dynamic Lifter Concentrated Lawn Food"
                },
            ]
        }
    }
}