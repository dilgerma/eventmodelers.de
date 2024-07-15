
import Card from '../components/card';
import Navigation from '../components/navigation';
import SEO from '@/components/seo';
import fs from "fs"
import path from "path"
import BlogEntry from '@/components/BlogEntry';
import React, {useState, useEffect} from 'react';


function reformatDate(fullDate) {
    const date = new Date(fullDate)
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}


export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'posts', 'posts.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    var data = JSON.parse(jsonData)

    return {
        props: {
            data,
        },
    };
}

export default function Slug(props) {
    const [tag, setTag] = useState("")
    return (
        <div>
            <SEO title="Nebulit GmbH | Blog"/>

            <div className="content container bigger contentElement">
                <div className={"topBorder"}></div>

                <Card headline={""} textLeft={false} full={true} image={"/assets/nebulit.png"}
                      shadow={false}>


                    <div className={"has-text-centered"}>
                        {props.data.tags.map((it, idx) => {
                            var css = tag == it ? "button  padding is-info" : "button padding is-light"
                            return <button onClick={()=>setTag(tag == it ? "" : it)} key={idx} className={css}>{it}</button>
                        })}
                    </div>
                    <div className={"columns top-margin is-multiline"}>
                        {props.data.posts.filter((it)=>it.enabled !== false).filter((it)=>tag == "" || it.tags.indexOf(tag.toLowerCase()) != -1).map(((post, idx) => {
                            return <div key={idx} className={"column is-flex  is-one-third"}>
                                <section className={"blog-index"}>
                                <BlogEntry key={idx}
                                                                                               post={post}></BlogEntry>
                                </section>
                            </div>
                        }))}
                    </div>

                </Card>

            </div>
            <div className={"notification is-info is-light has-text-centered"}>
                                           Du willst deinen Artikel hier veröffentlichen? Mach hier einen Vorschlag.
                                           </div>
        </div>
    )
}
