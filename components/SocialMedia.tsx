import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Video(props: { platform: string, author: string, link: string, image:string, title: string, desc?: string }) {
    return (<div>
        <div className="has-text-centered top-margin">
            <h3>{props.title}</h3>
            <div className={"top-margin"}>{props.desc}</div>


            {props.image ?  <Zoom>
                <img
                    src={props.image}
                    width="500"
                />
            </Zoom> : <span/>}
            <small>Quelle: {props.platform} / <a href={props.link}>Link</a></small>
        </div>
    </div>)
}
