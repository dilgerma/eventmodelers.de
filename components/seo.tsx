import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";


const settings = {
  meta: {
    rootUrl: "https://www.eventmodelers.de/",
    title: "Eventmodelers - die Eventmodeling Community",
    description: "15 Jahre Softwareexpertise.",
    social: {
    },
  },
};

const SEO = (props) => {
  const { title, description, image, canonical,keywords} = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="name" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords ? keywords : "Softwareentwicklung, Domain-Driven Design, kollaborative Software Modellierung, CQRS, Eventbasierte Architektur, Agile Entwicklung, Event Storming, Microservices, Reaktive Systeme"}/>

        {image != undefined ? <meta name="image" content={image || ""} /> : ""}
      {canonical !== undefined ? <link rel="canonical" href={"https://www.eventmodelers.de" + canonical} /> : ""}
    </Head>
  );
};

SEO.defaultProps = {
  title: settings && settings.meta && settings.meta.title,
  description: settings && settings.meta && settings.meta.description,
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  canonical: PropTypes.string,
    keywords:PropTypes.string,
};

export default SEO;
