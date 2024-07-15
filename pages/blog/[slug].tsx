import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import glob from "glob"
import path from "path"
import Card from '../../components/card';
import Navigation from '../../components/navigation';
import SEO from '@/components/seo';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'


function reformatDate(fullDate) {
    const date = new Date(fullDate)
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}

export async function getStaticProps(context) {
    // extracting the slug from the context
    const {slug} = context.params

    // retrieving the Markdown file associated to the slug
    // and reading its data
    const content = await import(`../../posts/${slug}.md`)
    const data = matter(content.default)

    return {
        props: {
            siteTitle: slug,
            frontmatter: data.data,
            markdownBody: data.content,
            description: data.data.description?data.data.description: ""
        },
    }
}

export async function getStaticPaths() {
    // getting all .md files from the posts directory
    const postsDirectory = path.join(process.cwd(), 'posts');
    const blogs = glob.sync(path.join(postsDirectory, '*.md'))

    // converting the file names to their slugs
    const blogSlugs = blogs.map(file => '/blog' + file.replace(postsDirectory, "").replace(".md", ""))
    // creating a path for each /of the `slug` parameter

    return {
        paths: blogSlugs,
        fallback: false,
    }
}

export default function Slug({frontmatter, markdownBody, siteTitle, slug, description}) {
    return (
        <div>
            <SEO title={siteTitle.replaceAll("-"," ")} description={description}/>

            <div className="content container bigger contentElement">
                <div className={"topBorder"}></div>
                <Card headline={frontmatter.title} centered={false} textLeft={false} full={true} image={"/assets/nebulit.png"}
                      shadow={false}>
                    <div>


                        {/*<h3>{reformatDate(frontmatter.date)}</h3>*/ }
                    </div>
                    <div>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                code({ node, className, children, ...props }) {
                                  const match = /language-(\w+)/.exec(className || "");
                                  return match ? (
                                    <SyntaxHighlighter
                                       // theme
                                      language={match[1]}
                                      PreTag='section' // parent tag
                                      {...props}
                                    >{String(children).replace(/\n$/, "")}</SyntaxHighlighter>
                                  ) : (
                                    <code className={className} {...props}>
                                      {children}
                                    </code>
                                  );
                                },
                              }}

                        >{markdownBody}</ReactMarkdown>
                    </div>
                    <div className="headline-divider"></div>
                    {frontmatter.showContact ? <div>
                        <p>{frontmatter.finalText}.</p>
                        <p className={"top-margin has-text-centered"}>
                                                            <a target="_blank"
                                                               href="https://outlook.office365.com/owa/calendar/NebulitGmbH@nebulit.de/bookings/s/SchaAYI1q02_E0rbpW5Xhw2"
                                                               className={"button is-success"}>
                                                                <i className="fa-solid fa-phone padding"></i>
                                                                <span className={"bigger"}>Jetzt mehr erfahren</span></a>
                                                        </p>
                    </div> : <span/>}
                </Card>
            </div>
        </div>
    )
}
