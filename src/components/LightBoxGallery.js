import React, { useState } from "react"
import {GatsbyImage } from "gatsby-plugin-image"
import FsLightbox from "fslightbox-react";

import * as styles from '../styles/lightboxgallery.module.css'

export default function LightBoxGallery(props) {

    const  {data, title} = props;

    let galleryImaegs = [];
    {data.gallery.edges.map(({node}) =>
    galleryImaegs.push(node.publicURL)  
    )}

	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

	function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}

  return (
    <div className={styles.lightBoxGallery}>
      {title != null && <h1> - {title} - </h1>}
      <div className={styles.lightBoxGalleryImages}>
        {data.gallery.edges.map(({node},index) =>          
          <span key={node.id} onClick={() => openLightboxOnSlide(index+1)}>
            <GatsbyImage image={node.childrenImageSharp[0].gatsbyImageData} alt={node.base.split('.')[0]}/>
          </span>
        )}
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={galleryImaegs}
        slide={lightboxController.slide}
      />
    </div>
  )
}
