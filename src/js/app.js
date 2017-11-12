import '../scss/styles.scss';

import { SPEAKERS } from './data';

// Wait till domcontentloaded
document.addEventListener('DOMContentLoaded', () => {

    let video = document.getElementById('video');
        video.addEventListener('click', () => {
        video.play();
    }, false);

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

    // Add sticky button feature, show and hide
    window.onscroll = () => scrollFunction()

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("fixedBtn").style.display = "block";
        } else {
            document.getElementById("fixedBtn").style.display = "none";
        }
    }

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

    document.querySelector('.speakers ul').innerHTML = speakersHTML;

});
