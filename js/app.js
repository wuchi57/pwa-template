const images = [
  { name: 'Perspiciatis', image: './assets/img-1.png' },
  { name: 'Voluptatem', image: './assets/img-2.jpeg' },
  { name: 'Explicabo', image: './assets/img-3.webp' },
  { name: 'Rchitecto', image: './assets/img-4.webp' },
  { name: 'Beatae', image: './assets/img-5.png' },
  { name: 'Vitae', image: './assets/img-6.jpg' },
  { name: 'Inventore', image: './assets/img-7.png' },
];

const showImages = () => {
  let output = ""
  images.forEach(
      ({ name, image }) =>
          (output += `
              <div class="card">
                <img class="card-avatar" src=${image} />
                <h3 class="card-title">${name}</h3>
                <a class="card-link" href="#">visit</a>
              </div>
              `)
  )
  const container = document.querySelector('.container');
  container.innerHTML = output
}

document.addEventListener('DOMContentLoaded', showImages)

if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
        .register('/service-worker.js')
        .then(res => console.log('service worker registered'))
        .catch(err => console.log('service worker not registered', err))
  })
}
