import '../scss/styles.scss';

import { SPEAKERS } from './data';

// Wait till domcontentloaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Check if it is a mobile, tablet or any touch device due to Skewed feature
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        document.getElementById('wrapperForMobile').style.display = 'block';
    } else {
        document.getElementById('wrapper').style.display = 'block';        
        // Implement SKEW feature
        const wrapper = document.getElementById('wrapper');
        const topLayer = wrapper.querySelector('.top');
        const handle = wrapper.querySelector('.animLine');
        let skew = 0;
        let delta = 0;

        if (wrapper.className.indexOf('skewed') != -1) {
            skew = 2000;
        }
        // Add mousemove eventlistenes to the wrapper tag and set the proper values
        wrapper.addEventListener('mousemove', (e) => {
            delta = (e.clientX - window.innerWidth / 2) * 0.5;
            handle.style.left = e.clientX + delta + 'px';
            topLayer.style.width = e.clientX + skew + delta + 'px';
        });
    }

    // Check if it is an Iphone or Ipad or Ipod due to autoplay video
    if ( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
        document.getElementById('video').style.display = 'none';   
        document.getElementById('fallbackBackground').style.display = 'block !important';        
    }

    // Add sticky button feature, show and hide
    window.onscroll = () => scrollFunction()

    let scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("fixedBtn").style.display = "block";
        } else {
            document.getElementById("fixedBtn").style.display = "none";
        }
    }


    // Fill speakers section from source
    let speakersHTML = '';
    SPEAKERS.forEach(person => {
        speakersHTML += `
        <li>
            <img src="${person.img}" width="100%" alt="${person.name} image">
            <span>${person.name}</span>
            <span>${person.title}</span>
            <span>${person.company}</span>
        </li>
        `
    })

    // Add speakers to HTML
    document.querySelector('.speakers ul').innerHTML = speakersHTML;
    
    const dropBtn = document.getElementById('drop');
    let clicked = true;
    dropBtn.addEventListener('click', () => {
        if (clicked) {
            document.getElementById('dropbtn').style.display = 'block';
            clicked = false;
        } else {
            document.getElementById('dropbtn').style.display = 'none';            
            clicked = true;
        }

    })


});
