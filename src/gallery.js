export function gallery(){
    const galleryContent = document.getElementById("gallery-content");
    let counter = 0;  
      element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

const setCounter = (count) => {
    counter = count
    element.innerHTML = `${images[counter]}`
  }
    const images = [
        "https://preview.redd.it/i-mean-yeah-i-can-see-it-v0-3vbz185en6cg1.jpeg?auto=webp&s=6267ee2edb958e33332a1f9002cab6d5ea5fdd22",
        "https://preview.redd.it/1z8lyihas6bg1.jpeg?auto=webp&s=c145ea527221fb937772cb4ad56493589afa194c",
        "https://preview.redd.it/ive-finally-found-you-transworld-v0-cej2xaq9c6cg1.jpeg?width=1080&crop=smart&auto=webp&s=7e5555d898b98a53f7d99d7eb20157f4567bd4b5  ",
        "https://preview.redd.it/hange-zo%C3%AB-is-a-mood-v0-nyf2ullpfybg1.jpeg?auto=webp&s=bae5a6691d9763bc71848f9f354d5baab53a3555",
        "https://preview.redd.it/i-made-a-minecraft-hd-bl%C3%A5h%C3%A5j-texture-v0-39s5g4xrx3cg1.png?auto=webp&s=0ff4f852652fa95a8b2e361cef4b1889c7b5188a",
        "https://preview.redd.it/the-more-you-know-v0-lfall8rar2ag1.png?width=1080&crop=smart&auto=webp&s=4a3fe4b2b919ba85c6ab6bf5cf152addc9686ef9"
    ];

  //  images.forEach(src => {
       // const img = document.createElement("img");
       // img.src = src;
      //  img.alt = "Gallery Image";
      //  galleryContent.appendChild(img);
   // });
///}
