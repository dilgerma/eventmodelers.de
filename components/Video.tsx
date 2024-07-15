export default function Video(props: { video: string, playlist?: boolean, title: string, desc?: string }) {
    return (<div>
        <div className="has-text-centered top-margin">
            <h3>{props.title}</h3>
            <div className={"top-margin"}>{props.desc}</div>
            <div className={"top-margin"}>
                {props?.playlist ?
                    <iframe id="ytplayer"
                            width="500" height="281"
                            src={"https://www.youtube-nocookie.com/embed?listType=playlist&list=" + props.video + "&autoplay=0"}
                            frameBorder="0" allowFullScreen/> :
                    <iframe id="ytplayer" width="500" height="281"
                            src={"https://www.youtube-nocookie.com/embed/" + props.video + "?autoplay=0"}
                            frameBorder="0" allowFullScreen/>}
            </div>
        </div>
    </div>)
}
