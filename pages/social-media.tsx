import {Inter} from 'next/font/google'
import Card from '../components/card';
import SEO from '@/components/seo';
import Video from '@/components/Video';
import React from "react";
import SocialMedia from '@/components/SocialMedia';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            <div className={"top"}>
                <SEO
                    title={"Eventmodeling und Eventsourcing Social Media Entries"}
                    description={"Auf dieser Seite findest du interessante Einträge aus Social Media Plattformen wie LinkedIn, Twitter etc. inkl. Referenzen auf die originalen Posts."}
                    keywords={"Eventmodeling, eventbasierte Entwicklung, Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Eventmodeling, Microservices, Reaktive Systeme"}/>

            </div>
            <div className="content bigger">


                <div className="contentElement">


                    <div className={"topBorder container"}>

                        <Card
                            headline=""
                            textLeft={false} full={true}
                            image={"/assets/md2.png"}
                            id="eventmodelling"
                            shadow={false}>
                            <div className={"has-text-centered nolist"}>


                                <h1>
                                    <div className={"blue has-text-centered"}>Eventmodeling & Eventsourcing Social Media
                                    </div>
                                </h1>

                                <div className={"top-margin"}/>

                                <section>
                                    <div className={"columns is-multiline"}>
                                        <div className={"column is-4"}>
                                            <SocialMedia
                                                image={"/assets/socialmedia/allardbujize_numberofclasses.png"}
                                                platform={"LinkedIn"}
                                                author={"Allard Buijze"}
                                                link={"https://www.linkedin.com/posts/abuijze_event-sourcing-friday-fud-if-every-change-activity-7247874959530676224-Vod5"}
                                                title={"if every change becomes an event, won't we end up with an immense amount of event types?"}></SocialMedia>
                                        </div>

                                        <div className={"column is-4"}>
                                            <SocialMedia
                                                image={"/assets/socialmedia/allard_changedatamodel.png"}
                                                platform={"LinkedIn"}
                                                author={"Allard Buijze"}
                                                link={"https://www.linkedin.com/posts/abuijze_event-sourcing-friday-fud-what-if-i-need-activity-7245367356808478720-Em_b?utm_source=share&utm_medium=member_desktop"}
                                                title={"what if I need to change my data model?"}></SocialMedia>
                                        </div>

                                        <div className={"column is-4"}>
                                            <SocialMedia
                                                image={"/assets/socialmedia/allard_readonly.png"}
                                                platform={"LinkedIn"}
                                                author={"Allard Buijze"}
                                                link={"https://www.linkedin.com/posts/abuijze_event-sourcing-friday-fud-how-can-i-correct-activity-7242786363547283456-1QPj?utm_source=share&utm_medium=member_desktop"}
                                                title={"what if I need to change my data model?"}>
                                                <p>
                                                Event Sourcing "Friday FUD": How can I correct my data if my event streams are "append only"?

                                                Although it's a common question (I got it twice this week), it still takes me off guard. Strange, isn't it? It's quite logical to have to think about corrections when using an append-only store.

                                                And it's exactly the "thinking about corrections" where the difference is.

                                                But first, where does the need to do corrections come from? There are several reasons. The most common one I recognize is mistakes in the implementation. The system made a decision based on the data it had available, but the implementation did not exactly follow specifications. Ouch. It happens, though. We fix the mistake, and push it to production. We then head to the database and change the data, pretending nothing happened. Job done. Is it?

                                                That's lovely if your software runs in isolation. But what if it integrates with other systems that were triggered by the changes in the system with the error? Will you be able to trace the mistake through those as well? What about other sources of information that are derived from the one you just fixed? Will they really all be updated accurately?

                                                Event Sourcing forces us to think about these changes completely differently, much like an accountant looks at the books. Instead of changing data, we append another change to the system to correct the mistake that we've made. Ideally, it becomes part of the design process. While an accountant does this for auditability and traceability, your system may need to do this to be able to replicate the corrections properly to the systems it connects with.

                                                I've been tracking several projects that employ event sourcing for the past 15 years. I've only encountered one situation where a major data fix had to be made across a large number of aggregates. Just one. It was in the very early days of Axon when the test fixtures weren't as elaborate as they are today. That allowed some scenarios to be left untouched by tests. So how did this get fixed? Well, nothing special. They wrote a little batch script that would query the database for all the aggregates with the mistake and send each of them one or more commands to fix their state.

                                                The more interesting question is why there is only one known case in more than a hundred projects where this was needed. This has to do with the way Event-Sourced systems deal with state changes. Unlike traditional systems, where the current state is at the core, these state changes are the system's first-level citizens. The chance of appending a wrong event is much smaller than the chance of performing a little update query incorrectly. It's also easier to test behavior than it is to test state.

                                                So, interestingly enough, the answer to the question "How can I correct data if my event streams are append-only?" is that you probably won't have to. If you do, fix it forward just like you'd do with your code in Git.
                                                </p>
                                                </SocialMedia>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </Card>
                    </div>
                </div>


            </div>
        </div>
    )
}
