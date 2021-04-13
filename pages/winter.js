import Head from "next/head";
import { useEffect } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import List from "../components/List";
import Main from "../components/Main";
import Month from "../components/Month";
import YatesFooter from "../components/YatesFooter";

export default function Page(props) {


    useEffect(() => {
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
                        <a href="./spring">Spring Lawn Guide</a>
                        <a href="./summer">Summer Lawn Guide</a>
                        <a href="./autumn">Autumn Lawn Guide</a>
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
            "season": "winter",
            "label": "Winter",
            more: 'https://www.yates.com.au/lawn/grow/winter-lawn-care-tips/?utm_medium=lawn_care_tips_microsite&utm_campaign=lawn_care_tips_2021',
            months: [
                {
                    title: "Now’s the time to trim &amp; tidy",
                    monthName: 'jun',
                    list: [
                        "<p><strong>Trim</strong><br>Trim overhanging tree branches to allow more light on the lawn. </p>",
                        "<p><strong>Rake</strong><br>Rake up fallen leaves to help prevent lawn disease occuring. </p>",
                        "<p><strong>Check Irrigation</strong><br>Need a new irrigation system? Now is the perfect time to do it before Spring arrives. </p>"
                    ],
                    calMonth: 6,
                    calDesc: "Trim &amp; tidy the lawn: trim overhanging branches and rake up fallen leaves on the lawn. "
                },
                {
                    title: "Watch out for winter frost and lawn disease",
                    monthName: 'jul',
                    list: [
                        "<p><strong>Water</strong><br>Water early in the morning in winter to help prevent lawn disease. </p>",
                        "<p><strong>Reduce Foot Traffic</strong><br>Keep off the grass if you are prone to morning frost to prevent damage. </p>",
                    ],
                    calMonth: 7,
                    calDesc: "Watch out for winter frost and lawn disease and water early in the morning"
                },
                {
                    title: "Get ready for Spring",
                    monthName: 'aug',
                    list: [
                        "<p><strong>Aerate</strong><br>Aerate the soil to improve oxygen levels and water penetration.</p>",
                        "<p><strong>Maintain Mower</strong><br>Replace or sharpen the blades on the mower ready for the Spring growth. </p>",
                        "<p><strong>Weed</strong><br>Use Yates Weed 'n' Feed<sup>&reg;</sup> to keep weeds under control and feed the lawn at the same time. </p>",
                    ],
                    calMonth: 8,
                    calDesc: "Get the lawn ready for Spring: aerate the lawn, maintain the mower and apply Yates Weed 'n' Feed®"
                },
            ]
        }
    }
}