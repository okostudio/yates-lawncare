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
                        <a href="./winter/">Winter Lawn Guide</a>
                        <a href="./spring/">Spring Lawn Guide</a>
                        <a href="./summer/">Summer Lawn Guide</a>
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
            "season": "autumn",
            "label": "Autumn",
            more: 'https://www.yates.com.au/lawn/grow/autumn-lawn-care-tips/?utm_source=Product_Packaging&utm_medium=QR_Code&utm_campaign=Yates_Weed_n_Feed_2021_Trial',
            months: [
                {
                    title: "Prepare your lawn for Winter",
                    monthName: 'mar',
                    list: [
                        "<p><strong>Aerate</strong><br>Aerate the soil to improve oxygen levels and water penetration.</p>",
                        "<p><strong>Repair</strong><br>Repair patches in the lawn with seed, so it establishes before the winter cold.</p>",
                        "<p><strong>Pest</strong><br>Lawn pests may be around, try Yates<sup>&reg;</sup> Baythroid<sup>&reg;</sup> Advanced for Lawns.</p>"
                    ],
                    calMonth: 3,
                    calDesc: "Aerate your lawn and repair any patches before the winter weeds come. "
                },
                {
                    title: "Watch out for weeds in your lawn",
                    monthName: 'apr',
                    list: [
                        "<p><strong>Weeds</strong><br>Watch out for weeds.</p>",
                        "<p><strong>Bindii</strong><br>If Bindii is a problem, use Yates<sup>&reg;</sup> Bindii & Clover Weeder concentrate.</p>",
                    ],
                    calMonth: 4,
                    calDesc: "Keep an eye out for weeds and apply Yates® Bindii &amp; Clover weeder concentrate if needed"
                },
                {
                    title: "Continue to keep pesky weeds away ",
                    monthName: 'may',
                    list: [
                        "<p><strong>Rotate Fire Pit</strong><br>If you enjoy a fire pit in the winter, protect the lawn. Use a protective base and rotate the fire pit area to reduce foot traffic and lawn stress.</p>",
                        "<p><strong>Weed</strong><br>Use Yates Weed 'n' Feed<sup>&reg;</sup> to keep weeds under control. </p>",
                    ],
                    calMonth: 5,
                    calDesc: "Keep lawn weeds away with Yates Weed 'n' Feed®."
                },
            ]
        }
    }
}