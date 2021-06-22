// const panels = document.querySelectorAll('.panel');

// panels.forEach((panel) => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses()
//         panel.classList.add('active')
//     })

// })

// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// };
const url = 
const app = new Vue(
    {
        el: '#app',
        data: {
            counter: 0,
            images: [
                'https://images.unsplash.com/photo-1616242467470-510e05ca0b5b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1616242467470-510e05ca0b5b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1616242467470-510e05ca0b5b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            ]
        },
        methods: {
            nextPhoto() {
                (this.counter == this.images.length - 1) ? this.counter = 0 : this.counter++;
            }

        }
    });