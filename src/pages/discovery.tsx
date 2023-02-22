import { type NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

//Note that SSR is not used because Leaflet does not allow for it. When it comes to rendering the markers when we have user data, an approach such as incremental static generation might be wise for this use-case, but tbh I am still learning about these methods to be certain. For now this works. 

const Discovery: NextPage = () => {
   const MapWithWithNoSSR = dynamic(() => import("../components/map"), {
        ssr: false,
   });
    return (
        <>
            <Head>
                <title>Discovery</title>
                <meta name="description" content="Making remote work" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>Discovery page!</div>
            <main>
                <div id="map">
                    <MapWithWithNoSSR />
                </div>
            </main>
        </>
    )
}

export default Discovery;