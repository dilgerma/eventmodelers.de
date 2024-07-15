import Link from 'next/link'

function BlogEntry({post}) {
    return (
        <div>

            <div className="card top-margin">
                <div className="card-content">

                    <div className="content">
                        <div className={"has-text-centered"}>
                            {post.tags.map((it, idx) => {
                                return <div key={idx} className={"tag is-info"} style={{"margin-right":"5px"}}>{it}</div>
                            })}
                        </div>
                        <div className="top-margin has-text-centered">
                            <a
                                target="_blank"
                                href={post.slug}
                            >
                                <img className="shadow"
                                     src={post.image}/>
                            </a>
                        </div>
                        <div className="bigger2 has-text-centered">{post.date}</div>
                        <h2 className="blue has-text-centered"><span className="blue margin-side ">{post.title}</span>
                        </h2>
                        <h3 className=" has-text-centered smaller"><span
                            className="blue margin-side">{post.subtitle}</span>
                        </h3>

                        <section>

                            <div className="has-text-centered top-margin-container">
                                <h3 className="" dangerouslySetInnerHTML={{"__html": post.content}}></h3>
                                <div>
                                    <a className={"button is-info"} href={post.slug}>Zum Artikel</a>
                                </div>
                                <div>
                                    {post.author != null ? `Autor: ${post.author}` :""}
                                </div>

                            </div>


                        </section>

                    </div>
                </div>

            </div>

        </div>
    )
        ;
}

export default BlogEntry;
